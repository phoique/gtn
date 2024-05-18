import React from 'react';
import * as CustomSvgIcons from './custom';

const Icon = ({ type = 'custom', name, className, height = 20, width = 20 }) => {
	if (type === 'custom' && CustomSvgIcons[name]) {
		const SvgIconWrapper = CustomSvgIcons[name];
		return <SvgIconWrapper height={height} width={width} className={className} />;
	}

	return null;
};

export default Icon;
