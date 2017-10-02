import Sequelize from 'sequelize'

// 使用连接的形式进行连接的话，注意将root: 后面的XXXX改成自己数据库的密码
const Todolist = new Sequelize('mysql://root:123456@localhost/todolist', {
    define: {
        timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
    }
})

const wepay = new Sequelize('mysql://root:root@localhost/wepay', {
    define: {
        timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
    }
})


export default {
    wepay, // 将Todolist暴露出接口方便Model调用
    Todolist
}