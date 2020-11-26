import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPaths from '../routes/RoutingPaths.json'

import '../styles/signup.scss'

export const SignUpView = () => {
	const history = useHistory()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState()
	const [confirmPassword, setConfirmPassword] = useState('')


	const signup = (e) => {
		e.preventDefault()

		if (username !== null || username === '') {
			if (password === confirmPassword) {
				localStorage.setItem('USERNAME', username)
				history.push(RoutingPaths.HOMEVIEW_PATH)
			} else {
				alert('Passwords need to match')
				return
			}
		} else {
			alert('You must provide a username')
			return
		}
	}

	return (
		<div className="content-container">
			<span className="title">Join Us!</span>
			<form onSubmit={(e) => signup(e)}>
				<label>Username</label>
				<input name="username" type="text" onChange={(e) => setUsername(e.target.value)} />


				<label>Password</label>
				<input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />


				<label>Confirm password</label>
				<input name="confirmPassword" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />

				<button className="signup-btn" type="submit">Join</button>
			</form>

		</div >
	)
}
