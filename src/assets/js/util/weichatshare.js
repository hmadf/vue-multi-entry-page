exports.shareToall = function (option) {
    // 分享给朋友圈
    wx.onMenuShareTimeline({
        title: option.title || '', // 分享标题
        desc: option.desc || '',
        link: option.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: option.imgUrl, // 分享图标
        success() {
            // 用户确认分享后执行的回调函数

        },
        cancel() {
            // 用户取消分享后执行的回调函数

        },
    })
    // 分享给朋友
    wx.onMenuShareAppMessage({
        title: option.title || '', // 分享标题
        desc: option.desc || '',
        link: option.link || '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: option.imgUrl || '', // 分享图标
        success() {
            // 用户确认分享后执行的回调函数

        },
        cancel() {
            // 用户取消分享后执行的回调函数

        },
    })

    // 分享给qq
    wx.onMenuShareQQ({
        title: option.title || '', // 分享标题
        desc: option.desc || '',
        link: option.link || '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: option.imgUrl || '', // 分享图标
        success() {
            // 用户确认分享后执行的回调函数

        },
        cancel() {
            // 用户取消分享后执行的回调函数

        },
    })
    // 分享到qq空间·
    wx.onMenuShareQZone({
        title: option.title || '', // 分享标题
        desc: option.desc || '',
        link: option.link || '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: option.imgUrl || '', // 分享图标
        success() {
            // 用户确认分享后执行的回调函数

        },
        cancel() {
            // 用户取消分享后执行的回调函数

        },
    })
}
