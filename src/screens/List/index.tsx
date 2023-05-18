import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { getUniqueId } from 'react-native-device-info';
import NetInfo from "@react-native-community/netinfo";

import ListScreen from './List';

import * as actions from 'src/redux/actions';
import { INavigation } from 'src/interfaces/navigation.interface';
import { listSelector } from 'src/redux/selectors/list';
import { LayoutAnimation } from 'react-native';
import { StatusEnum } from 'src/enums/list.enum';
import { apiUrlSelector, isNetConnectedSelector } from 'src/redux/selectors/config';
import { usingWithoutAccountSelector } from 'src/redux/selectors/auth';

const List = ({ navigation } : INavigation) => {
  const dispatch = useDispatch();

  const list = useSelector(listSelector);
  const apiUrl = useSelector(apiUrlSelector);
  const usingWithoutAccount = useSelector(usingWithoutAccountSelector);
  const isNetConnected = useSelector(isNetConnectedSelector);

  const [isEditMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(actions.setNetConnectionStatusAction(state.isConnected || false ));
    });
    
    return () => {
      unsubscribe();
    } 
  }, []);

  useEffect(() => {
    if (isNetConnected && !usingWithoutAccount) {
      dispatch(actions.uploadProductStatusesFromReduxAction());
    }
  }, [isNetConnected])

  useEffect(() => {
    getUniqueId().then((uniqueId: string) => {
      dispatch(actions.setDeviceIdAction(uniqueId));
    });
  }, [])

  useEffect(() => {
    if (!usingWithoutAccount) {
      // dispatch(actions.getListAction());
      getUniqueId().then((deviceId: string) => {
        dispatch(actions.startListeningAction({ deviceId }));
      });
    }
  }, [apiUrl]);

  const turnEditMode = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setEditMode(!isEditMode)
  };

  const onDelete = (_id: string) => {
    if (usingWithoutAccount) {
      dispatch(actions.removeFromListReduxAction({ _id }))
    } else {
      dispatch(actions.removeFromListAction({ _id }))
    }
  }

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
