import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// TODO: rgb and rgba
// TODO: add new color to comparison
// TODO: write color in query
// TODO: dark mode
// TODO: mobile markup
// TODO: сравнение двух цветов вплотную друг к другу

const hexRegexFull = /^#((\d|[A-Fa-f]){3}|(\d|[A-Fa-f]){6})$/;
const hexRegexMask = /^#((\d|[A-Fa-f]){0,6})$/;

function App() {
	const [searchParams, setSearchParams] = useSearchParams();

	const [hexList, setHexList] = useState({
		hex1: '',
		hex2: '',
	});

	function onInputHex(event) {
		if (event.target.value.length === 6 && event.target.value[0] !== "#") {
			event.target.value = `#${event.target.value}`;
		}

		const newHexList = {
			...hexList,
			[event.target.id]: event.target.value,
		}

		setHexList(newHexList);
		setSearchParams(newHexList);
	}

	function hexValueTest(id) {
		return hexRegexMask.test(hexList[id]) || !hexList[id];
	}

	function hexValueFullTest(id) {
		return hexRegexFull.test(hexList[id])
	}

	useEffect(() => {
		let newHexList = {};

		for (let key of searchParams.keys()) {
			const value = searchParams.get(key);

			newHexList = {
				...newHexList,
				[key]: value
			};
		}

		setHexList(newHexList);
	}, []);

	return (
		<div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
			<h2 className='mb-6 text-2xl font-bold'>Сравните цвета</h2>
			<div className='flex justify-center items-center gap-6'>
				<div className="p-4 h-64 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
					<div
						className={`w-full h-28 mb-4 ${hexValueFullTest('hex1') ? '' : 'border border-black border-solid'}`}
						style={{ background: hexValueFullTest('hex1') ? hexList['hex1'] : '' }}
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
						value={hexList.hex1}
						onInput={onInputHex}
						className={
							`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${hexValueTest('hex1') ? 'border-gray-300' : 'border-2 border-red-800 focus-visible:border-red-800' }`
						}
						placeholder="#"
					/>
					{
						hexValueTest('hex1')
							? null
							: <span className='text-xs text-red-800'>Not valid</span>
					}
				</div>
				<div className="p-4 h-64 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
					<div
						className={`w-full h-28 mb-4 ${hexValueFullTest('hex2') ? '' : 'border border-black border-solid'}`}
						style={{ background: hexValueFullTest('hex2') ? hexList['hex2'] : '' }}
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
						value={hexList.hex2}
						onInput={onInputHex}
						className={
							`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${hexValueTest('hex2') ? 'border-gray-300' : 'border-2 border-red-800 focus-visible:border-red-800' }`
						}
						placeholder="#"
					/>
					{
						hexValueTest('hex2')
							? null
							: <span className='text-xs text-red-800'>Not valid</span>
					}
				</div>
			</div>
		</div>
	);
}

export default App;