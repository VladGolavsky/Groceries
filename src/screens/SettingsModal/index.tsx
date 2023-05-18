import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SettingsModalScreen from './SettingsModal';
import { apiUrlSelector, showSettingsModalSelector } from 'src/redux/selectors/config';
import * as actions from 'src/redux/actions';
import { navigationRef } from 'src/navigation';
import { StackActions } from '@react-navigation/native';
import { accessTokenSelector, usingWithoutAccountSelector } from 'src/redux/selectors/auth';

const SettingsModal = () => {
  const dispatch = useDispatch();

  const showSettingsModal = useSelector(showSettingsModalSelector);
  const apiUrl = useSelector(apiUrlSelector);
  const accessToken = useSelector(accessTokenSelector);
  const usingWithoutAccount = useSelector(usingWithoutAccountSelector);

  const [url, setUrl] = useState(apiUrl);

  const closeModal = () => {
    dispatch(actions.setShowSettingsModalAction(false));
  }

  const logout = () => {
    dispatch(actions.logoutAction());
    closeModal();
    navigationRef.current?.dispatch(StackActions.replace('SignIn'));
  };

  const onApply = () => {
    dispatch(actions.setConfigAction({ apiUrl: url, showSettingsModal: false }));
  }

  const goToLogin = () => {
    closeModal();
    navigationRef.current?.navigate('SignIn');
  }

  return (
    <SettingsModalScreen
      showSettingsModal={showSettingsModal}
      closeModal={closeModal}
      url={url}
      setUrl={setUrl}
      logout={logout}
      onApply={onApply}
      accessToken={accessToken}
      usingWithoutAccount={usingWithoutAccount}
      goToLogin={goToLogin}
    />
  );
};

export default SettingsModal;
