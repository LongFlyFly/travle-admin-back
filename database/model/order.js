module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define('Order', {
        // 在这里定义模型属性
        orderID: {
            type: DataTypes.INTEGER(11), //字段类型
            primaryKey: true, // 主键
            autoIncrement: true //自增长
        },
        goodID: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        userID: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        goodPrice: {
            type: DataTypes.FLOAT(8, 2),
            allowNull: false
        },
        goodNum: {
            type: DataTypes.INTEGER(3),
            allowNull: false
        },
        orderTitle: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
    }, {
        tableName: 'orders',
        timestamps: true
        // 这是其他模型参数
    });

    // `sequelize.define` 会返回模型
    // console.log(User === sequelize.module.User); // true

    return order
}