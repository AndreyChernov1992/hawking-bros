import React from "react";
import { useDispatch } from 'react-redux';
import { addProductsData } from '../../services/productsApi';
import { addProduct } from '../../store/slice/productSlice';
import { useState } from 'react';
import PureModal from 'react-pure-modal';
import cls from './ProductsForm.module.scss'

const emptyProduct: ProductsFormType = { title: '', price: 0, image: '' };

export default function ProductsForm(): JSX.Element {
  const [newProduct, setNewProduct] = useState<ProductsFormType>(emptyProduct);
  const [modalToggle, setModalToggle] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSubmit = (): void => {
    addProductsData(newProduct)
      .then((data: ProductsFormType) => {
        dispatch(addProduct(data));
        setNewProduct(emptyProduct);
        setModalToggle(false);
      })
      .catch(err => console.log(err));
  };

  const onChange = (key: keyof ProductsFormType, value: string): void => 
    setNewProduct((prev) => ({ ...prev, [key]: value }));
  
  const modalWindowToggle = (): void => {
    setModalToggle(!modalToggle);
  };

  return (
    <div>
      <button
        className={cls.productListFormAdd}
        onClick={() => modalWindowToggle()}
      >
        Add Product
      </button>
      <PureModal
        isOpen={modalToggle}
        onClose={() => setModalToggle(false)}
      >
        <>
        <div>
          Title:
          <input
            name='Title'
            type='text'
            value={newProduct.title}
            onChange={(e) => onChange('title', e.target.value)}
          />
        </div>
        <div>
          Price:
          <input
            name='Price'
            type='text'
            value={newProduct.price}
            onChange={(e) => onChange('price', e.target.value)}
          />
        </div>
        <div>
          Image URL:
          <input
            name='Image'
            type='url'
            value={newProduct.image}
            onChange={(e) => onChange('image', e.target.value)}
          />
        </div>
        <input
          type='button'
          value='Submit'
          onClick={handleSubmit}
        />
        </>
      </PureModal>
    </div>
  );
}