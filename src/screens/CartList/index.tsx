import React, { useState } from 'react';
import { Alert, LayoutAnimation } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CartListScreen from './CartList';
import { cartListSelector } from 'src/redux/selectors/list';
import { INavigation } from 'src/interfaces/navigation.interface';
import * as actions from 'src/redux/actions';
import { StatusEnum } from 'src/enums/list.enum';
import { usingWithoutAccountSelector } from 'src/redux/selectors/auth';
import { isNetConnectedSelector } from 'src/redux/selectors/config';
import * as ERRORS from 'src/constants/errors';

const CartList = ({ navigation }: INavigation) => {
  const cartList = useSelector(cartListSelector);

  const dispatch = useDispatch();

  const [isEditMode, setEditMode] = useState<boolean>(false);

  const turnEditMode = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setEditMode(!isEditMode);
  };

  const usingWithoutAccount = useSelector(usingWithoutAccountSelector);
  const isNetConnected = useSelector(isNetConnectedSelector);

  const goToAddToList = () => navigation.navigate('AddToList');

  const onDelete = (_id: string) => {
    if (usingWithoutAccount) {
      dispatch(actions.removeFromListReduxAction({ _id }))
    } else {
      if (isNetConnected) {
        dispatch(actions.removeFromListAction({ _id }))
      } else {
        Alert.alert(ERRORS.CheckInternetConnection);
      }
    }
  }

  const goToSettings = () => {
    dispatch(actions.setShowSettingsModalAction(true));
  };

  const onUpdateProduct = (_id: string, status: StatusEnum, undoChanges: () => void) => {
    if (usingWithoutAccount) {
      dispatch(actions.updateProductStatusReduxWithoutAccountAction({ _id, status: status === StatusEnum.cart ? StatusEnum.home : StatusEnum.cart }));
    } else {
      if (isNetConnected) {
        dispatch(actions.updateProductStatusAction({ _id, status: status === StatusEnum.cart ? StatusEnum.home : StatusEnum.cart, undoChanges }));
      } else {
        dispatch(actions.updateProductStatusSyncReduxAction({ _id, status: status === StatusEnum.cart ? StatusEnum.home : StatusEnum.cart }));
      }
    }
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
