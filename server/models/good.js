import db from '../config/db.js' // 引入表结构
const goodModel = '../schema/good.js'
const wepayDB = db.wepay // 引入数据库

const good = wepayDB.import(goodModel);

const getGoodDetail = async function(id) {
    const goodDetail = await good.findAll({
        where: {
            goodId: id
        },
        attributes: ['goodId', 'goodName', 'imgUrl', 'unitPrice', 'amount', 'goodInfo']
    });

    return goodDetail[0];
}

const uploadGood = async function(data) {
    await good.create(data);
    return true;
}

const updateGood = async function(id, data) {
    await good.update(
        data, {
            where: {
                goodId: id
            }
        })
    return true;
}

const deleteGood = async function(id) {
    await good.destroy({
        where: {
            goodId: id
        }
    })
}

export default {
    getGoodDetail,
    uploadGood,
    updateGood,
    deleteGood
}
// import db from '../config/db.js' // 引入todolist的表结构
// const todoModel = '../schema/list.js'
// const TodolistDb = db.Todolist // 引入数据库

// const Todolist = TodolistDb.import(todoModel)

// const getTodolistById = async function (id) {
//   const todolist = await Todolist.findAll({ // 查找全部的todolist
//     where: {
//       user_id: id
//     },
//     attributes: ['id', 'content', 'status'] // 只需返回这三个字段的结果即可
//   })

//   return todolist // 返回数据
// }

// const createTodolist = async function (data) {
//   await Todolist.create({
//     user_id: data.id,
//     content: data.content,
//     status: data.status
//   })
//   return true
// }

// const removeTodolist = async function (id, user_id) {
//   await Todolist.destroy({
//     where: {
//       id,
//       user_id
//     }
//   })
//   return true
// }

// const updateTodolist = async function (id, user_id, status) {
//   await Todolist.update(
//     {
//       status
//     },
//     {
//       where: {
//         id,
//         user_id
//       }
//     }
//   )
//   return true
// }

// export default {
//   getTodolistById,
//   createTodolist,
//   removeTodolist,
//   updateTodolist
// }