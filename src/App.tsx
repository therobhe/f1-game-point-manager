import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainMenu } from './pages/MainMenu';
import { ConfigCalendar } from './pages/ConfigCalendar';
import { ConfigPointsystem } from './pages/ConfigPointsystem';
import { RaceResult } from './pages/RaceResult';
import { Standings } from './pages/Standings';
import { Finish } from './pages/Finish';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <MainMenu /> } />
				<Route path="/tracks" element={ <ConfigCalendar /> } />
				<Route path="/points" element={ <ConfigPointsystem /> } />
				<Route path="/race/:raceId" element={ <RaceResult /> } />
				<Route path="/standings" element={ <Standings /> } />
				<Route path="/finish" element={ <Finish /> } />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
