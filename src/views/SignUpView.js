import React from 'react'
import '../styles/signup.scss'

export const SignUpView = () => {

	const signup = (e) => {
		e.preventDefault()

	}

	return (
		<div className="content-container">
			<span className="title">Join Us!</span>
			<form>
				<label>Email</label>
				<input type="text" />


				<label>Username</label>
				<input type="text" />


				<label>Password</label>
				<input type="password" />


				<label>Confirm password</label>
				<input type="password" />

				<button onClick={(e) => signup(e)}>Join</button>
			</form>

		</div >
	)
}
