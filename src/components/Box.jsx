import React from 'react';

const Box = ({ title, className, children, position, date }) => {
	return (
		<article className={`box ${className}`}>
			<header className='box__header'>{title}</header>
			<div className='box__children'>{children}</div>
			{
				// if pos & date === undefined => return empty skills footer
				// if pos & date !== undefined => return footer with experience
				// if location !== undefined => return footer with education
			}
			<footer className='box__footer'></footer>
		</article>
	);
};

export default Box;
