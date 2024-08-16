import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../store/slice/cartSlice';
import cls from './Cart.module.scss'
import { RootState } from 'store';

export default function Cart() {
  const dispatch = useDispatch();
  
  const cart = useSelector((state: RootState) => state.cart) as CartType[];

  const totalPrice = cart.reduce(
    (accumulator, current) => accumulator + current.price,
    0
  );

  const list = () => {
    return (
      <ul className={cls.cartList}>
        <span className={cls.cartListTitle}>Shopping Cart</span>
        {cart.map((product) => (
          <li
            className={cls.cartListItem}
            key={product.id}
          >
            <button
              onClick={() => dispatch(deleteFromCart(product.id))}
              className={cls.cartListItemDelete}
            >
              X
            </button>
            <img
              alt='product'
              className={cls.cartListItemImage}
              src={product.image}
            />
            <span className={cls.cartListItemTitle}>{product.title}</span>
            <span className={cls.cartListItemPrice}>
              {product.price.toFixed(2)}$
            </span>
          </li>
        ))}
        <span className={cls.cartListItemTotalPrice}>
          Total: {totalPrice.toFixed(2)}$
        </span>
      </ul>
    );
  };

  return <div>{list()}</div>;
}