function fromatTime (seconds) {
	let minute = Math.floor(seconds % 3600 / 60) > 9
		? Math.floor(seconds % 3600 / 60) + '\''
		: '0' + Math.floor(seconds % 3600 / 60) + '\''
	let second = (seconds % 3600 % 60) > 9
		? seconds % 3600 % 60 + '"'
		: '0' + seconds % 3600 % 60 + '"'

	return `${minute}${second}`
}

export default fromatTime
