import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, scale, verticalScale } from "react-native-size-matters";

import { black, red } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(15),
  },
  textLogo: {
    paddingTop: moderateVerticalScale(80),
    textAlign: 'center',
    fontSize: moderateScale(45),
    color: black,
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
  },
  buttonBackText: {
    fontSize: moderateScale(20),
    color: black,
    fontWeight: '600',
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
