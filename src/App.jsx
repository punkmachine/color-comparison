import React, { useState, useEffect } from 'react';

import { useQueryColors } from './hooks/useQueryColors';
import { useToggle } from './hooks/useToogle';

import { ColorCard } from './components/ColorCard';
import { DarkModeToggle } from './components/DarkModeToggle';
import { StandartButton } from './components/StandartButton';

// !5 TODO: rgb and rgba
// TODO: add svg component.
// TODO: нормальная валидация.

function App() {
	const { queryColorList, setSearchParams } = useQueryColors();
	const [cardSplit, toggleCardSplit] = useToggle(false);

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

	function addColorCard() {
		setHexList({
			...hexList,
			[`hex${Object.keys(hexList).length + 1}`]: '',
		});
	}

	useEffect(() => {
		console.log(hexList);
	}, [hexList]);

	useEffect(() => {
		setHexList(prevValue => ({
			...prevValue,
			...queryColorList
		}));
	}, [queryColorList]);

	return (
		<div className='relative h-full flex flex-col bg-gray-100 dark:bg-gray-900 main-transition'>
			<DarkModeToggle />

			<div className="max-w-screen-lg grow shrink-0 basis-auto m-auto flex flex-col items-center justify-center">
				<div className='relative w-full sm:h-11 mb-4 flex flex-col items-center'>
					<h2 className='text-center text-2xl 4xl:text-4xl font-bold text-gray-900 dark:text-gray-100'>Compare colors</h2>
					<div className='sm:absolute right-0 top-0 flex gap-1'>
						<StandartButton onClick={toggleCardSplit}>
							{cardSplit
								? <svg className='icons-size' viewBox="0 0 24 24"><path fill="currentColor" d="M18,16V13H15V22H13V2H15V11H18V8L22,12L18,16M2,12L6,16V13H9V22H11V2H9V11H6V8L2,12Z" /></svg>
								: <svg className='icons-size' viewBox="0 0 24 24"><path fill="currentColor" d="M13,20V4H15.03V20H13M10,20V4H12.03V20H10M5,8L9.03,12L5,16V13H2V11H5V8M20,16L16,12L20,8V11H23V13H20V16Z" /></svg>
							}
						</StandartButton>
						<StandartButton onClick={addColorCard}>
							<svg className='icons-size' viewBox="0 0 24 24"><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
						</StandartButton>
					</div>
				</div>
				<div className={`flex justify-center flex-wrap items-center ${!cardSplit ? 'gap-6' : ''}`}>
		 			{Object.keys(hexList).map(colorCode => {
		 				return (
							<ColorCard
								key={colorCode}
								onInputHex={onInputHex}
								id={colorCode}
								hexValue={hexList[colorCode]}
								cardSplit={cardSplit}
							/>
						);
					})}
				</div>
			</div>
			<div className="grow-0 shrink-0 basis-auto m-auto h-12 text-gray-900 dark:text-white">
				Powered by&nbsp;
				<a
					href='https://github.com/punkmachine'
					target="_blank"
					className='underline hover:text-cyan-700 dark:hover:text-cyan-300 main-transition'
				>
					Punk Machine
				</a>
			</div>
		</div>
	);
}

export default App;