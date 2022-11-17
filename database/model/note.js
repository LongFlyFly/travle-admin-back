module.exports = (sequelize, DataTypes) => {
    const note = sequelize.define('Note', {
        // 在这里定义模型属性
        noteID: {
            type: DataTypes.INTEGER(11), //字段类型
            primaryKey: true, // 主键
            autoIncrement: true //自增长
        },
        noteTitle: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        noteDele: {
            type: DataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: 0
        },
    }, {
        tableName: 'notes',
        timestamps: true
        // 这是其他模型参数
    });

    // `sequelize.define` 会返回模型
    // console.log(User === sequelize.module.User); // true

    return note
}