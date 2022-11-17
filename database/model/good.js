module.exports = (sequelize, DataTypes) => {
    const good = sequelize.define('Good', {
        // 在这里定义模型属性
        goodID: {
            type: DataTypes.INTEGER(11), //字段类型
            primaryKey: true, // 主键
            autoIncrement: true //自增长
        },
        goodName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        goodPoint: {
            type: DataTypes.FLOAT(2, 1),
            allowNull: false
        },
        goodAddress: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        goodImg: {
            type: DataTypes.STRING(5000),
            allowNull: false
        },
        goodType: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        },
        isCollect: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        }
    }, {
        tableName: 'goods',
        timestamps: true
        // 这是其他模型参数
    });

    // `sequelize.define` 会返回模型
    // console.log(User === sequelize.module.User); // true

    return good
}