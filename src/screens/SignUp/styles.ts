import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, verticalScale } from "react-native-size-matters";

import { black } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(15),
  },
  textLogo: {
    paddingTop: moderateVerticalScale(80),
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
  buttonGoBack: {
    paddingHorizontal: moderateScale(10),
  },
  buttonBackText: {
    fontSize: moderateScale(20),
    color: black,
    fontWeight: '600',
  },
});
