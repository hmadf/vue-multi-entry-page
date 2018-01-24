// 将url参数转换成对象
export const parseQueryString = function (url) {
    let reg_url = /^[^\?]+\?([\w\W]+)$/,
        reg_para = /([^&=]+)=([\w\W]*?)(&|$)/g, // g is very important
        arr_url = reg_url.exec(url),
        ret = {}
    if (arr_url && arr_url[1]) {
        let str_para = arr_url[1],
            result
        while ((result = reg_para.exec(str_para)) != null) {
            ret[result[1]] = result[2]
        }
    }
    return ret
}

// 对象转数组
export function dataProcessing(object) {
    let keys = Object.keys(object)
    return keys.map(key => object[key])
}

export function cloneObj(obj) {
    let newobj = obj.constructor === Array ? [] : {}
    if (typeof obj !== 'object') {
        return obj
    }
    for (let i in obj) {
        newobj[i] = (typeof obj[i] === 'object' && obj[i] !== null) ?
            cloneObj(obj[i]) : obj[i]
    }
    return newobj

}

export function isPhone(num) {
    if (!(/^1[3|4|5|8|7]\d{9}$/.test(num))) {
        return false
    }
    return true

}
// 获取某个参数
export function getQueryString(name, url) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
        search = window.location.search
    if (url) {
        search = url.split('?')[1]
        search = search ? '?' + search : ''
    }

    let r = search.substr(1).match(reg)
    if (r != null) {
        return unescape(r[2])
    }
    return null
}
/**
* param 将要转为URL参数字符串的对象
* key URL参数字符串的前缀
* encode true/false 是否进行URL编码,默认为true
* return URL参数字符串
*/
export function parseParam(param, key, encode) {
    if (param == null) return ''
    let paramStr = ''
    let t = typeof (param)
    if (t == 'string' || t == 'number' || t == 'boolean') {
        if (param !== '') {
            paramStr += '&' + key + '=' + ((encode == null || encode) ? param : param)
        }
    } else {
        for (let i in param) {
            let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
            paramStr += parseParam(param[i], k, encode)
        }
    }
    return paramStr
}
