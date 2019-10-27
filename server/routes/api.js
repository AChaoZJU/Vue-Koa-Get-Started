import apiGood from '../controllers/good.js'
import koa_router from 'koa-router'
const koaBody= require('koa-body')({multipart:true, uploadDir: '.'})
const router = koa_router()

router.get('/goodDetail/:id', apiGood.getGoodDetail)
router.post('/img', koaBody, apiGood.uploadGoodImg)
router.post('/upload', apiGood.uploadGood)
router.post('/update/:id', apiGood.updateGood)
router.get('/deleteGood/:id', apiGood.deleteGood);
router.post('/getGood', apiGood.getGood);


export default router