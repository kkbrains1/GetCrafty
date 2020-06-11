import axios from 'axios';

const baseURLBrewingkit = axios.create({
  baseURL: '/api/brewingkit'
});

const listBrewingkits = () => {
  return baseURLBrewingkit
    .get('/list')
    .then(result => {
      const brewingkits = result.data.brewingkits;
      //console.log(brewingkits)
      return Promise.resolve(brewingkits);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

const singleBrewingkit = id => {
  return baseURLBrewingkit
    .get(`/${id}`)
    .then(result => {
      //console.log(result)
      const brewingkit = result.data.brewingkit;
      return Promise.resolve(brewingkit);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

export { listBrewingkits, singleBrewingkit };
