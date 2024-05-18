import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Home(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			fill='currentColor'
			{...props}>
			<Path d='M220-180h150v-250h220v250h150v-390L480-765 220-570v390zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160zm320-353z' />
		</Svg>
	);
}

export default Home;
