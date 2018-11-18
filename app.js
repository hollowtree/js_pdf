const Path = require('path')

const Koa = require('koa')
const KoaStatic = require('koa-static')

const app = new Koa()

app.use(KoaStatic(Path.join(__dirname, 'static')))

app.listen(8080)