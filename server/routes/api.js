import api from '../controllers/todolist.js'
import apiGood from '../controllers/good.js'
import koa_router from 'koa-router'
const router = koa_router()

// router.get('/todolist/:id', api.getTodolist),
//     router.post('/todolist', api.createTodolist),
//     router.delete('/todolist/:userId/:id', api.removeTodolist),
//     router.put('/todolist/:userId/:id/:status', api.updateTodolist)

router.get('/goodDetail/:id', apiGood.getGoodDetail)
router.post('/upload', apiGood.uploadGood)
router.post('/update/:id', apiGood.updateGood)


export default router