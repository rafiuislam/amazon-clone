import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import ClearIcon from '@material-ui/icons/Clear';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
      dispatch({
          type: 'REMOVE_FROM_BASKET',
          id:id,
      })
  };
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const subFromBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "SUB_FROM_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };


  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
      <ClearIcon className='remove_icon'  onClick={removeFromBasket}></ClearIcon>
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={addToBasket}>Add to Basket</button>
        <button onClick={subFromBasket}>Sub from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
