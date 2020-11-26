import React, { useContext } from 'react'
import { UserContext } from '../shared/providers/UserProvider'
import '../styles/myaccount.scss'

export const MyAccountView = () => {

	const [authenticatedUser,] = useContext(UserContext)

	return (
		<div className="content-container">

			<span className="sub-title">Welcome {authenticatedUser}</span>
			<div className="container-account-settings">
				<div className="account-sidebar">
					<div className="account-sidebar-top">
						<button className="account-options-btn">Profile</button>
						<button className="account-options-btn">My Works</button>
					</div>
					<div className="account-sidebar-bottom">
						<button className="account-options-btn">Settings</button>
						<button className="account-options-btn">Logout</button>
					</div>
				</div>
				<div className="account-content">
					<p>This is just dummy content, nothing will get rendered here (yet)</p>
				</div>
			</div>

		</div>
	)
}
