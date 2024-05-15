import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Play = (props) => {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			fill='currentColor'
			{...props}>
			<Path d='M147-200q-38 0-59.5-25.5T72-296l48-335q8-53 49.5-91t94.5-38h433q53 0 94.5 38t49.5 91l47 335q6 45-15.5 70.5T813-200q-23 0-39-7.5T747-226L643-330H317L213-226q-11 11-27 18.5t-39 7.5zm18-64l126-126h378l126 126q5 5 18 9 9 0 13.5-9t2.5-18l-48-339q-5-35-29.5-57T697-700H263q-30 0-54.5 22T179-621l-48 339q-2 9 2.5 18t13.5 9q7 0 18-9zm535-176q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12zm-85-130q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12zM300-445h50v-75h75v-50h-75v-75h-50v75h-75v50h75v75zm180-33z' />
		</Svg>
	);
};

export default Play;
