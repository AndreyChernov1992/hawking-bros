import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSingleProductData } from '../../services/productsApi';
import { useEffect, useState } from 'react';
import cls from './productPage.module.scss';
import { RootState } from '../../store';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>(); 
  const productsArray = useSelector((state: RootState) => state.products);
  const [product, setProduct] = useState<ProductPageType | null>(null); 

  useEffect(() => {
    const currentProduct = productsArray?.find(
      (product) => product.id === Number(id) 
    );

    const getProduct = async () => {
      try {
        const data = await getSingleProductData(Number(id));
        data ? setProduct(data) : setProduct(currentProduct || null);
      } catch (e) {
        console.log(e);
      }
    };

    getProduct();
  }, [id, productsArray]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={cls.productPage}>
      <img
        className={cls.productPageImage}
        alt='product'
        src={product.image}
      />
      <li className={cls.productPageTitle}>{product.title}</li>
      <li className={cls.productPageDescription}>{product.description}</li>
      <li className={cls.productPagePrice}>{product.price}$</li>
    </ul>
  );
}
