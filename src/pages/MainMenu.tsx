import React from 'react';
import { Link } from 'react-router-dom';

export const MainMenu: React.FC = () => {
	return (
		<>
			<h1>F1 2014 Point Manager</h1>
			<Link
				to="/tracks"
				className="inline-block px-6 py-2 mt-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
			>
				New Season
			</Link>
		</>
	);
};