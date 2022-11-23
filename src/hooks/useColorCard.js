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

		// ? Возможно не нужно
		setHexList(newHexList);
		setSearchParams(newHexList);
	}

	function addColorCard() {
		setHexList({
			...hexList,
			[`hex${Object.keys(hexList).length + 1}`]: '',
		});
	}

	function deleteColorCard(id) {
		let newHexList = {};

		for (let key in hexList) {
			if (key !== id) {
				newHexList = {
					...newHexList,
					[key]: hexList[key]
				};
			}
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

	return { hexList, onInputHex, addColorCard, deleteColorCard };
}