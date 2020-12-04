import React, { useState, useEffect } from 'react'

import { generateRandomArray } from '../shared/utils/randomArray'

import '../styles/whosthatpokemon.scss'

export const WhosThatPokemonView = () => {
	const POKE_URL = 'https://pokeapi.co/api/v2/pokemon/'
	const MAX_ID = 151

	const [isLoading, setIsLoading] = useState(true)
	const [first, setFirst] = useState(true)

	const [pokemonIds,] = useState(generateRandomArray(MAX_ID))
	const [index, setIndex] = useState(1)

	const [pokemon, setPokemon] = useState()


	const [guess, setGuess] = useState('')
	const [haveGuessed, setHaveGuessed] = useState(false)
	const [correct, setCorrect] = useState()

	const nextPokemon = () => {
		setIsLoading(true)
		setPokemon()
		setGuess('')
		setHaveGuessed(false)
		setIndex(index + 1)
		//No end condition when MAX_ID <= index will lead to error
	}

	const submitGuess = (e) => {
		e.preventDefault()
		setHaveGuessed(true)
		if (guess.toLowerCase() === pokemon.name.toLowerCase()) {
			let temp = guess[0].toUpperCase() + guess.substring(1)
			setGuess(temp)
			setCorrect(true)
		} else {
			setCorrect(false)
		}
	}

	useEffect(() => {

		if (first) {
			setFirst(false)
			console.log('first')
		}

		fetch(POKE_URL + pokemonIds[index])
			.then(response => response.json())
			.then((pokemon) => {
				setPokemon(pokemon)
				setIsLoading(false)
			})

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index, pokemonIds])

	useEffect(() => {
		return () => {
			alert('Thanks for playing :)')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="content-container">
			<div className="container-30-40-30">
				<div className="content">
					<span ></span>
					<>{
						(isLoading || pokemon === undefined) ?
							<span className="sub-title">Searching for pokemons</span>
							:
							<div className="pokemon-box">
								<span className="sub-title">Who's that Pokemon?!</span>
								<div className="img-background">
									<img className={(correct && haveGuessed) ? "img-revealed" : "img-secret"} src={pokemon?.sprites?.front_default} alt={''} />
								</div>
								<>{
									(haveGuessed) ?
										(correct) ?
											<span className="sub-title">{'That\'s right! It\'s ' + guess}</span>
											:
											<span>{'Sorry, that\'s incorrect'}</span>
										:
										null
								}</>
								<form onSubmit={(e) => submitGuess(e)} >
									<span className="border-light"> Your Guess: <input type="text" onChange={(e) => setGuess(e.target.value)} /></span>
									<button className="btn" type="submit">Guess!</button>
								</form>
								<button className="btn" onClick={() => nextPokemon()}>Next!</button>

							</div>
					}</>
				</div>
			</div>
		</div>
	)
}
