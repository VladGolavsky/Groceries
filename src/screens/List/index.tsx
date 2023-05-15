import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import ListScreen from './List';

import * as actions from 'src/redux/actions';
import { INavigation } from 'src/interfaces/navigation.interface';

const List = ({ navigation } : INavigation) => {
  const dispatch = useDispatch();

  const [isEditMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  useEffect(() => {
    dispatch(actions.getListAction());
  }, []);

  const turnEditMode = () => setEditMode(!isEditMode);

  const goToAddToList = () => navigation.navigate('AddToList');

  return (
    <ListScreen
      turnEditMode={turnEditMode}
      isEditMode={isEditMode}
      goToAddToList={goToAddToList}
    />
  );
};

export default List;
