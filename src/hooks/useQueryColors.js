import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useQueryColors = () => {
	const [queryColorList, setQueryColorList] = useState({});
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		let obj = {};

		for (let key of searchParams.keys()) {
			const value = searchParams.get(key);

			obj = {
				...obj,
				[key]: value
			};
		}

		setQueryColorList(obj);
	}, [searchParams]);

	return {
		queryColorList,
		setSearchParams
	};
}