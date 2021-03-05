import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
import _ from 'lodash'
import { GetPokemonList } from '../actions/pokemonAtions'
import { Link } from 'react-router-dom'
// import ReactPaginate from 'react-paginate'

const PokemonList = (props) => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.PokemonList)

    React.useEffect(() => {
        FetchData(1)
    }, [])

    const FetchData = (page = 1) => {
        dispatch(GetPokemonList(page))
    }

    const ShowData = () => {
        if (!_.isEmpty(pokemonList.data)) {
            return (
                <div className={'list-container'}>
                    {pokemonList.data.map(e1 => {
                        return (
                            <div className={'pokemon-item'}>
                                <p>{e1.name}</p>
                                <Link to={'/pokemon/' + e1.name}>View</Link>
                            </div>
                        )
                    })}
                </div>
            )
        }
        if (pokemonList.loading) {
            return <p>Loading...</p>
        }
        if (pokemonList.errorMsg !== '') {
            return <p>{pokemonList.errorMsg}</p>
        }
        return <p>Unable to get data</p>
    }
    return (
        <div>
            <div className={'search-container'}>
                <input type='text' placeholder='Enter Pokemon name' onChange={e => setSearch(e.target.value)}/>
                <button onClick={() => props.history.push('/pokemon/' + search)}>Search</button>

            </div>
            {ShowData()}
            {/* {!_.isEmpty(pokemonList.data) && (

            )} */}
        </div>
    )
}

export default PokemonList