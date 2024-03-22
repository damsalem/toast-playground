import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
	const { toastArr, handleCloseToast } = React.useContext(ToastContext);
	return (
		<ol
			className={styles.wrapper}
			role={'region'}
			aria-live={'polite'}
			aria-label={'Notification'}
		>
			{toastArr.map((toast, index) => (
				<li key={toast.id} className={styles.toastWrapper}>
					<Toast
						close={() => handleCloseToast(index)}
						msg={toast.msg}
						variant={toast.variant}
					/>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
