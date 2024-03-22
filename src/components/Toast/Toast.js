import React from 'react';
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ msg = '', variant = 'notice', close = () => {} }) {
	const Icon = ICONS_BY_VARIANT[variant];
	return (
		<div className={`${styles.toast} ${styles[variant]}`}>
			<div className={styles.iconContainer}>
				<Icon size={24} />
			</div>
			{msg ? (
				<p className={styles.content}>
					<VisuallyHidden>{variant} -</VisuallyHidden>
					{msg}
				</p>
			) : (
				<div className={'VisuallyHidden_wrapper'} error={true}>
					Something went wrong! Please contact customer support
				</div>
			)}
			<button
				className={styles.closeButton}
				onClick={() => close()}
				aria-label={'Dismiss message'}
				aria-live={'off'}
			>
				<X size={24} />
			</button>
		</div>
	);
}

export default Toast;
