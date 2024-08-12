const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('.').sequelize;

// TB_ADMIN_AUTH_HISTORY 테이블 모델 정의
const AdminAuthHistory = sequelize.define('TB_ADMIN_HISTS', {
    seq_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // 자동 증가 설정
    },
    admin_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'TB_ADMIN_LISTS', // 참조하는 테이블 이름
        key: 'seq_id', // 참조하는 테이블의 컬럼 이름
      },
    },
    auth_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auth_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  }, {
    timestamps: false, // createdAt, updatedAt 컬럼을 사용하지 않음
    tableName: 'TB_ADMIN_HISTS',
  });

    module.exports = AdminAuthHistory;