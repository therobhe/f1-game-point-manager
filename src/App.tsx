import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './components/utils/ScrollToTop';
import { SeasonProvider } from './context/SeasonContextProvider.tsx';
import { ConfigCalendar } from './pages/ConfigCalendar';
import { ConfigPointSystem } from './pages/ConfigPointSystem.tsx';
import { CustomCalendarConfig } from './pages/CustomCalendarConfig.tsx';
import { CustomPointSystemConfig } from './pages/CustomPointSystemConfig.tsx';
import { Finish } from './pages/Finish';
import { MainMenu } from './pages/MainMenu';
import { RaceResult } from './pages/RaceResult';
import { Standings } from './pages/Standings';

const AppRouter = () => {
	const location = useLocation();
	return (
		<Routes>
			<Route path="/" element={<MainMenu />} />
			<Route path="/track-config" element={<ConfigCalendar />} />
			<Route path="/custom-calendar" element={<CustomCalendarConfig />} />
			<Route path="/points" element={<ConfigPointSystem />} />
			<Route path="/customPointsystemconfig" element={<CustomPointSystemConfig />} />
			<Route path="/race/:raceId" element={<RaceResult key={location.pathname} />} />
			<Route path="/standings/:raceId" element={<Standings />} />
			<Route path="/finish" element={<Finish />} />
		</Routes>
	);
};

function App() {
	return (
		<SeasonProvider>
			<BrowserRouter>
				<ScrollToTop />
				<AppRouter />
			</BrowserRouter>
		</SeasonProvider>
	);
}

export default App;
