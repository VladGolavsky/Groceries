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
  buttonGoBack: {
    paddingHorizontal: moderateScale(10),
  },
  buttonBackText: {
    fontSize: moderateScale(20),
    color: '#000',
    fontWeight: '600',
  },
});
