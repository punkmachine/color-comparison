import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useQueryColors } from './useQueryColors';
import { Alert } from '../components/Alert';

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

		setSearchParams(newHexList);
	}

	function addColorCard() {
		const newHexList = {
			...hexList,
			[`hex${Object.keys(hexList).length + 1}`]: '',
		}

		setSearchParams(newHexList);
	}

	function deleteColorCard(id) {
		if (Object.keys(hexList).length > 2) {
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
		} else {
			toast.custom(t => <Alert t={t} text='Вы не можете удалить карточку, если их всего два на странице' />)
		}
	}

	useEffect(() => {
		setHexList(prevValue => ({
			...prevValue,
			...queryColorList
		}));
	}, [queryColorList]);

	return { hexList, onInputHex, addColorCard, deleteColorCard };
}