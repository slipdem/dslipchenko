import React from 'react';

export const SectionTitle = ({ id, className, title }) => {
	return (
		<h2
			key={id}
			id={id}
			className={`section__title ${className}`}>
			{title}
		</h2>
	);
};
