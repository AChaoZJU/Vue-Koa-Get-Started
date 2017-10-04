import auth from '../controllers/user.js'
import seller from '../controllers/seller.js'
import koa_router from 'koa-router'
const router = koa_router()

router.get('/user/:id', auth.getUserInfo) // 定义url的参数是id
router.post('/user', auth.postUserAuth);
router.post('/seller', seller.sellerAuth);


export default router