import db from '../config/db.js' // 引入表结构
import Sequelize from 'sequelize'
const goodModel = '../schema/good.js'
const wepayDB = db.wepay // 引入数据库
const Op = Sequelize.Op

const good = wepayDB.import(goodModel);

const getGoodDetail = async function(id) {
    const res = await good.findOne({
        where: {
            id: id
        },
        attributes: ['id', 'name', 'img', 'price', 'amount', 'info']
    });

    return res;
}

const uploadGood = async function(data) {
    const res = await good.findOrCreate({
        where: {
            name: data.name
        },
        defaults: data
    })
    return res;
}

const updateGood = async function(id, data) {
    const res = await good.update(
        data, {
            where: {
                id: id
            }
        }).catch(err => {
        console.log(err);
    })
    return res;
}

const deleteGood = async function(id) {
    const row = await good.destroy({
        where: {
            id: id
        }
    })

    return row;
}

const getGood = async function(data) {
    const result = await good.findAndCountAll({
        'limit': data.pageSize,
        'offset': data.pageSize * (data.pageNumber - 1),
        where: {
            'name': {
                [Op.like]: '%' + data.keyword + '%'
            }
        }
    })
    return result;
}

export default {
    getGoodDetail,
    uploadGood,
    updateGood,
    deleteGood,
    getGood
}