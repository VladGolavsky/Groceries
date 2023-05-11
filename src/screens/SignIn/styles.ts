import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, verticalScale } from "react-native-size-matters";

import { black } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(15),
  },
  textLogo: {
    marginTop: moderateVerticalScale(80),
    textAlign: 'center',
    fontSize: moderateScale(45),
    textTransform: 'uppercase',
  },
  textInputsContainer: {
    marginTop: verticalScale(30),
  },
  buttonContainer: {
    marginTop: verticalScale(30),
  },
  textInputAdditionStyles: {
    marginBottom: verticalScale(20)
  },
  textUseWithoutAccount: {
    fontWeight: '700',
    color: black,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  buttonUseWithoutAccount: {
    paddingVertical: moderateScale(8),
  },
  buttonSignUp: {
    alignSelf: 'flex-end',
    paddingVertical: moderateScale(5),
  },
  textSignUp: {
    color: black,
    fontSize: moderateScale(15),
    fontWeight: '700',
  },
});
