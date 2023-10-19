const UserModel = require("../model/user.modal");
const jwt = require("jsonwebtoken");

class UserServices{
 
    static async registerUser(email,password,username,role){
        try{
                console.log("-----Email --- Password-----",email,password,username,role);
                
                const createUser = new UserModel({email,password,username,role});
                return await createUser.save();
        }catch(err){
            throw err;
        }

    }

    static async getUserByEmail(email){
        try{
            return await UserModel.findOne({email});
        }catch(err){
            console.log(err);
        }
    }

    static async checkUser(email){
        try {
            return await UserModel.findOne({email});
        } catch (error) {
            throw error;
        }
    }
    static async getAllUsers() {
        try {
            return await UserModel.find({});
        } catch (error) {
            throw error;
        }
    }

    static async getUserById(userId) {
        try {
            return await UserModel.findById(userId);
        } catch (error) {
            throw error;
        }
    }
    static async getUserRoleById(userId) {
        try {
            const user = await UserModel.findById(userId);
            if (!user) {
                throw new Error('User not found');
            }
            return user.role;
        } catch (error) {
            throw error;
        }
    }
    static async updateUserById(userId, updatedUserData) {
        try {
            const user = await UserModel.findByIdAndUpdate(userId, updatedUserData, {
                new: true, 
            });
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async generateAccessToken(tokenData,JWTSecret_Key,JWT_EXPIRE){
        return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
    }
}

module.exports = UserServices;