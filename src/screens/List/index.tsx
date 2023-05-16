import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import ListScreen from './List';

import * as actions from 'src/redux/actions';
import { INavigation } from 'src/interfaces/navigation.interface';
import { listSelector } from 'src/redux/selectors/list';
import { LayoutAnimation } from 'react-native';

const List = ({ navigation } : INavigation) => {
  const dispatch = useDispatch();

  const list = useSelector(listSelector);
  const [isEditMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  useEffect(() => {
    dispatch(actions.getListAction());
  }, []);

  const turnEditMode = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setEditMode(!isEditMode)
  };

  const onDelete = (_id: string) => {
    dispatch(actions.removeFromListAction({ _id }))
  }

  const goToAddToList = () => navigation.navigate('AddToList');

  return (
    <ListScreen
      turnEditMode={turnEditMode}
      isEditMode={isEditMode}
      goToAddToList={goToAddToList}
      list={list}
      onDelete={onDelete}
    />
  );
};

export default List;
