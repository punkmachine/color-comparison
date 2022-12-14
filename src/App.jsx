import React from 'react';
import { MdAdd } from "react-icons/md";
import { BsArrowsExpand, BsArrowsCollapse } from 'react-icons/bs';
import { Toaster } from 'react-hot-toast';

import { useToggle } from './hooks/useToggle';
import { useColorCard } from './hooks/useColorCard';

import { ColorCard } from './components/ColorCard';
import { DarkModeToggle } from './components/DarkModeToggle';
import { StandardButton } from './components/StandardButton';
import { Footer } from './components/Footer';

function App() {
	const [cardSplit, toggleCardSplit] = useToggle(false);
	const { hexList, onInputHex, addColorCard, deleteColorCard } = useColorCard();

	return (
		<div className='relative h-full flex flex-col bg-gray-100 dark:bg-gray-900 main-transition'>
			<DarkModeToggle />

			<div className="max-w-screen-lg grow shrink-0 basis-auto m-auto flex-center flex-col">
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
				<div className={`flex-center flex-wrap ${!cardSplit ? 'gap-6' : ''}`}>
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
			<Footer />

			<Toaster />
		</div>
	);
}

export default App;
