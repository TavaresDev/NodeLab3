// const axios = require('axios');
// const BASEPATH = 'https://sandbox-api.brewerydb.com/v2/'
// eec4076c8816a15e482b5ec7a7ceb474

const axios = require('axios');
// const BASEPATH = 'https://marvelapiwrapper.herokuapp.com';
const BASEPATH = 'https://github.com/TavaresDev/jsonTest/blob/master/products.json';

exports.find = async () => {
  const path = `${BASEPATH}/characters`;

  const { data } = await axios.get(path);
//   data.map(e => e.thumbnail = this.getThumbnailLink(e.thumbnail));
  return data;
};