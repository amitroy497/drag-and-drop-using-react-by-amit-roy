import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './Theme';
import Header from './components/Header';
import Body from './components/Body';

const App = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`container ${theme}`}>
			<Header />
			<Body />
		</div>
	);
};

export default App;
