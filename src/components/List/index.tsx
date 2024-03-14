import React from 'react';
import './index.css';
import icon from '../../assets/drag_drop_icon.png';
import { ListProps } from '../../constants/type';

const List = ({
	dragedWidgets,
	dropedWidgets,
	setDragedWidgets,
	setDropedWidgets,
}: ListProps) => {
	const handleOnDrag = (e: React.DragEvent, widgetType: string) => {
		e.dataTransfer.setData('widgetType', widgetType);
	};

	const handleOnDrop = (e: React.DragEvent) => {
		const widgetType = e.dataTransfer.getData('widgetType') as string;
		const index = dragedWidgets.indexOf(widgetType);
		if (index > -1) {
			dragedWidgets.splice(index, 1);
			setDragedWidgets(dragedWidgets);
		}
		setDropedWidgets([...dropedWidgets, widgetType]);
	};

	const handleOnDragOver = (e: React.DragEvent) => {
		e.preventDefault();
	};

	return (
		<ul
			className='commonContainer'
			onDrop={handleOnDrop}
			onDragOver={handleOnDragOver}
		>
			{dropedWidgets.map((widget, index) => (
				<li
					className='list'
					draggable
					onDragStart={(e) => handleOnDrag(e, widget)}
					key={index}
				>
					<img className='image' src={icon} alt='icon' />
					<span className='textSpan'>{widget}</span>
				</li>
			))}
		</ul>
	);
};

export default List;
