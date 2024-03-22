import React from 'react';
import useKeyDown from '../../hooks/useKeyDown';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export const ToastContext = React.createContext();
export const MessageContext = React.createContext();
export const VariantContext = React.createContext();

function ToastProvider({ children }) {
	const [toastArr, setToastArr] = React.useState([]);
	const [msg, setMsg] = React.useState('');
	const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

	const handleAddToast = (e, inputRef) => {
		// Don't refresh on submit
		e.preventDefault();
		// Reset form values
		setMsg('');
		setVariant(VARIANT_OPTIONS[0]);
		inputRef.current.focus();

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
				<VariantContext.Provider value={{ variant, setVariant }}>
					{children}
				</VariantContext.Provider>
			</MessageContext.Provider>
		</ToastContext.Provider>
	);
}

export default ToastProvider;
