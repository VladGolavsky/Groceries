import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, scale, verticalScale } from "react-native-size-matters";

import { black, red } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(15),
  },
  textLogo: {
    marginTop: moderateVerticalScale(80),
    textAlign: 'center',
    fontSize: moderateScale(45),
    textTransform: 'uppercase',
    color: black
  },
  textInputsContainer: {
    marginTop: verticalScale(30),
  },
  buttonContainer: {
    marginTop: verticalScale(20),
  },
  textInputAdditionStyles: {
    marginBottom: verticalScale(20)
  },
  textUseWithoutAccountContainer: {
    borderBottomWidth: 1.5,
    borderBottomColor: black,
    alignSelf: 'center',
  },
  textUseWithoutAccount: {
    fontWeight: '700',
    color: black,
    textAlign: 'center',
    fontSize: moderateVerticalScale(14),
  },
  buttonUseWithoutAccount: {
    paddingVertical: moderateScale(8),
  },
  buttonSignUp: {
    alignSelf: 'flex-end',
    paddingVertical: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    marginTop: 1,
  },
  textSignUp: {
    color: black,
    fontSize: moderateScale(15),
    fontWeight: '700',
  },
  textErrorContainer: {
    marginTop: scale(5),
    height: moderateScale(14),
    alignSelf: 'flex-end',
  },
  textError: {
    color: red,
    fontSize: moderateScale(10),
    fontWeight: '500',
  }
});
