import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopRatingTracks } from '../../redux/slices/track'
import HeroTopRatingItem from './HeroTopRatingItem'
import HeroTopRatingItemSkeleton from './HeroTopRatingItemSkeleton'

export default function Hero() {

    const dispatch = useDispatch()
    
    const skeletonArr = [0, 1, 2, 3, 4]

    // const TopRatingTracks = null
    const TopRatingTracks = useSelector(state => state.track.topRatingTracks)

    useEffect(() => {
        dispatch(fetchTopRatingTracks())
    }, [])

  return (
    <section className="hero">
        <div className="hero-wrapper">
            <div className="container">
                <div className="hero-inner">
                    <h1 className="hero-title">Оценивай то, о чем не узнаешь из чартов. Докажи свой вкус.</h1>
                    <p className="hero-desc">Единственная площадка, где рейтинг русской сцены ставят те, кто её понимает.</p>
                    <p className="hero-desc">Открывай новых артистов, делись находками и участвуй в создании главного андерграунд-рейтинга.</p>
                    <div className="hero__top">
                        <h2 className="hero__top-title">Популярные треки для оценок</h2>
                        <ul className="hero__top-list">
                            {
                                TopRatingTracks ?
                                TopRatingTracks.map(e => (
                                    <HeroTopRatingItem key={e._id} name={e.name} avatarUrl={e.avatarUrl} id={e._id} artist={e.artist} />
                                )) :
                                skeletonArr.map(e => (
                                    <HeroTopRatingItemSkeleton key={e} />
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
