import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">Mi Cuenta</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Nombre</label>
						<p className="value">Moises Navarro</p>
						<label for="email" className="label">Email</label>
						<p className="value">moises.navarro@gmail.com</p>
						<label for="password" className="label">Password</label>
						<p className="value">*********</p>
					</div>
					<input type="submit" value="Editar" className="secondary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;
