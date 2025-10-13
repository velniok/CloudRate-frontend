import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearch } from '../../redux/slices/search'
import SearchItem from './SearchItem'
import SearchItemSkeleton from './SearchItemSkeleton'

export default function SearchBlock() {

    const dispatch = useDispatch()

    const SearchData = useSelector(state => state.search.data)

    const [searchValue, setSearchValue] = useState('')
    const [filter, setFilter] = useState('artist')

    useEffect(() => {
        if (searchValue !== '') {
            dispatch(fetchSearch({
                value: searchValue,
                filter,
            }))
        }
    }, [searchValue])

    return (
        <section className="search">
            <div className="search-wrapper">
                <div className="container">
                    <div className="search-top">
                        <h2 className="search-title title">Поиск</h2>
                        <input type="text" className="search-input" value={searchValue} onChange={() => setSearchValue(event.target.value)} />
                    </div>
                    <div className="search-content">
                        <div className="search__filter">
                            <ul className="search__filter-list">
                                <li className={`search__filter-item ${filter === "artist" ? 'active' : ''}`} onClick={() => {setFilter("artist"); setSearchValue('')}}>
                                    Артисты
                                </li>
                                <li className={`search__filter-item ${filter === "track" ? 'active' : ''}`} onClick={() => {setFilter("track"); setSearchValue('')}}>
                                    Треки
                                </li>
                                <li className={`search__filter-item ${filter === "user" ? 'active' : ''}`} onClick={() => {setFilter("user"); setSearchValue('')}}>
                                    Пользователи
                                </li>
                            </ul>
                        </div>
                        {
                            searchValue === '' ?
                            <span className="search-none">Ищите треки, артистов, пользователей</span>
                            :
                            <ul className="search__list">
                                {
                                    SearchData && SearchData.length === 0
                                    ?
                                    <span className="search-none">Ничего не найдено</span>
                                    :
                                    SearchData
                                    ?
                                    SearchData.map(e => (
                                        <SearchItem key={e._id} id={e._id} name={e.name} avatarUrl={e.avatarUrl} filter={filter} />
                                    ))
                                    :
                                    [...Array(5)].map((e, index) => (
                                        <SearchItemSkeleton key={index} />
                                    ))
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
