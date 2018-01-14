const utils = {
	'getApi': (url) => { // 获取url 中的api
		const rootUrl = 'kaiyanapp.com'
		return url.split(rootUrl).length >= 2 ? url.split(rootUrl)[1] : url
	}
}

export default utils
