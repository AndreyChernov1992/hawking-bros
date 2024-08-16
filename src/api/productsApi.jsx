import { BaseApi } from './BaseApi';

class ProductsApi extends BaseApi {
  getProducts(config) {
    return this.request('GET', '/products', config);
  }
  addProducts(config) {
    return this.request('POST', '/products', config);
  }
  removeProducts(config) {
    return this.request('DELETE', `/products/${config}`, '');
  }
  getSingleProduct(config) {
    return this.request('GET', `/products/${config}`, '');
  }
}

export default ProductsApi;
