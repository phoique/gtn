import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Check(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			fill='currentColor'
			{...props}>
			<Path d='M378-246L154-470l43-43 181 181 384-384 43 43-427 427z' />
		</Svg>
	);
}

export default Check;
