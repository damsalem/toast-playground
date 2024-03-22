import React from 'react';
import useKeyDown from '../../hooks/useKeyDown';

export const ToastContext = React.createContext();
export const MessageContext = React.createContext();

function ToastProvider({ children }) {
	const [toastArr, setToastArr] = React.useState([]);
	const [msg, setMsg] = React.useState('');

	const handleAddToast = (msg, variant) => {
		const randomOf100 = Math.floor(Math.random() * 100) + 1;
		const singleToast = {
			msg,
			variant,
			id: `${randomOf100}-${msg}`,
		};

		setToastArr((prevState) => [...prevState, singleToast]);
	};

	const handleCloseToast = (index) => {
		setToastArr((prevState) => {
			const copy = prevState;
			copy.splice(index, 1);
			return [...copy];
		});
	};

	const handleCloseAllToasts = () => {
		setToastArr([]);
	};

	useKeyDown('Escape', handleCloseAllToasts); //handle Esc presses

	return (
		<ToastContext.Provider
			value={{
				toastArr,
				handleAddToast,
				handleCloseToast,
			}}
		>
			<MessageContext.Provider value={{ msg, setMsg }}>
				{children}
			</MessageContext.Provider>
		</ToastContext.Provider>
	);
}

export default ToastProvider;
