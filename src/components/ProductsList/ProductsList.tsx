import React from "react";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { saveProduct } from '../../store/slice/productSlice';
import { getProductsData } from '../../services/productsApi';
import { useDispatch } from 'react-redux';
import cls from '../ProductsForm/ProductsForm.module.scss';
import ProductsParse from '../ProductsParse/ProductsParse';
import ProductsForm from "../ProductsForm/ProductsForm";

export default function ProductsList(): JSX.Element {
  const dispatch = useDispatch();

  const loadData = async (): Promise<void> => {
    try {
      const data: ProductsListType[] = await getProductsData();
      dispatch(saveProduct(data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div className={cls.productListForm}>
        <ProductsForm />
        <Link to={`/cart/`}>
          <button className={cls.productListFormCart}>Cart</button>
        </Link>
      </div>
      <ProductsParse />
    </div>
  );
}
