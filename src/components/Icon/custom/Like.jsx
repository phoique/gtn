import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Like(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			fill='currentColor'
			{...props}>
			<Path d='M716-120H272v-512l278-288 39 31q6 5 9 14t3 22v10l-45 211h299q24 0 42 18t18 42v81.84q0 7.16 1.5 14.66T915-461L789-171q-8.88 21.25-29.59 36.12Q738.69-120 716-120zm-384-60h397l126-299v-93H482l53-249-203 214v427zm0-427v427-427zm-60-25v60H139v392h133v60H79v-512h193z' />
		</Svg>
	);
}

export default Like;
