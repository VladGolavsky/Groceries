import React, { useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CartListScreen from './CartList';
import { cartListSelector } from 'src/redux/selectors/list';
import { INavigation } from 'src/interfaces/navigation.interface';
import * as actions from 'src/redux/actions';
import { StatusEnum } from 'src/enums/list.enum';

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

  const goToSettings = () => {
    dispatch(actions.setShowSettingsModalAction(true));
  };

  const onUpdateProduct = (_id: string, status: StatusEnum, undoChanges: () => void) => {
    dispatch(actions.updateProductStatusAction({ _id, status: status === StatusEnum.cart ? StatusEnum.home : StatusEnum.cart, undoChanges }))
  }

  return (
    <CartListScreen
      cartList={cartList}
      isEditMode={isEditMode}
      turnEditMode={turnEditMode}
      goToAddToList={goToAddToList}
      onDelete={onDelete}
      goToSettings={goToSettings}
      onUpdateProduct={onUpdateProduct}
    />
  );
};

export default CartList;
