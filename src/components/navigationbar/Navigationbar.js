import React from 'react'
import { NavLink } from 'react-router-dom'
import './navigationbar.scss'
import RoutingPaths from '../../routes/RoutingPaths.json'
import { NavAccount } from '../navaccount/NavAccount'

export const Navigationbar = () => {
	return (
		<nav>
			<div className="flex-row nav-left">
				<span className="display-box">
					<NavLink to={RoutingPaths.HOMEVIEW_PATH}>Home</NavLink>

				</span>
				<span className="display-box">
					<NavLink to={RoutingPaths.WHOSTHATPOKEMON_PATH}>Who's that Pokemon?!</NavLink>
				</span>
				<span className="display-box">
					<NavLink to={RoutingPaths.ABOUT_US_PATH}>About Us</NavLink>
				</span>
			</div>

			<NavAccount />

		</nav>
	)
}
