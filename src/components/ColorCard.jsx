import React from 'react';

const hexRegexFull = /^#((\d|[A-Fa-f]){3}|(\d|[A-Fa-f]){6})$/;
const hexRegexMask = /^#((\d|[A-Fa-f]){0,6})$/;

function ColorCard(props) {
	const { id, onInputHex, hexValue } = props;

	const hexValueTest = () => hexRegexMask.test(hexValue) || !hexValue;
	const hexValueFullTest = () => hexRegexFull.test(hexValue);

	return (
		<div className="p-4 h-64 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
			<div
				className={`w-full h-28 mb-4 ${hexValueFullTest() ? '' : 'border border-black border-solid'}`}
				style={{ background: hexValueFullTest() ? hexValue : '' }}
			/>
			<label
				htmlFor={id}
				className="block mb-2 text-sm font-medium text-gray-900"
			>
				HEX code:
			</label>
			<input
				type="text"
				id={id}
				value={hexValue}
				onInput={onInputHex}
				className={
					`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${hexValueTest() ? 'border-gray-300' : 'border-2 border-red-800 focus-visible:border-red-800' }`
				}
				placeholder="#"
			/>
			{
				hexValueTest()
					? null
					: <span className='text-xs text-red-800'>Not valid</span>
			}
		</div>
	);
}

export { ColorCard };