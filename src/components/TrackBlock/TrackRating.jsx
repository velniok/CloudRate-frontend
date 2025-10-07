import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../redux/slices/auth'
import iconArrowDown from '../../assets/icons/icon-arrow-down.svg'

export default function TrackRating({ id }) {

    const isAuth = useSelector(selectIsAuth)
    const UserData = useSelector(state => state.auth.data)

    const ratingTitle = ["Текст1", "Текст2", "Текст3", "Текст4", "Текст5",]
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
        <h1 className="track__rating-title">Оценка трека</h1>
        <ul className="track__rating-list">
            {
                ratingTitle.map((e, index) => (
                    <li className="track__rating-item" key={index}>
                        <h3 className="track__rating-name">{e}</h3>
                        <div className="track__input-list">
                            <input type="radio" value={1} checked={rating[index] === 1 ? true : false} disabled={rating[index] === 1 ? true : false} onChange={onChangeRating} id={`radio-${index}1`} data-listid={index} className="track__input-item" />
                            <label htmlFor={`radio-${index}1`} className="track__input-label">1</label>
                            <input type="radio" value={2} checked={rating[index] === 2 ? true : false} disabled={rating[index] === 2 ? true : false} onChange={onChangeRating} id={`radio-${index}2`} data-listid={index} className="track__input-item" />
                            <label htmlFor={`radio-${index}2`} className="track__input-label">2</label>
                            <input type="radio" value={3} checked={rating[index] === 3 ? true : false} disabled={rating[index] === 3 ? true : false} onChange={onChangeRating} id={`radio-${index}3`} data-listid={index} className="track__input-item" />
                            <label htmlFor={`radio-${index}3`} className="track__input-label">3</label>
                            <input type="radio" value={4} checked={rating[index] === 4 ? true : false} disabled={rating[index] === 4 ? true : false} onChange={onChangeRating} id={`radio-${index}4`} data-listid={index} className="track__input-item" />
                            <label htmlFor={`radio-${index}4`} className="track__input-label">4</label>                                
                            <input type="radio" value={5} checked={rating[index] === 5 ? true : false} disabled={rating[index] === 5 ? true : false} onChange={onChangeRating} id={`radio-${index}5`} data-listid={index} className="track__input-item" />
                            <label htmlFor={`radio-${index}5`} className="track__input-label">5</label>
                            <input type="radio" value={6} checked={rating[index] === 6 ? true : false} disabled={rating[index] === 6 ? true : false} onChange={onChangeRating} id={`radio-${index}6`} data-listid={index} className="track__input-item" />
                            <label htmlFor={`radio-${index}6`} className="track__input-label">6</label>
                            <input type="radio" value={7} checked={rating[index] === 7 ? true : false} disabled={rating[index] === 7 ? true : false} onChange={onChangeRating} id={`radio-${index}7`} data-listid={index} className="track__input-item" />
                            <label htmlFor={`radio-${index}7`} className="track__input-label">7</label>
                            <input type="radio" value={8} checked={rating[index] === 8 ? true : false} disabled={rating[index] === 8 ? true : false} onChange={onChangeRating} id={`radio-${index}8`} data-listid={index} className="track__input-item" />
                            <label htmlFor={`radio-${index}8`} className="track__input-label">8</label>                                
                            <input type="radio" value={9} checked={rating[index] === 9 ? true : false} disabled={rating[index] === 9 ? true : false} onChange={onChangeRating} id={`radio-${index}9`} data-listid={index} className="track__input-item" />
                            <label htmlFor={`radio-${index}9`} className="track__input-label">9</label>
                            <input type="radio" value={10} checked={rating[index] === 10 ? true : false} disabled={rating[index] === 10 ? true : false} onChange={onChangeRating} id={`radio-${index}10`} data-listid={index} className="track__input-item" />
                            <label htmlFor={`radio-${index}10`} className="track__input-label">10</label>
                        </div>
                    </li>
                ))
            }
        </ul>
        <div className="track__review">
            <div className="track__review-top">
                <h3 className="track__review-title">Комментарий</h3>
                <span className="track__review-desc">(Не обязательно)</span>
                <span className="track__review-btn" onClick={() => setReviewOpen(!reviewOpen)}>
                    <img className={`track__review-btn-icon ${reviewOpen ? 'open' : ''}`} src={iconArrowDown} alt="" />
                </span>
            </div>
            <div className={`track__review-comment ${reviewOpen ? 'open' : ''}`}>
                {
                    reviewError && <span className="track__review-error">Комментарий должен быть минимум 300 символов</span>
                }
                <textarea id="review-text" onClick={() => setReviewError(false)} placeholder="Напишите комментарий к треку (от 300 до 3000 символов)" className={`track__review-textarea ${reviewError ? 'error': ''}`} onChange={e => setReview(e.target.value)} value={review} maxLength="3000"></textarea>
                <span className="track__review-count">{review.length} / 3000</span>
            </div>
        </div>
        <div className="track__general">
            <div className="track__general-wrapper">
                <h3 className="track__general-title">Общая оценка</h3>
                <span className="track__general-num rating-overall">{ratingOverall}</span>
            </div>
                {
                    isAuth ?
                     <>
                        {
                            UserData.user.ratingTracks.some(e => e.trackId === id) ? <span className="track__general-none">Вы уже оценили этот трек.</span>
                            : <button className="btn--green" type="button" onClick={onClickSubmitRating}>Отправить</button>
                        }
                     </>
                     : <span className="track__general-none">Авторизуйтесь для оценки треков.</span>
                }
        </div>
    </div>
  )
}
