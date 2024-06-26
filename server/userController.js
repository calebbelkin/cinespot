const userController = {};
const model = require('./model.js');
// const User = require('./model.js')

userController.login = async (req, res, next) => {
   const { username, password } = req.body;
   try {
       // Assuming 'findOne' might be asynchronous
       const user = await model.collection.findOne({ username: username });       
       if (!user) {
           // console.log('User does not exist');
           return res.status(404).json({ error: 'User does not exist' });
       } else {
           // console.log('User exists this', password);
           if (password == user.password) return res.status(200).json({ message: 'Valid User' });
           // Here you should verify the password, for example using bcrypt if passwords are hashed
           else return res.status(404).json({ error: 'username & password is incorect' });
       }
   } catch (err) {
       return next(err);  // Pass errors to error handling middleware
   }
};


userController.addFavorite = async (req, res, next) => {
   const { username, currMovieData } = req.body;

   try {
       const Favorite = await model.collection.findOneAndUpdate(
           { username: username },
           { $push: { favorites: currMovieData } });
       if (!Favorite) {
           return res.status(404).json({ error: 'User does not exist - even though I am logged in' });
       }
       return res.status(200).json({ message: 'Movie added', movie: Favorite });
   } catch (err) {
       return next(err);
   }
};

userController.deleteFavorite = async (req, res, next) => {
    const { username, movieId} = req.body 
    try {
        const deleteFav = await model.collection.findOneAndUpdate(
            { username: username },
            { $pull: { favorites: { id: movieId}}}
        );
            if (!deleteFav) res.status(404).json({ error: 'could not remove favorite' }); 

            return res.status(200).json({ message: 'Favorite removed', user: deleteFav });
    } catch (err){
            return next(err);
}
};

module.exports = userController;
