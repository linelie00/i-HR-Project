const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('.').sequelize;

// TB_ADMIN_LISTS 테이블 모델 정의
const AdminList = sequelize.define('TB_USER_LISTS', {
  seq_id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    defaultValue: () => {
      // "U"로 시작하는 5자리 숫자를 생성하여 "A00001" 같은 형식의 문자열을 반환
      const randomNumber = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
      return `U${randomNumber}`;
    },
  },
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pwd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pre_pwd: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sex: {
    type: DataTypes.ENUM('M', 'F'),
    allowNull: false,
  },
  birth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  mdn: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]+$/, // 휴대전화번호에 숫자만 허용
    },
  },
  reg_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  pwd_update: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  timestamps: false, // createdAt, updatedAt 컬럼을 사용하지 않음
  tableName: 'TB_USER_LISTS',
});

module.exports = AdminList;