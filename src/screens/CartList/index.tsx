import React, { useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CartListScreen from './CartList';
import { cartListSelector } from 'src/redux/selectors/list';
import { INavigation } from 'src/interfaces/navigation.interface';
import * as actions from 'src/redux/actions';

const CartList = ({ navigation }: INavigation) => {
  const cartList = useSelector(cartListSelector);

  const dispatch = useDispatch();

  const [isEditMode, setEditMode] = useState<boolean>(false);

  const turnEditMode = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setEditMode(!isEditMode);
  };

  const goToAddToList = () => navigation.navigate('AddToList');

  const onDelete = (_id: string) => {
    dispatch(actions.removeFromListAction({ _id }))
  }

  return (
    <CartListScreen
      cartList={cartList}
      isEditMode={isEditMode}
      turnEditMode={turnEditMode}
      goToAddToList={goToAddToList}
      onDelete={onDelete}
    />
  );
};

export default CartList;
