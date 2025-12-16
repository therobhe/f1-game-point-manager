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

/*import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/track-config');
  };*/