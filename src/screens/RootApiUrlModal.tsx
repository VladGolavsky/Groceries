import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { black } from 'src/constants/colors';
import * as COLORS from 'src/constants/colors';
import { isValidApiUrlSelector } from 'src/redux/selectors/config';
import * as actions from 'src/redux/actions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  window: {
    width: width * .75,
    height: moderateVerticalScale(175),
    borderRadius: 15,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    paddingTop: moderateScale(15),
    paddingBottom: moderateScale(25),
    paddingLeft: moderateScale(15),
    paddingRight: moderateScale(15),
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    width: '90%',
    height: moderateVerticalScale(35),
    paddingLeft: moderateScale(15),
    paddingRight: moderateScale(15),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
    marginTop: moderateVerticalScale(25),
    marginBottom: moderateVerticalScale(25),
  },
  verifyTouch: {
    width: moderateScale(75),
    height: moderateVerticalScale(35),
    borderRadius: 5,
    backgroundColor: black,
  },
  verifyLabel: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '500',
  },
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: COLORS.blackWithOpacity,
  },
  verified: {
    backgroundColor: 'green',
  },
  verifiedLabel: {
    color: COLORS.black,
  },
});

const Loading = () => (
  <View style={[styles.window, styles.loading, styles.center]}>
    <ActivityIndicator color={COLORS.black} size={'large'}/>
  </View>
);

const Verified = ({ callback } : { callback: () => void }) => {
  const [timeLeft, _timeLeft] = useState<number>(3);
  
  useEffect(() => {
    if (timeLeft >= 0) {
      setTimeout(() => _timeLeft(timeLeft - 1), 1000);
    } else {
      callback();
    }
  }, [timeLeft]);
  
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
      disabled={true}
      style={[styles.verifyTouch, styles.verified, styles.center]}
    >
      <Text style={[styles.verifyLabel, styles.verifiedLabel]}>
        Verify {timeLeft}
      </Text>
    </TouchableOpacity>
  );
};

export const RootApiUrlModal = () => {
  const [input, _input] = useState<string>('');
  const [isVerifyInProgress, _isVerifyInProgress] = useState<boolean>(false);
  const [isVerified, _isVerified] = useState<boolean>(false);
  const isValidApiUrl = useSelector(isValidApiUrlSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isValidApiUrl)
      setDefault();
  }, [isValidApiUrl]);

  if (isValidApiUrl)
    return null

  const setDefault = () => {
    _input('');
    _isVerified(false);
    _isVerifyInProgress(false);
  };

  const verifyAndSet = () => {
    if (!input || input.trim() === '') {
      alert('URL should not be empty');
      return;
    };

    _isVerifyInProgress(true);
    fetch(input)
      .then(onVerifyFinished)
      .catch(onVerifyError)
      .finally(onVerifiyProccessEnd);
  };

  const verifyCallback = () => {
    dispatch(actions.setConfigAction({ isValidApiUrl: true, apiUrl: input }));
    setDefault();
  };

  const onVerifyError = () => alert('URL is invalid or API does not work.');
  const onVerifiyProccessEnd = () =>  _isVerifyInProgress(false);

  const onVerifyFinished = () => {
    _isVerified(true);
  };

  const renderBottom = () => {
    if (isVerified)
      return <Verified callback={verifyCallback}/>

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
        onPress={verifyAndSet}
        style={[styles.verifyTouch, styles.center]}
      >
        <Text style={styles.verifyLabel}>
          Verify
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      isVisible={true}
      style={styles.modal}
    >
      <View style={[styles.window, styles.root]}>
        { isVerifyInProgress && <Loading/> }
        <Text style={styles.title}>Enter new API URL</Text>
        <TextInput
          value={input}
          onChangeText={_input}
          style={styles.input}
        />
        { renderBottom() }
      </View>
    </Modal>
  );
};