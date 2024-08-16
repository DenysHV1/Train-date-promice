export function getStream (){
	return navigator.mediaDevices.getUserMedia({video: true});
}