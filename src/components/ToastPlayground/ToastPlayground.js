import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import {
	ToastContext,
	MessageContext,
	VariantContext,
} from '../ToastProvider/ToastProvider';
import useCloseAllToasts from '../../hooks/useCloseAllToasts';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const { handleAddToast } = React.useContext(ToastContext);
	const { msg, setMsg } = React.useContext(MessageContext);
	const { variant, setVariant } = React.useContext(VariantContext);
	const msgRef = React.useRef('');

	useCloseAllToasts(); //handle Esc presses

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf />

			<form
				className={styles.controlsWrapper}
				onSubmit={(e) => handleAddToast(e, msgRef)}
			>
				<div className={styles.row}>
					<label
						htmlFor='message'
						className={styles.label}
						style={{ alignSelf: 'baseline' }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id='message'
							className={styles.messageInput}
							value={msg}
							onChange={(e) => setMsg(e.target.value)}
							ref={msgRef}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((option, index) => {
							return (
								<label htmlFor={option} key={index}>
									<input
										id={option}
										type='radio'
										name='variant'
										checked={variant === option}
										value={option}
										onChange={() => setVariant(option)}
									/>
									{option}
								</label>
							);
						})}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
