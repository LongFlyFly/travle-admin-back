const { Sequelize, DataTypes } = require('sequelize');
const config = { 
    host: "localhost", // 主机名
    database: "travleapp", // 数据库名
    username: "root", // 用户名
    password: "123456", // 密码
    post: "3306" // 端口号
}

// 方法 3: 分别传递参数 (其它数据库)
const sequelize = new Sequelize(
    config.database,    
    config.username, 
    config.password, 
    {
        host: config.host,
        dialect: 'mysql', /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
        pool: {
            max: 5, //连接池最大连接数量
            min: 0, //最小链接数量
            idle: 10000 //如果一个线程10秒内没有被使用过的话，就释放
        },
        logging: true,
    }
);

const userModel = require('./model/user')(sequelize, DataTypes)
const writeModel = require('./model/write')(sequelize, DataTypes)
const orderModel = require('./model/order')(sequelize, DataTypes)
const goodModel = require('./model/good')(sequelize, DataTypes)
const adminModel = require('./model/admin')(sequelize, DataTypes)
const noteModel = require('./model/note')(sequelize, DataTypes)

module.exports = { sequelize, userModel, writeModel, orderModel, goodModel, adminModel, noteModel }

// 两种方法 第二种内部要新建对象，需要再次sequelize
// exports.sequelize = sequelize 
