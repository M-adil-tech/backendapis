const UserServices = require('../Services/user.services')

exports.register = async (req, res, next) => {
    try {
        console.log("---req body---", req.body);
        const { email, password,username,role } = req.body;
        const duplicate = await UserServices.getUserByEmail(email);
        if (duplicate) {
            throw new Error(`UserName ${email}, Already Registered`)
        }
        const response = await UserServices.registerUser(email, password,username,role);

        res.json({ status: true, success: 'User registered successfully', userId: response._id });


    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
}

exports.login = async (req, res, next) => {
    try {

        const { email, password} = req.body;

        if (!email || !password ) {
            throw new Error('Parameter are not correct');
        }
        let user = await UserServices.checkUser(email);
        if (!user) {
            throw new Error('User does not exist');
        }

        const isPasswordCorrect = await user.comparePassword(password);

        if (isPasswordCorrect === false) {
            throw new Error(`Username or Password does not match`);
        }

        // Creating Token

        let tokenData;
        tokenData = { _id: user._id, email: user.email, role: user.role };
    

        const token = await UserServices.generateAccessToken(tokenData,"secret","1h")

        res.status(200).json({ status: true, success: "sendData", token: token, userId: user._id });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
} 
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await UserServices.getAllUsers();
        res.status(200).json({ status: true, users });
    } catch (error) {
        next(error);
    }
};
exports.getUserById = async (req, res, next) => {
    try {
        const userId = req.params.userId; 
        const user = await UserServices.getUserById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        res.status(200).json({ status: true, user });
    } catch (error) {
        next(error);
    }
};
exports.getUserRole = async (req, res, next) => {
    try {
        const userId = req.params.userId; 
        const role = await UserServices.getUserRoleById(userId);
        res.status(200).json({ status: true, role });
    } catch (error) {
        next(error);
    }
};
exports.updateUserById = async (req, res, next) => {
    try {
        const userId = req.params.userId; 
        const updatedUserData = req.body; 
        const updatedUser = await UserServices.updateUserById(userId, updatedUserData);
        res.status(200).json({ status: true, user: updatedUser });
    } catch (error) {
        next(error);
    }
};