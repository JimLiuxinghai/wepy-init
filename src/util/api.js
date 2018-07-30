import wepy from 'wepy';
import env from './config'

const host = env.host;

/*
	params: {
		method: 'GET' || 'POST',
		data: {}
	}
*/
const wxRequest = async (params = {}, url) => {
    wepy.showToast({
      title: '加载中',
      icon: 'loading'
    });

    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: params.data || {},
        header: {'Content-Type': 'application/json'},
    });
    wepy.hideToast();

    return res;
};

// Index
const demo = (params) => wxRequest(params, host + '/demo/')


module.exports = {
	demo
}
