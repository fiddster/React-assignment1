import React from 'react'
import './navaccount.scss'
import RoutingPaths from '../../routes/RoutingPaths.json'

export const NavAccount = () => {

	return (
		<div className="flex-row nav-right">
			<span className="display-box">
				<a href={RoutingPaths.SIGN_UP_PATH}>Sign up</a>
			</span>
			<span className="display-box">
				<a href={RoutingPaths.SIGN_UP_PATH}>Login</a>
			</span>
		</div>

	)
}
