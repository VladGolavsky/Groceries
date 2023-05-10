import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(15),
  },
  textLogo: {
    marginTop: '25%',
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
    color: '#000',
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
    color: '#000',
    fontSize: moderateScale(15),
    fontWeight: '700',
  },
});
