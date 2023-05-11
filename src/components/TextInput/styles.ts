import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { black } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: black,
    borderBottomWidth: 1,
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(5),
  },
  textInput: {
    fontSize: scale(16),
    color: black,
    padding: 0,
  },
  textInputWithSecure: {
    width: '90%'
  },
});
