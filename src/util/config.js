const currentEnv = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

const env = {
	dev: {
		host: 'https://zhengdong.zhongguohanyuan.com',
		
	},
    prod: {
        host: 'https://zhengdong.zhongguohanyuan.com',
        
    }
}

module.exports = env[currentEnv]