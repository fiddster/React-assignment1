import React from 'react'
import './navigationbar.scss'
import RoutingPaths from '../../routes/RoutingPaths.json'
import { NavAccount } from '../navaccount/NavAccount'

export const Navigationbar = () => {
	return (
		<nav>
			<div className="flex-row nav-left">
				<span className="display-box">
					<a href={RoutingPaths.HOMEVIEW_PATH}>Home</a>
				</span>
				<span className="display-box">
					<a href={RoutingPaths.WHOSTHATPOKEMON_PATH}>Whos that Pokemon?!</a>
				</span>
				<span className="display-box">
					<a href={RoutingPaths.ABOUT_US_PATH}>About us</a>
				</span>
			</div>

			<NavAccount />

		</nav>
	)
}
