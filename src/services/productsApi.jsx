import ProductsApi from '../api/productsApi';

export async function getProductsData() {
  const api = new ProductsApi();
  const { data } = await api.getProducts();
  return data;
}

export async function addProductsData(product) {
  const api = new ProductsApi();
  const { data } = await api.addProducts({ data: product });
  return data;
}

export async function deleteProductsData(product) {
  const api = new ProductsApi();
  const { data } = await api.removeProducts(product);
  return data;
}

export async function getSingleProductData(product) {
  const api = new ProductsApi();
  const { data } = await api.getSingleProduct(product);
  return data;
}
