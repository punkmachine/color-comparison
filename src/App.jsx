import React from 'react';

// TODO: mask hex
// TODO: rgb and rgba
// TODO: add new color to comparison
// TODO: write color in query
// TODO: dark mode
// TODO: mobile markup
// TODO: сравнение двух цветов вплотную друг к другу

const hexRegex = /^#((\d|[A-Fa-f]){3}|(\d|[A-Fa-f]){6})$/;

function App() {
	return (
		<div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
			<h2 className='mb-6 text-2xl font-bold'>Сравните цвета</h2>
			<div className='flex justify-center items-center gap-6'>
				<div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
					<div className='w-full h-24 mb-4 bg-gray-400'></div>
					<label
						for="hex1"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						HEX code
					</label>
					<input
						type="text"
						id="hex1"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="#"
					/>
				</div>
				<div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
					<div className='w-full h-24 mb-4 bg-gray-400'></div>
					<label
						for="hex2"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						HEX code
					</label>
					<input
						type="text"
						id="hex2"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="#"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;