const searchController = {};
const axios = require('axios');

searchController.searchMovie = async (req, res, next) => {
  console.log('---> ENTERING CONTROLLER search MOVIE<---');
  const url1 = 'https://api.themoviedb.org/3/search/movie?query='
  const search = req.query;
  const url2 = '&language=en-US&api_key=530e59adb476a9d4d8f46f031c75093e'
  const dynamicUrl = url1 + search + url2
 
  console.log('req.query resulr', search);
  console.log('DYNAMIC URL', dynamicUrl)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 530e59adb476a9d4d8f46f031c75093e'
    }
  };
  
  axios(dynamicUrl, options)
    .then(response => {
    res.locals.searchMovie = response.data
    return next();
    })
    .catch(error => console.error('error:' + error));

}


console.log('at end of controller');

module.exports = searchController;
