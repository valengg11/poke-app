import React from 'react'
import styles from './HomeStyle.module.css'

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.title}>Welcome to Pokedex!</h1>
            <h2>The app to know and compare your favorite pokemons.</h2>
            <h2>Enjoy it!</h2>
        </div>
    )
}

export default Home