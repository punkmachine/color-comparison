import React from 'react';
import { MdClose } from "react-icons/md";
import toast from 'react-hot-toast';

function Alert(props) {
	const { t, text } = props;

	return (
		<div className='main-transition'>
			<div className="max-w-sm w-full bg-red-600 text-sm text-white rounded-md shadow-lg">
				<div className="flex p-4">
					{ text }
					<div className="flex-center ml-3">
						<button
							className='p-1'
							onClick={() => toast.dismiss(t.id)}
						>
							<MdClose className='icons-size' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Alert };