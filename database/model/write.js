module.exports = (sequelize, DataTypes) => {
    const write = sequelize.define('Write', {
        // 在这里定义模型属性
        writeID: {
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
        writePoint: {
            type: DataTypes.FLOAT(2,1),
            allowNull: false
        },
        writeTitle: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        writeImg: {
            type: DataTypes.STRING(5000),
            allowNull: true
        }
    }, {
        tableName: 'writes',
        timestamps: true
        // 这是其他模型参数
    });

    // `sequelize.define` 会返回模型
    // console.log(User === sequelize.module.User); // true

    return write
}