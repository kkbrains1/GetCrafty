import axios from 'axios';

const baseOrderService = axios.create({
  baseURL: '/api/order'
});

const listOrders = () => {
  return baseOrderService
    .get('/list')
    .then((response) => {
      console.log(response);
      const data = response.data;
      const orders = data.orders;
      return Promise.resolve(orders);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const loadOrder = (id) => {
  console.log(id);
  return baseOrderService
    .get(`/${id}`)
    .then((response) => {
      const data = response.data;

      const order = data.order;
      console.log(order);
      return Promise.resolve({ ...order });
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { listOrders, loadOrder };
