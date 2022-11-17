import React from 'react';

function StandartButton(props) {
	const { onClick, className } = props;

	return (
		<button
			onClick={onClick}
			className={`${className} w-max p-2 mt-2 sm:mt-0 text-gray-700  main-transition bg-gray-100 border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50`}
		>
			{props.children}
		</button>
	);
}

export { StandartButton };