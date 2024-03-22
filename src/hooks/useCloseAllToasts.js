import React from 'react';
import { ToastContext } from '../components/ToastProvider/ToastProvider';

function useCloseAllToasts() {
	const { handleCloseAllToasts } = React.useContext(ToastContext);
	React.useEffect(() => {
		const handleEscapeKey = (event) => {
			if (event.key === 'Escape') {
				handleCloseAllToasts();
			}
		};
		window.addEventListener('keydown', handleEscapeKey);
		return () => {
			window.removeEventListener('keydown', handleEscapeKey);
		};
	});
}

export default useCloseAllToasts;
