import React, { useState, useEffect } from 'react'

import '../styles/whosthatpokemon.scss'

export const WhosThatPokemonView = () => {
	const POKE_URL = 'https://pokeapi.co/api/v2/pokemon/'
	const MAX_ID = 151

	const [isLoading, setIsLoading] = useState(true)
	const [first, setFirst] = useState(true)

	const initRandomArray = () => {
		let array = []
		for (let i = 0; i < MAX_ID; i++) {
			array.push(i)
		}

		var j = array.length,
			k = 0,
			temp;

		while (j--) {
			k = Math.floor(Math.random() * (j + 1));

			// swap randomly chosen element with current element
			temp = array[j];
			array[j] = array[k];
			array[k] = temp;
		}

		return array
	}

	let initialArray = initRandomArray()
	const [pokemonIds,] = useState(initialArray)
	const [index, setIndex] = useState(1)

	const [pokemon, setPokemon] = useState()


	const [guess, setGuess] = useState('')
	const [haveGuessed, setHaveGuessed] = useState(false)
	const [correct, setCorrect] = useState()

	const fetchPokemonById = async (id) => {
		setIsLoading(true)
		try {
			await fetch(POKE_URL + id)
				.then(res => res.json())
				.then((result) => {
					setPokemon(result)
				})
			setIsLoading(false)

		} catch (ex) {
			console.log(ex)
			setIsLoading(false)
		}
	}

	const nextPokemon = (i) => {
		fetchPokemonById(pokemonIds[i])
	}

	const nextButton = async () => {
		var temp = index

		setGuess('')
		setHaveGuessed(false)

		setIndex(1 + index)
		nextPokemon(++temp)
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
			nextPokemon(index);
			setFirst(false)
		}

		return () => {
			alert('thank you for playing!')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [first])

	return (
		<div className="content-container">
			<div className="container-30-40-30">
				<div className="content">
					<>{
						isLoading ?
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
								<button className="btn" onClick={() => nextButton()}>Next!</button>
								{/*<button className="btn">Next!</button>*/}
							</div>
					}</>
				</div>
			</div>
		</div>
	)
}
