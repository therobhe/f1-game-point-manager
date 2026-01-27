import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './components/utils/ScrollToTop/ScrollToTop';
import { SeasonProvider } from './context/SeasonContextProvider.tsx';
import { ConfigCalendar } from './pages/ConfigCalendar/ConfigCalendar';
import { ConfigPointSystem } from './pages/ConfigPointSystem/ConfigPointSystem.tsx';
import { CustomCalendarConfig } from './pages/CustomCalendarConfig/CustomCalendarConfig.tsx';
import { CustomPointSystemConfig } from './pages/CustomPointSystemConfig/CustomPointSystemConfig.tsx';
import { Finish } from './pages/Finish/Finish';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { RaceResult } from './pages/RaceResult/RaceResult';
import { Standings } from './pages/Standings/Standings';
import AnalyticsRouterWrapper from './utils/analytics/AnalyticsRouterWrapper.tsx';

const AppRouter = () => {
	const location = useLocation();
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/track-config" element={<ConfigCalendar />} />
			<Route path="/custom-calendar" element={<CustomCalendarConfig />} />
			<Route path="/points" element={<ConfigPointSystem />} />
			<Route path="/custom-pointsystem-config" element={<CustomPointSystemConfig />} />
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
				<AnalyticsRouterWrapper>
					<ScrollToTop />
					<AppRouter />
				</AnalyticsRouterWrapper>
			</BrowserRouter>
		</SeasonProvider>
	);
}

export default App;
