import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLatestComment } from '../../redux/slices/track'
import { useEffect } from 'react'
import LatestCommentItem from './LatestCommentItem'

export default function LatestCommentBlock() {

    const dispatch = useDispatch()

    const LatestComment = useSelector(state => state.track.latestComments)

    useEffect(() => {
        dispatch(fetchLatestComment())
    }, [])

    return (
        <section className="latest-comment">
            <div className="latest-comment-wrapper">
                <div className="container">
                    <div className="latest-comment-inner">
                        <h2 className="latest-comment-title title">Последние обзоры пользователей</h2>
                        <div className="latest-comment__card">
                            <ul className="latest-comment__card-list">
                                {
                                    LatestComment &&
                                    LatestComment.map(e => (
                                        <LatestCommentItem key={e.userId} user={e.user} track={e.track} review={e.review} rating={e.rating} />
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
