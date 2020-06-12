import axios from 'axios';

const baseURLCraftbeer = axios.create({
  baseURL: '/api/craftbeer'
});

const listCraftbeers = () => {
  return baseURLCraftbeer
    .get('/list')
    .then((result) => {
      const craftbeers = result.data.craftbeers;
      //console.log(craftbeers)
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
      //console.log('This =>', result)
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

const submitProduct = (body) => {
  const form = new FormData();
  form.append('name', body.name);
  form.append('description', body.description);
  form.append('tagline', body.tagline);
  form.append('photo', body.photo);
  form.append('type', body.type);
  form.append('abv', body.abv);
  form.append('ibu', body.ibu);
  form.append('food_pairing', body.food_pairing);
  form.append('ingredients', body.ingredients);
  form.append('contributed_by', body.contributed_by);
  form.append('price', body.price);
  //console.log(body)
  return baseURLCraftbeer
    .post('/add-product', form)
    .then((response) => {
      const product = response.data.product;
      return Promise.resolve(product);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { listCraftbeers, singleCraftbeer, randomCraftbeer, submitProduct };
