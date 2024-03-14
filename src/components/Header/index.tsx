import { useContext } from 'react';
import './index.css';
import { ThemeContext } from '../../Theme';
import { FiSun } from 'react-icons/fi';
import { MdSunny } from 'react-icons/md';

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div className='headerContainer'>
			<div className='toggleTheme'>
				{theme === 'dark-theme' ? (
					<>
						<span className='themeText'>Dark</span>
						<MdSunny
							className='toggle'
							onClick={() => toggleTheme()}
							color='yellow'
							size='1.5rem'
						/>
					</>
				) : (
					<>
						<span className='themeText'>Light</span>
						<FiSun
							className='toggle'
							onClick={() => toggleTheme()}
							size='1.5rem'
						/>
					</>
				)}
			</div>
			<div className='title'>Drag & Drop</div>
		</div>
	);
};

export default Header;
