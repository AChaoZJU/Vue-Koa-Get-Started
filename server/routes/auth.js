import seller from '../controllers/seller.js'
import koa_router from 'koa-router'
const router = koa_router()

router.post('/seller', seller.sellerAuth);


export default router