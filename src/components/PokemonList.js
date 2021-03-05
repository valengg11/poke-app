import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'
import { GetPokemonList } from '../actions/pokemonAtions'
import {Link} from 'react-router-dom'

const PokemonList = () => {
    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.PokemonList)

    React.useEffect(() => {
        FetchData(1)
    },[])

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
    return(
        <div>
            {ShowData()}
        </div>
    )
}

export default PokemonList