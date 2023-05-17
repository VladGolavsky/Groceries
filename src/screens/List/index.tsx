import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { getUniqueId } from 'react-native-device-info';

// import io from 'socket.io-client';

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

  // useEffect(() => {

  //   socket.on('connect', function(data) {
  //     console.log('installed', data);
  //   });
    
  //   socket.on('message', function(data) {
  //     console.log(`recieved: ${data}`);
  //   });

  //   socket.on('list-update-03EA1A71-9C66-487E-93F4-325F42147AC2', (res) => {
  //     console.log('res', res)
  //   });
    
  //   socket.on('disconnect', function() {
  //     console.log('Disconnected');
  //   });
    
  //   socket.on('error', function(error) {
  //     console.log(`Error: ${error}`);
  //   });
    
  // }, [])

  useEffect(() => {
    getUniqueId().then((uniqueId: string) => {
      dispatch(actions.setDeviceIdAction(uniqueId));
    });
  }, [])

  useEffect(() => {
    dispatch(actions.getListAction());
    getUniqueId().then((deviceId: string) => {
      dispatch(actions.startListeningAction({ deviceId }));
    });
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
