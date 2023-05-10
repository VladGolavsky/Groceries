import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export default StyleSheet.create({
  container: {
    height: moderateScale(40),
    backgroundColor: '#000',
    borderRadius: moderateScale(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(20),
    color: '#FFF',
    fontWeight: '600',
  },
});