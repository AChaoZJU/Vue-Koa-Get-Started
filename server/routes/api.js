import apiGood from '../controllers/good.js'
import koa_router from 'koa-router'
const router = koa_router()


router.get('/goodDetail/:id', apiGood.getGoodDetail)
router.post('/upload', apiGood.uploadGood)
router.post('/update/:id', apiGood.updateGood)
router.get('/deleteGood/:id', apiGood.deleteGood);


export default router