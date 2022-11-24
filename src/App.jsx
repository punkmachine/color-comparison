import React from 'react';
import { MdAdd } from "react-icons/md";
import { BsArrowsExpand, BsArrowsCollapse } from 'react-icons/bs';

import { useToggle } from './hooks/useToggle';
import { useColorCard } from './hooks/useColorCard';

import { ColorCard } from './components/ColorCard';
import { DarkModeToggle } from './components/DarkModeToggle';
import { StandardButton } from './components/StandardButton';

function App() {
	const [cardSplit, toggleCardSplit] = useToggle(false);
	const { hexList, onInputHex, addColorCard, deleteColorCard } = useColorCard();

	return (
		<div className='relative h-full flex flex-col bg-gray-100 dark:bg-gray-900 main-transition'>
			<DarkModeToggle />

			<div className="max-w-screen-lg grow shrink-0 basis-auto m-auto flex flex-col items-center justify-center">
				<div className='relative w-full sm:h-11 mb-4 flex flex-col items-center'>
					<h1 className='text-center'>Compare colors</h1>
					<div className='sm:absolute right-0 top-0 flex gap-1'>
						<StandardButton onClick={toggleCardSplit}>
							{cardSplit
								? <BsArrowsCollapse className='icons-size rotate-90' />
								: <BsArrowsExpand className='icons-size rotate-90' />
							}
						</StandardButton>
						<StandardButton onClick={addColorCard}>
							<MdAdd className='icons-size' />
						</StandardButton>
					</div>
				</div>
				<div className={`flex flex-wrap justify-center items-center ${!cardSplit ? 'gap-6' : ''}`}>
		 			{Object.keys(hexList).map(colorCode => {
		 				return (
							<ColorCard
								key={colorCode}
								onInputHex={onInputHex}
								id={colorCode}
								hexValue={hexList[colorCode]}
								cardSplit={cardSplit}
								deleteColorCard={deleteColorCard}
							/>
						);
					})}
				</div>
			</div>
			<div className="grow-0 shrink-0 basis-auto m-auto h-12 text-color">
				Powered by&nbsp;
				<a
					href='https://github.com/punkmachine'
					target="_blank"
				>
					Punk Machine
				</a>
			</div>
		</div>
	);
}

export default App;