import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { AboutUsView } from '../views/AboutUsView'
import { SignUpView } from '../views/SignUpView'
import { PageNotFoundView } from '../views/PageNotFoundView'
import { UserContext } from '../shared/providers/UserProvider'
import RoutingPaths from './RoutingPaths.json'
import { MyAccountView } from '../views/MyAccountView'
import { WhosThatPokemonView } from '../views/WhosThatPokemonView'


export const Routes = (props) => {

	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const privateRoute = (navigateToView) => {
		return authenticatedUser ? navigateToView : SignUpView
	}

	const checkForAuthenticatedUser = () => {
		var user = localStorage.getItem("USERNAME")
		if (user) {
			setAuthenticatedUser(user)
		}
	}

	useEffect(() => {
		checkForAuthenticatedUser()
	})

	return (
		<Router>
			{props.children}
			<Switch>

				<Route exact path={RoutingPaths.HOMEVIEW_PATH} component={HomeView} />
				<Route exact path={RoutingPaths.ABOUT_US_PATH} component={AboutUsView} />
				<Route exact path={RoutingPaths.SIGN_UP_PATH} component={SignUpView} />
				<Route exact path={RoutingPaths.WHOSTHATPOKEMON_PATH} component={WhosThatPokemonView} />
				<Route exact path={RoutingPaths.MYACCOUNT_PATH} component={privateRoute(MyAccountView)} />
				<Route component={PageNotFoundView} />
			</Switch>
		</Router>
	)
}