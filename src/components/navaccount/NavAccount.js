import React, { useState, useContext } from 'react'
import { UserContext } from '../../shared/providers/UserProvider'
import RoutingPaths from '../../routes/RoutingPaths.json'
import './navaccount.scss'

export const NavAccount = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [showLoginForm, setShowLoginForm] = useState(false)
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const login = (e) => {
		e.preventDefault()
		if ((username !== null || username !== '') && (password !== null || password !== '')) {
			localStorage.setItem("USERNAME", username)
			setAuthenticatedUser(username)
			setShowLoginForm(false)
		} else {
			alert('Username or password incorrect')
		}
	}

	const logout = (e) => {
		e.preventDefault()
		setAuthenticatedUser(undefined)
		localStorage.removeItem("USERNAME")
		localStorage.removeItem("PASSWORD")
	}

	return (
		<div className="flex-row nav-right">
			<>{
				authenticatedUser ?
					<div className="flex-row">
						<span className="display-box">
							<a href={'/my-account'}>My account</a>
						</span>
						<button className="nav-login-btn display-box" onClick={(e) => logout(e)}>Logout</button>
					</div>
					:
					<div className="flex-row">
						<span className="display-box">
							<a href={RoutingPaths.SIGN_UP_PATH}>Sign up</a>
						</span>
						<>{
							showLoginForm ?
								<form className="flex-row nav-login-form" onSubmit={(e) => login(e)}>
									<label>Username</label>
									<input name="username" type="text" onChange={(e) => setUsername(e.target.value)} />
									<label>Password</label>
									<input type="password" onChange={(e) => setPassword(e.target.value)} />
									<button className="nav-login-btn display-box" type="submit">Login</button>
								</form>
								:
								<button className="nav-login-btn display-box" onClick={() => setShowLoginForm(true)}>Login</button>
						}</>
					</div>
			}</>

		</div>


	)
}
