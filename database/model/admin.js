module.exports = (sequelize, DataTypes) => {
    const admin = sequelize.define('Admin', {
        // 在这里定义模型属性
        adminID: {
            type: DataTypes.INTEGER(11), //字段类型
            primaryKey: true, // 主键
            autoIncrement: true //自增长
        },
        adminName: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        adminPassword: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        adminImg: {
            type: DataTypes.STRING(5000),
            allowNull: false
        },
    }, {
        tableName: 'admin',
        timestamps: true
        // 这是其他模型参数
    });

    return admin
}