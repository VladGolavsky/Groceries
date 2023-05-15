import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddToListScreen from './AddToList';
import { INavigation } from 'src/interfaces/navigation.interface';
import * as actions from 'src/redux/actions';
import { loadingSelector } from 'src/redux/selectors';

const AddToList = ({ navigation } : INavigation) => {
  const dispatch = useDispatch();

  const { addToList: addToListLoading } = useSelector(loadingSelector);

  const [title, setTitle] = useState<string>('');

  const goBack = () => navigation.goBack();

  const onDone = () => {
    dispatch(actions.addToListAction({ title }))
  }

  return (
    <AddToListScreen
      goBack={goBack}
      onDone={onDone}
      setTitle={setTitle}
      title={title}
      loading={addToListLoading}
    />
  )
}

export default AddToList;
