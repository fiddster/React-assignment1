import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { PageNotFoundView } from '../views/PageNotFoundView'
import RoutingPaths from './RoutingPaths.json'

export const Routes = (props) => {

	return (
		<Router>
			{props.children}
			<Switch>

				<Route exact path={RoutingPaths.HOMEVIEW_PATH} component={HomeView} />
				<Route component={PageNotFoundView} />
			</Switch>
		</Router>
	)
}