import React from 'react';
import { MdDelete } from "react-icons/md";

import { useToggle } from '../hooks/useToggle';

import { StandardButton } from './StandardButton';

const hexRegexFull = /^#((\d|[A-Fa-f]){3}|(\d|[A-Fa-f]){6})$/;
const hexRegexMask = /^#((\d|[A-Fa-f]){0,6})$/;
const hexRegexKeyDown = /\d|[A-Fa-f]|#/;

function ColorCard(props) {
	const { id, onInputHex, hexValue, cardSplit, deleteColorCard } = props;

	const [visibleDeleteButton, toggleVisibleDeleteButton] = useToggle(false);

	const hexValueTest = () => hexRegexMask.test(hexValue) || !hexValue;
	const hexValueFullTest = () => hexRegexFull.test(hexValue);

	function validationKeyDown(event) {
		if (!hexRegexKeyDown.test(event.key) || (event.keyCode === 86 && event.ctrlKey)) {
			if (!(event.keyCode === 88 && event.ctrlKey)) {
				event.preventDefault();
			}
		}
	}

	return (
		<div
			onMouseEnter={toggleVisibleDeleteButton}
			onMouseLeave={toggleVisibleDeleteButton}
			className={`${!cardSplit ? 'h-64 p-4 border border-gray-200 dark:border-gray-900 shadow-md' : ''} relative 4xl:h-72 4xl:w-72 max-w-sm rounded-lg bg-white dark:bg-gray-800`}
		>
			<StandardButton
				className={`${visibleDeleteButton ? 'opacity-100' : 'opacity-0'} absolute right-2 top-2`}
				onClick={() => deleteColorCard(id)}
			>
				<MdDelete className='icons-size' />
			</StandardButton>
			<div
				className={`w-44 h-28 4xl:h-36 4xl:w-48 ${!hexValueFullTest() ? 'border border-black border-solid' : ''}`}
				style={{ background: hexValueFullTest() ? hexValue : '' }}
			/>
			<label
				htmlFor={id}
				className={`${!cardSplit ? 'block mt-4' : 'hidden'} mb-2 text-sm 4xl:text-lg font-medium text-color`}
			>
				HEX code:
			</label>
			<input
				type="text"
				id={id}
				value={hexValue}
				onInput={onInputHex}
				maxLength={7}
				autoComplete="off"
				onKeyDown={validationKeyDown}
				className={
					`${!cardSplit ? 'block' : 'hidden'} w-full bg-gray-50 border text-gray-900 text-sm 4xl:text-lg rounded-lg p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus-visible:border-black ${hexValueTest() ? 'border-gray-300 dark:border-gray-600' : 'border-2 border-red-800 focus-visible:border-red-800' }`
				}
				placeholder="#"
			/>
		</div>
	);
}

export { ColorCard };