import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../hooks';
import { loginAction } from '../store/api-action';

export const AuthForm = () => {
	const loginRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);

	const dispatch = useAppDispatch();

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();


		if (loginRef.current !== null && passwordRef.current !== null) {
			dispatch(loginAction({
				login: loginRef.current.value,
				password: passwordRef.current.value
			}));
		}
	};

	return (
		<form
			className="login__form form"
			action="#"
			method="post"
			onSubmit={handleSubmit}
		>
			<div className="login__input-wrapper form__input-wrapper">
				<label className="visually-hidden">E-mail</label>
				<input
					ref={loginRef}
					className="login__input form__input"
					type="email"
					name="email"
					placeholder="Email"
					required
				/>
			</div>
			<div className="login__input-wrapper form__input-wrapper">
				<label className="visually-hidden">Password</label>
				<input
					ref={passwordRef}
					className="login__input form__input"
					type="password"
					name="password"
					placeholder="Password"
					required
				/>
			</div>
			<button
				className="login__submit form__submit button"
				type="submit"
			>
				Sign in
			</button>
		</form>
	);
};
