const Path = require('path')

const Koa = require('koa')
const KoaRouter = require('koa-router')()
const KoaStatic = require('koa-static')

const routerCtrl = require('./router')

const app = new Koa()

KoaRouter.get('/get_pdf', routerCtrl.getPdf())
app.use(KoaRouter.routes())

app.use(KoaStatic(Path.join(__dirname, 'static')))

app.listen(8080, function () {
    console.log('Server running on http://localhost:3000/')
    console.log(`This process's pid is ${process.pid}`);
})