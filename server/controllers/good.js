import good from '../models/good.js'

const checkGood = function(data) {
    let code = 0;
    let msg;
    const amountReg = /^\d+$/,
        priceReg = /^\d+(\.\d+)?$/,
        infoReg = /[\s\S]/gu;
    const infoRes = data.goodInfo.match(infoReg);
    const nameRes = data.goodName.match(infoReg);
    const infoLength = infoRes ? infoRes.length : 0;
    const nameLength = nameRes ? nameRes.length : 0;
    if (nameLength <= 2) {
        msg = '商品名称不能小于3个字符'
    } else if (!amountReg.test(data.amount)) {
        msg = '无效库存输入';
    } else if (!priceReg.test(data.unitPrice)) {
        msg = '无效价格输入'
    } else if (infoLength <= 4) {
        msg = '商品介绍不能小于5个字符';
    }
    if (msg) {
        code = 1;
    } else {
        msg = '上架成功';
    }
    return [code, msg];
}

const getGoodDetail = async function(ctx) {
    const id = Number(ctx.params.id);
    const result = await good.getGoodDetail(id);
    let code;
    let msg;
    if (result) {
        code = 0;
    } else {
        code = 1;
        msg = '获取商品详情失败'
    }
    ctx.body = {
        code: code,
        result: result,
        msg: msg
    }
}

const uploadGood = async function(ctx) {
    const data = ctx.request.body;
    let [code, msg] = checkGood(data);
    let result, goodId;
    if (code === 0) {
        result = await good.uploadGood(data);
        if (!result[1]) {
            msg = "商品名称重复"
            code = 1;
        } else {
            goodId = result[0].goodId
        }
    }
    ctx.body = {
        code: code,
        msg: msg,
        data: goodId
    }
}


const updateGood = async function(ctx) {
    const data = ctx.request.body;
    const id = ctx.params.id;
    let [code, msg] = checkGood(data);

    if (code === 0) {
        const result = await good.updateGood(id, data);
        msg = '修改成功';
    }
    ctx.body = {
        code: code,
        msg: msg
    }
}

const deleteGood = async function(ctx) {
    const id = ctx.params.id;
    const row = await good.deleteGood(id);
    let code = 0,
        msg = '下架成功，3秒后跳转到商城首页';
    if (row === 0) {
        code = 1;
        msg = '下架失败，已无该商品，3秒后跳转到商城首页';
    }
    ctx.body = {
        code: code,
        msg: msg
    }

}

const getGood = async function(ctx) {
    const data = ctx.request.body;
    const result = await good.getGood(data);
    ctx.body = {
        code: 0,
        data: result
    }
}

export default {
    getGoodDetail,
    uploadGood,
    updateGood,
    deleteGood,
    getGood
}
// import todolist from '../models/todolist.js'

// const getTodolist = async function (ctx) {
//   const id = ctx.params.id // 获取url里传过来的参数里的id
//   const result = await todolist.getTodolistById(id) // 通过await “同步”地返回查询结果
//   ctx.body = result // 将请求的结果放到response的body里返回
// }

// const createTodolist = async function (ctx) {
//   const data = ctx.request.body
//   const result = await todolist.createTodolist(data)

//   ctx.body = {
//     success: true
//   }
// }

// const removeTodolist = async function (ctx) {
//   const id = ctx.params.id
//   const user_id = ctx.params.userId
//   const result = await todolist.removeTodolist(id, user_id)

//   ctx.body = {
//     success: true
//   }
// }

// const updateTodolist = async function (ctx) {
//   const id = ctx.params.id
//   const user_id = ctx.params.userId
//   let status = ctx.params.status
//   status === '0' ? status = true : status = false// 状态反转（更新）

//   const result = await todolist.updateTodolist(id, user_id, status)

//   ctx.body = {
//     success: true
//   }
// }

// export default {
//   getTodolist,
//   createTodolist,
//   removeTodolist,
//   updateTodolist
// }