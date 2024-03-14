import { useEffect, useState } from 'react';
import './index.css';
import { Widgets } from '../../constants/widgets';
import List from '../List';

const Body = () => {
	const [leftWidgets, setLeftWidgets] = useState<string[]>([]);
	const [rightWidgets, setRightWidgets] = useState<string[]>([]);

	useEffect(() => {
		setLeftWidgets(Widgets);
	}, []);

	return (
		<section className='bodyContainer'>
			<List
				dragedWidgets={rightWidgets}
				dropedWidgets={leftWidgets}
				setDragedWidgets={setRightWidgets}
				setDropedWidgets={setLeftWidgets}
			/>
			<List
				dragedWidgets={leftWidgets}
				dropedWidgets={rightWidgets}
				setDragedWidgets={setLeftWidgets}
				setDropedWidgets={setRightWidgets}
			/>
		</section>
	);
};

export default Body;
