// @flow
import React from 'react';
type HeaderProps = {
	inputRefCallback: (node: HTMLElement | null) => void;
	onChange: () => void;
	onClick: () => void;
}
const Header = ({inputRefCallback, onChange,onClick}:HeaderProps) => {
	return (
		<div className="header">
			<input type="text" className="header__input" placeholder="Enter text" onChange={onChange} ref={inputRefCallback}/>
				<button className="header__button" onClick={onClick}>Search</button>
				<input type="checkbox" className="header__check" />
					<span className="header__text">Use LazyLoading</span>
		</div>
	)
};
export default Header;
