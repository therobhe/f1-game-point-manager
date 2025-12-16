import React from 'react';
import { Link } from 'react-router-dom';

export const MainMenu: React.FC = () => {
	return (
		<>
			<h1>F1 2014 Point Manager</h1>
			<Link to="/track-config">
				New Season
			</Link>
		</>
	);
};
