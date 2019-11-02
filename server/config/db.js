// db.js

const Sequelize = require('sequelize'); // 引入sequelize

// 使用url连接的形式进行连接，注意将root: 后面的XXXX改成自己数据库的密码
const db = new Sequelize('mysql://root:XXXX@localhost/Wepay',{
  define: {
    timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
  }
}) 

module.exports = {
  wepay: db // 将Todolist暴露出接口方便Model调用
}