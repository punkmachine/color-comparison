import React, { useState, useEffect } from 'react';
import { useQueryColors } from './hooks/useQueryColors';
import { ColorCard } from './components/ColorCard';

// TODO: rgb and rgba
// TODO: add new color to comparison
// TODO: dark mode
// TODO: mobile markup
// TODO: сравнение двух цветов вплотную друг к другу

function App() {
	const { queryColorList, setSearchParams } = useQueryColors();

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

	useEffect(() => {
		setHexList(prevValue => ({
			...prevValue,
			...queryColorList
		}));
	}, [queryColorList]);

	return (
		<div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
			<h2 className='mb-6 text-2xl font-bold'>Сравните цвета</h2>
			<div className='flex justify-center items-center gap-6'>
				{Object.keys(hexList).map(colorCode => {
					return (
						<ColorCard
							key={colorCode}
							onInputHex={onInputHex}
							id={colorCode}
							hexValue={hexList[colorCode]}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;