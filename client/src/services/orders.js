import axios from 'axios';

const baseOrderService = axios.create({
  baseURL: '/api/order'
});

const listOrders = () => {
  return baseOrderService
    .get('/list')
    .then((response) => {
      //console.log(response);
      const data = response.data;
      const orders = data.orders;
      return Promise.resolve(orders);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const loadOrder = (id) => {
  //console.log(id);
  return baseOrderService
    .get(`/${id}`)
    .then((response) => {
      const data = response.data;
      const products = data.allProducts;
      const order = data.order;
      //console.log(products);
      return Promise.resolve({ ...order }, { ...products });
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const createOrder = data => {
  //console.log('service data', data);
  return baseOrderService
    .post('/', data)
    .then(response => {
      // ...
      const responseBody = response.data;
      //console.log(responseBody);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

export { listOrders, loadOrder, createOrder };
