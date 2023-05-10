import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(5),
  },
  textInput: {
    fontSize: scale(16),
    color: '#000',
  },
  textInputWithSecure: {
    width: '90%'
  },
});
