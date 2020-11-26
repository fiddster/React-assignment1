import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AboutUsView } from '../views/AboutUsView'
import { HomeView } from '../views/HomeView'
import { PageNotFoundView } from '../views/PageNotFoundView'
import { SignUpView } from '../views/SignUpView'
import RoutingPaths from './RoutingPaths.json'

export const Routes = (props) => {

	return (
		<Router>
			{props.children}
			<Switch>

				<Route exact path={RoutingPaths.HOMEVIEW_PATH} component={HomeView} />
				<Route exact path={RoutingPaths.ABOUT_US_PATH} component={AboutUsView} />
				<Route exact path={RoutingPaths.SIGN_UP_PATH} component={SignUpView} />
				<Route component={PageNotFoundView} />
			</Switch>
		</Router>
	)
}