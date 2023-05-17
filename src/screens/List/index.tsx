import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import ListScreen from './List';

import * as actions from 'src/redux/actions';
import { INavigation } from 'src/interfaces/navigation.interface';
import { listSelector } from 'src/redux/selectors/list';
import { LayoutAnimation } from 'react-native';
import { StatusEnum } from 'src/enums/list.enum';
import { apiUrlSelector } from 'src/redux/selectors/config';

const List = ({ navigation } : INavigation) => {
  const dispatch = useDispatch();

  const list = useSelector(listSelector);
  const apiUrl = useSelector(apiUrlSelector);
  const [isEditMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  useEffect(() => {
    dispatch(actions.getListAction());
  }, [apiUrl]);

  const turnEditMode = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setEditMode(!isEditMode)
  };

  const onDelete = (_id: string) => {
    dispatch(actions.removeFromListAction({ _id }))
  }

  const onUpdateProduct = (_id: string, status: StatusEnum, undoChanges: () => void) => {
    dispatch(actions.updateProductStatusAction({ _id, status: status === StatusEnum.cart ? StatusEnum.home : StatusEnum.cart, undoChanges }))
  }

  const goToAddToList = () => navigation.navigate('AddToList');

  const goToSettings = () => {
    dispatch(actions.setShowSettingsModalAction(true));
  };

  return (
    <ListScreen
      turnEditMode={turnEditMode}
      isEditMode={isEditMode}
      goToAddToList={goToAddToList}
      list={list}
      onDelete={onDelete}
      onUpdateProduct={onUpdateProduct}
      goToSettings={goToSettings}
    />
  );
};

export default List;
