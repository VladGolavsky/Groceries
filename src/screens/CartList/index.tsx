import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CartListScreen from './CartList';
import { cartListSelector } from 'src/redux/selectors/list';
import { INavigation } from 'src/interfaces/navigation.interface';

const CartList = ({ navigation }: INavigation) => {
  const cartList = useSelector(cartListSelector);

  const [isEditMode, setEditMode] = useState<boolean>(false);

  const turnEditMode = () => setEditMode(!isEditMode);

  const goToAddToList = () => navigation.navigate('AddToList');

  return (
    <CartListScreen
      cartList={cartList}
      isEditMode={isEditMode}
      turnEditMode={turnEditMode}
      goToAddToList={goToAddToList}
    />
  );
};

export default CartList;
