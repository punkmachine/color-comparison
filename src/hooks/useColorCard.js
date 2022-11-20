import { useState, useEffect } from 'react';
import { useQueryColors } from './useQueryColors';

export const useColorCard = () => {
	const { queryColorList, setSearchParams } = useQueryColors();

	const [hexList, setHexList] = useState({
		hex1: '',
		hex2: '',
	});

	function onInputHex(event) {
		if (event.target.value.length > 0 && event.target.value[0] !== "#") {
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
		setHexList(prevValue => ({
			...prevValue,
			...queryColorList
		}));
	}, [queryColorList]);

	return { hexList, onInputHex, addColorCard };
}