const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const UserList = require('../../models/UserList');

const login = async (user) => {
    try {
        const result = await UserList.findOne({
        where: {
            code: user.id,
            pwd: user.pwd,
        },
        });
        console.log('UserList found:', result);
        return result;
    } catch (error) {
        console.error('User login error:', error);
        throw error;
    }
};

const signUp = async (user) => {
    try {
        const result = await UserList.create(
        {
            id: user.id,
            name: user.name,
            code: 'M0001',
            pwd: user.pwd,
            pre_pwd: user.pwd,
            email: user.user_email,
            sex: user.sex,
            birth: user.birth,
            mnd: user.mdn,
            reg_date: Sequelize.NOW,
            pwd_update: Sequelize.NOW,
        }
        );
        console.log('UserList created:', result);
    
        const hist = {
        user_id: result.dataValues.seq_id,
        user_name: result.dataValues.user_name,
        auth_code: 'USER_SIGNUP',
        };
    
        const histResult = await UserHist.create(hist);
        console.log('UserHist created:', histResult);
    
        return histResult;
    } catch (error) {
        console.error('User sign-up error:', error);
        throw error;
    }
};

module.exports = { 
    login,
    signUp 
};