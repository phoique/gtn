import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Copy(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			fill='currentColor'
			{...props}>
			<Path d='M300-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300zm0-60h440v-560H300v560zM180-80q-24 0-42-18t-18-42v-620h60v620h500v60H180zm120-180v-560 560z' />
		</Svg>
	);
}

export default Copy;
