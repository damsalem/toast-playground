import React from 'react';

function useKeyDown(key, callback) {
	React.useEffect(() => {
		const handleKey = (event) => {
			if (event.key === key) {
				callback();
			}
		};
		window.addEventListener('keydown', handleKey);
		return () => {
			window.removeEventListener('keydown', handleKey);
		};
	});
}

export default useKeyDown;
