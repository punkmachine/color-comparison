import React, { useState } from 'react';

// TODO: rgb and rgba
// TODO: add new color to comparison
// TODO: write color in query
// TODO: dark mode
// TODO: mobile markup
// TODO: сравнение двух цветов вплотную друг к другу

const hexRegexFull = /^#((\d|[A-Fa-f]){3}|(\d|[A-Fa-f]){6})$/;
const hexRegexMask = /^#((\d|[A-Fa-f]){0,6})$/;

function App() {
	const [hexList, setHexList] = useState({});

	function onInputHex(event) {
		if (event.target.value.length === 6 && event.target.value[0] !== "#") {
			event.target.value = `#${event.target.value}`;
		}

		setHexList({
			...hexList,
			[event.target.id]: event.target.value,
		});
	}

	return (
		<div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
			<h2 className='mb-6 text-2xl font-bold'>Сравните цвета</h2>
			<div className='flex justify-center items-center gap-6'>
				<div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
					<div
						className='w-full h-24 mb-4'
						style={{
							background: hexRegexFull.test(hexList['hex1']) ? hexList['hex1'] : '',
							border: hexRegexFull.test(hexList['hex1']) ? '' : '1px solid black',
						}}
					/>
					<label
						htmlFor="hex1"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						HEX code:
					</label>
					<input
						type="text"
						id="hex1"
						onInput={onInputHex}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="#"
					/>
					{
						hexRegexMask.test(hexList['hex1']) || !hexList['hex1']
							? null
							: <span>Not valid</span>
					}
				</div>
				<div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
					<div
						className='w-full h-24 mb-4'
						style={{
							background: hexRegexFull.test(hexList['hex2']) ? hexList['hex2'] : '',
							border: hexRegexFull.test(hexList['hex2']) ? '' : '1px solid black',
						}}
					/>
					<label
						htmlFor="hex2"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						HEX code:
					</label>
					<input
						type="text"
						id="hex2"
						onInput={onInputHex}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="#"
					/>
					{
						hexRegexMask.test(hexList['hex2']) || !hexList['hex2']
							? null
							: <span>Not valid</span>
					}
				</div>
			</div>
		</div>
	);
}

export default App;