import React from 'react';

const Box = ({ title, className, children }) => {
	return (
		<article className={`box ${className}`}>
			<header className='box__header'>{title}</header>
			{children}
		</article>
	);
};

export default Box;
