// @flow
import React from 'react';

type PaginationProps = {
	onClick: () => void;
}
const Pagination = ({onClick}:PaginationProps) => {
	const pagination = () => {
		for (let counter = 1; counter <= 10; counter++) {
			return (
				<button>{counter}</button>
			)
		}
	};
	return (
		<div > {pagination()}</div>
	)
};

export default Pagination;
