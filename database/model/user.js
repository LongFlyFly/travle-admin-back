module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        // 在这里定义模型属性
        userID: {
            type: DataTypes.INTEGER(11), //字段类型
            primaryKey: true, // 主键
            autoIncrement: true //自增长
        },
        userName: {
            type: DataTypes.STRING(12),
            allowNull: false
        },
        userPassword: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        userImg: {
            type: DataTypes.STRING(5000),
            allowNull: false
        },
        userPhone: {
            type: DataTypes.INTEGER(12),
            allowNull: false
        },
        userSign: {
            type: DataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: 0
        }
    }, {
        tableName: 'users',
        timestamps: true
        // 这是其他模型参数
    });

    // `sequelize.define` 会返回模型
    // console.log(User === sequelize.module.User); // true

    return user
}