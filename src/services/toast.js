import Toast from 'react-native-toast-message';

/**
 * @description Uyarı mesajı gösterir
 * @param {Object} params
 * @param {string} params.message
 * @param {success|error|info} params.type
 * @param {string} params.title
 * @param {bottom|top} params.position
 * @param {Function} params.onPress
 * @returns {void}
 */
const show = ({ message, type, title = 'gtn', position = 'top', onPress }) =>
	Toast.show({
		text1: title,
		text2: message,
		type,
		position,
		onPress,
	});

export default { show };
