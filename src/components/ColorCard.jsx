import React from 'react';

const hexRegexFull = /^#((\d|[A-Fa-f]){3}|(\d|[A-Fa-f]){6})$/;
const hexRegexMask = /^#((\d|[A-Fa-f]){0,6})$/;

function ColorCard(props) {
	const { id, onInputHex, hexValue, cardSplit } = props;

	const hexValueTest = () => hexRegexMask.test(hexValue) || !hexValue;
	const hexValueFullTest = () => hexRegexFull.test(hexValue);

	return (
		<div className={`${!cardSplit ? 'h-64 p-4 border border-gray-200 dark:border-gray-900 shadow-md' : ''} 4xl:h-72 4xl:w-72 max-w-sm rounded-lg first-letter:dark:shadow-slate-800m bg-white dark:bg-gray-800`}>
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
				className={
					`${!cardSplit ? 'block' : 'hidden'} block w-full bg-gray-50 border text-gray-900 text-sm 4xl:text-lg rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${hexValueTest() ? 'border-gray-300' : 'border-2 border-red-800 focus-visible:border-red-800' }`
				}
				placeholder="#"
			/>
			{
				hexValueTest()
					? null
					: <span className='text-xs 4xl:text-lg text-red-800'>Not valid</span>
			}
		</div>
	);
}

export { ColorCard };