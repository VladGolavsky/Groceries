import React from 'react';

import AddToListScreen from './AddToList';
import { INavigation } from 'src/interfaces/navigation.interface';

const AddToList = ({ navigation } : INavigation) => {
  const goBack = () => navigation.goBack();

  const onDone = () => {
    
  }

  return (
    <AddToListScreen
      goBack={goBack}
      onDone={onDone}
    />
  )
}

export default AddToList;
