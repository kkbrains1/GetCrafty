import axios from 'axios';

const baseURLCraftbeer = axios.create({
  baseURL: '/api/craftbeer'
});

const listCraftbeers = () => {
  return baseURLCraftbeer
    .get('/list')
    .then(result => {
      const craftbeers = result.data.craftbeers;
      return Promise.resolve(craftbeers)
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

export default listCraftbeers;
