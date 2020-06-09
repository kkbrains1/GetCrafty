import axios from 'axios';

const baseURLSnack = axios.create({
  baseURL: '/api/snack'
});

const listSnacks = () => {
  return baseURLSnack
    .get('/list')
    .then(result => {
      const snacks = result.data.snacks;
      //console.log(snacks)
      return Promise.resolve(snacks)
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

const singleSnack = id => {
  return baseURLSnack
    .get(`/${id}`)
    .then(result => {
      //console.log(result)
      const snack = result.data.snack;
      return Promise.resolve(snack)
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

export {listSnacks, singleSnack};
