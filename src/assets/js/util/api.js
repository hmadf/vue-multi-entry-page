const env = process.env.NODE_ENV
let domain = '',
    protol = location.protocol

switch (env) {
    case 'production':
        domain = protol + '//m.baidu.com' // 换成你们需要的域名
        break
    case 'staging':
        domain = protol + '//m.baidu.com'
        break
    case 'development':
        domain = protol + '//m.baidu.com'
        // domain = protol + '//localhost:4000';
        break
    default:
        domain = protol + '//localhost:4000' // json-server
        break
}
export default {
    domain,
}
