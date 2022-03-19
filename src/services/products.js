import services from '../services';

export default {
  async getProducts() {
    try {
      const res = await services().get('products');
      return {
        success: true,
        data: res.data.products,
      };
    } catch (error) {
      return {
        success: false,
        data: 'Error',
      };
    }
  },
};
