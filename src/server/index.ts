import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyParser'

const app = new Koa()
const router = new Router()
const port = 3001

app.use(bodyParser())

router.get('(.*)', async ctx => {
	ctx.body = 'KOA Web Server Started !!!'
})

app.use(router.routes())

app.listen(port, () => {
	console.log(`Koa server is listening on port ${port}`)
})
