import axios from 'axios';

const baseURLCraftbeer = axios.create({
  baseURL: '/api/craftbeer'
});

const listCraftbeers = () => {
  return baseURLCraftbeer
    .get('/list')
    .then((result) => {
      const craftbeers = result.data.craftbeers;
      console.log(craftbeers);
      return Promise.resolve(craftbeers);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const randomCraftbeer = (id) => {
  return baseURLCraftbeer
    .get(`/random`)
    .then((result) => {
      const craftbeer = result.data.beer;
      return Promise.resolve(craftbeer);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const singleCraftbeer = (id) => {
  return baseURLCraftbeer
    .get(`/${id}`)
    .then((result) => {
      const craftbeer = result.data.craftbeer;
      return Promise.resolve(craftbeer);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { listCraftbeers, singleCraftbeer, randomCraftbeer };
