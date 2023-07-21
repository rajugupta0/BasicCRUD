const User = require('../models/user');

class  UserRepository {


    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log(error);
        }
    }   

    async getAll() {
        try {
            const user = await User.find();
            return 
        } catch (error) {
            console.log(error);
        }
    }
    async get(Id) {
        try {
            const user = await User.findById(Id);
            return 
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserRepository;