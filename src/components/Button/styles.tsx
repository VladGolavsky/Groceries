import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { black, lightGray } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    height: moderateScale(40),
    backgroundColor: black,
    borderRadius: moderateScale(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(20),
    color: lightGray,
    fontWeight: '600',
  },
});