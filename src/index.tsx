import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction } from './store/api-action';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ToastContainer />
			<App />
		</Provider>
	</React.StrictMode>
);
