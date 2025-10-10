import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../redux/slices/auth'
import iconArrowDown from '../../assets/icons/icon-arrow-down.svg'
import { Link } from 'react-router'

export default function TrackRating({ id }) {

    const isAuth = useSelector(selectIsAuth)
    const UserData = useSelector(state => state.auth.data)

    const ratingTitle = ["Критерий1", "Критерий2", "Критерий3", "Критерий4", "Критерий5",]
    const [rating, setRating] = useState([5, 5, 5, 5, 5])
    const [ratingOverall, setRatingOverall] = useState(25)
    const [review, setReview] = useState('')
    const [reviewOpen, setReviewOpen] = useState(false)
    const [reviewError, setReviewError] = useState(false)

    useEffect(() => {
        setRatingOverall(prev => prev = 0)

        rating.map(e => {
            setRatingOverall(prev => prev += e)
        })
    }, [rating])

    const onChangeRating = (event) => {
        const newRating = rating.map((e, index) => {
            if (index === Number(event.target.dataset.listid)) {
                return Number(event.target.value)
            }
            return e
        })

        setRating(newRating)
    }

    const onClickSubmitRating = async () => {

        if (review !== '' && review.length < 300) {
            setReviewError(true)
            return false
        }

        await axios.patch(`/track/${id}`, {
            ratingOverall: ratingOverall,
            ratingCriteria: rating,
            userId: UserData.user._id,
            review: review,
        })
        window.location.reload();
    }

  return (
    <div className="track__rating">
        <h2 className="track__rating-title title">Оценить трек</h2>
        <div className="track__rating-wrapper">
            <ul className="track__rating-list">
                {
                    ratingTitle.map((e, indexTitle) => (
                        <li className="track__rating-item" key={indexTitle}>
                            <h3 className="track__rating-name">{e}</h3>
                            <ul className="track__rating-radio-list">
                                {
                                    [...Array(10)].map((e, index) => (
                                        <li className="track__rating-radio-item" key={index}>
                                            <input type="radio" className="track__rating-radio-input" value={index + 1} checked={rating[indexTitle] === index + 1 ? true : false} disabled={rating[indexTitle] === index + 1 ? true : false} onChange={onChangeRating} id={`radio-${indexTitle}${index + 1}`} data-listid={indexTitle} />
                                            <label htmlFor={`radio-${indexTitle}${index + 1}`} className="track__rating-radio-label">{index + 1}</label>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
            <div className="track__rating-comment">
                <div className="track__rating-comment-top">
                    <h3 className="track__rating-comment-title">Написать обзор</h3>
                    <span className="track__rating-comment-desc">(Не обязательно)</span>
                    <img src={iconArrowDown} alt="" className={`track__rating-comment-icon ${reviewOpen ? 'open' : ''}`} onClick={() => setReviewOpen(!reviewOpen)} />
                </div>
                <div className={`track__rating-comment-content ${reviewOpen ? 'open' : ''}`}>
                    {
                        reviewError && <span className="track__rating-comment-error">Обзор должен быть минимум 300 символов</span>
                    }
                    <textarea className={`track__rating-comment-textarea ${reviewError ? 'error' : ''}`} placeholder="Напишите обзор к треку (от 300 до 3000 символов)" maxLength="3000" value={review} onChange={e => setReview(e.target.value)} onClick={() => setReviewError(false)}></textarea>
                    <span className="track__rating-comment-count">{review.length} / 3000</span>
                </div>
            </div>
            <div className="track__rating-general">
                <div className="track__rating-general-content">
                    <h3 className="track__rating-general-title">Общая оценка</h3>
                    <span className="track__rating-general-overall rating-overall">{ratingOverall}</span>
                </div>
            </div>
            {
                isAuth ?
                <>
                    {
                        UserData.user.ratingTracks.some(e => e.trackId === id)
                        ?
                        <span className="track__rating-none">Вы уже оценили этот трек</span>
                        :
                        <div className="track__rating-submit">
                            <button className="track__rating-submit-btn" onClick={onClickSubmitRating}>Оценить</button>
                        </div>
                    }
                </>
                :
                <div className="track__rating-nonauth">
                    <p className="track__rating-nonauth-text">Авторизуйтесь для оценки трека</p>
                    <button className="track__rating-nonauth-btn"><Link to="/login">Войти</Link></button>
                </div>
            }
        </div>
    </div>
  )
}
