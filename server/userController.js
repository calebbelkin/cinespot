const userController = {};
const model = require('./model.js');


userController.login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        // Assuming 'findOne' might be asynchronous
        const user = await model.collection.findOne({ username: username });
        if (!user) {
            console.log('User does not exist');
            return res.status(404).json({ error: 'User does not exist' });
        } else {
            console.log('User exists');
            // Here you should verify the password, for example using bcrypt if passwords are hashed
            return res.status(200).json({ message: 'User exists' });
        }
    } catch (err) {
        return next(err);  // Pass errors to error handling middleware
    }
};

module.exports = userController;