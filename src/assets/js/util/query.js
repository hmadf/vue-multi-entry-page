const encode = encodeURIComponent
const decode = decodeURIComponent

// 解析字符串为字典格式
function resolveQuery(query, extraQuery = {}) {
    if (query) {
        let parsedQuery = {}

        query = query.slice(query.indexOf('?') + 1)
        query = query.replace(/(\?|e\#\/)/g, '&')
        try {
            parsedQuery = parseQuery(query)
        } catch (e) {
            parsedQuery = {}
        }
        for (const key in extraQuery) {
            if (Object.prototype.hasOwnProperty.call(extraQuery, key)) {
                parsedQuery[key] = extraQuery[key]
            }
        }
        return parsedQuery
    }
    return extraQuery

}

// 将字典格式拼接成字符串，带“?”
function stringifyQuery(obj) {
    const res = obj ? Object.keys(obj).sort().map((key) => {
        const val = obj[key]

        if (val === undefined) {
            return ''
        }

        if (val === null) {
            return encode(key)
        }

        if (Array.isArray(val)) {
            const result = []
            val.slice().forEach((val2) => {
                if (val2 === undefined) {
                    return
                }
                if (val2 === null) {
                    result.push(encode(key))
                } else {
                    result.push(encode(key) + '=' + encode(val2))
                }
            })
            return result.join('&')
        }

        return encode(key) + '=' + encode(val)
    }).filter(x => x.length > 0).join('&') : null
    return res ? `?${res}` : ''
}

function parseQuery(query) {
    const res = Object.create(null)

    query = query.trim().replace(/^(\?|#|&)/, '')

    if (!query) {
        return res
    }

    query.split('&').forEach((param) => {
        const parts = param.replace(/\+/g, ' ').split('=')
        const key = decode(parts.shift())
        const val = parts.length > 0
            ? decode(parts.join('='))
            : ''

        if (key === '') {
            return false
        }
        if (res[key] === undefined) {
            res[key] = val
        } else if (Array.isArray(res[key])) {
            res[key].push(val)
        } else {
            res[key] = val
        }
    })

    return res
}

export {
    resolveQuery,
    stringifyQuery,
}
