import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/slice/cartSlice';
import { deleteProductsData } from '../../services/productsApi';
import { deleteProduct } from '../../store/slice/productSlice';
import cls from './ProductsParse.module.scss'
import { RootState } from '../../store';
import { ProductParseType } from "./ProductParse.types";

export default function ProductsParse(): JSX.Element {
  const productsArray = useSelector((state: RootState) => state.products);

  const dispatch = useDispatch();

  const deleteItem = async (id: number): Promise<void> => {
    try {
      await deleteProductsData(id);
      dispatch(deleteProduct(id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ul className={cls.productList}>
      {productsArray.map((product: ProductParseType) => (
        <li
          className={cls.productListItem}
          key={product.id}
        >
          <Link
            to={`/product/${product.id}`}
          >
            <img
              alt='product'
              className={cls.productListItemImage}
              src={product.image}
            />
            <span className={cls.productListItemTitle}>{product.title}</span>
            <span className={cls.productListItemPrice}>
              {product.price.toFixed(2)}$
            </span>
          </Link>
          <button
            onClick={() => deleteItem(product.id)}
            className={cls.productListItemDel}
          >
            Delete
          </button>
          <button
            className={cls.productListItemCart}
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  );
}