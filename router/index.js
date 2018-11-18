const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')
const { URL } = require('url')

exports.getPdf = () => {
    return async (ctx, next) => {
        console.log(ctx.query)
        if (!ctx.query.url) {
            ctx.body = {
                code: 400,
                message: "错误的请求参数【必填参数不完整，必填参数：url】"
            }
            return;
        } else if (!/http[s]*:\/\//.test(ctx.query.url)) {
            ctx.body = {
                code: 400,
                message: "错误的请求参数【必填参数url中需包含http://或https://】"
            }
            return;
        }
    }
}

