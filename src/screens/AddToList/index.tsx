import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import { Alert } from 'react-native';

import AddToListScreen from './AddToList';
import { INavigation } from 'src/interfaces/navigation.interface';
import * as actions from 'src/redux/actions';
import { loadingSelector } from 'src/redux/selectors';
import { usingWithoutAccountSelector } from 'src/redux/selectors/auth';
import { StatusEnum } from 'src/enums/list.enum';
import * as ERRORS from 'src/constants/errors';
import { isNetConnectedSelector } from 'src/redux/selectors/config';


const AddToList = ({ navigation } : INavigation) => {
  const dispatch = useDispatch();

  const { addToList: addToListLoading } = useSelector(loadingSelector);
  const usingWithoutAccount = useSelector(usingWithoutAccountSelector);
  const isNetConnected = useSelector(isNetConnectedSelector);

  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string>('');

  const goBack = () => navigation.goBack();

  const onDone = () => {
    if (title.length) {
      setError('');
      if (usingWithoutAccount) {
        const _id = uuidv4();
        dispatch(actions.addToListReduxAction({
          _id,
          productId: _id,
          status: StatusEnum.cart,
          productDetails: {
            _id,
            title,
          },
        }));
        navigation.goBack();
      } else {
        if (isNetConnected) {
          dispatch(actions.addToListAction({ title }))
        } else {
          Alert.alert(ERRORS.CheckInternetConnection);
        }
      }
    } else {
      setError(ERRORS.FillTitle);
      Alert.alert(ERRORS.FillTitle);
    }
  }

  return (
    <AddToListScreen
      goBack={goBack}
      onDone={onDone}
      setTitle={setTitle}
      title={title}
      loading={addToListLoading}
      error={error}
    />
  )
}

export default AddToList;
