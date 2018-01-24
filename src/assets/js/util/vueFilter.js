/*
 * @Author: hean
 * @Date: 2018-01-17 11:00:07
 * @Last Modified by: hean
 * @Last Modified time: 2018-01-17 11:39:39
 * @图片裁剪过滤器
 */


import Vue from 'vue'

Vue.filter('getImgURL', function (value, width, height, q = 88, c = 0, m = 0) {
    let qiniuThumbnail = '?imageView2/1/w/' + width + '/h/' + height + '/q/' + q
    let jinshanThumbnail = '@base@tag=imgScale&w=' + width + '&h=' + height + '&c=' + c + '&m=' + m + '&q=' + q
    if (value && value.slice(0, 14) == 'https://image1') { // 七牛云
        return value + qiniuThumbnail
    } else if (value && value.slice(0, 14) == 'https://image.') { // 金山云
        return value + jinshanThumbnail
    }  // 默认，原值返回
    return value


})
