import good from '../models/good.js'
import fs from 'fs';
import os from 'os';
import path from 'path';

const checkGood = function(data) {
    let code = 0;
    let msg;
    const amountReg = /^\d+$/,
        priceReg = /^\d+(\.\d+)?$/,
        infoReg = /[\s\S]/gu;
    const infoRes = data.info.match(infoReg);
    const nameRes = data.name.match(infoReg);
    const infoLength = infoRes ? infoRes.length : 0;
    const nameLength = nameRes ? nameRes.length : 0;
    if (nameLength <= 2) {
        msg = '商品名称不能小于3个字符'
    } else if (!amountReg.test(data.amount)) {
        msg = '无效库存输入';
    } else if (!priceReg.test(data.price)) {
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

const uploadGoodImg = async function(ctx) {
    const file = ctx.request.files.file;
    const reader = fs.createReadStream(file.path);
    const stream = fs.createWriteStream(path.resolve(__dirname) + `/images/${file.name}`);
    let code = 0, msg = "图像上传成功";
    try{
        reader.pipe(stream);
    } catch(err) {
        code = 1;
        msg = "图像上传失败";
    }
    console.log('uploading %s -> %s', file.name, stream.path);
    ctx.body = {
        code,
        msg,
    }
}

const updateGood = async function(ctx) {
    const data = ctx.request.body;
    const id = ctx.params.id;
    let [code, msg] = checkGood(data);

    if (code === 0) {
        const result = await good.updateGood(id, data);
        if (result) {
            msg = '修改成功';
        } else {
            code = 1;
            msg = '修改失败,商品名称重复';
        }
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
    let code, msg;
    if (result.count === 0) {
        code = 2;
        msg = '没有符合条件的商品';
    } else {
        code = 0;
        msg = result.count;
    }
    ctx.body = {
        code: code,
        data: result.rows,
        msg: msg
    }
}

export default {
    getGoodDetail,
    uploadGood,
    updateGood,
    uploadGoodImg,
    deleteGood,
    getGood
}