function showAlert(
	message = 'This is the default message',
	classType = 'information'
) {
	return `<div class="${classType}">${message}</div>`;
}