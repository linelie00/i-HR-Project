const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('.').sequelize;

const AdminLog = sequelize.define('TB_ADMIN_LOG', {
    seq_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // 자동 증가 설정
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_ip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    visit_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false, // createdAt, updatedAt 컬럼을 사용하지 않음
    tableName: 'TB_ADMIN_LOG',
});

module.exports = AdminLog;