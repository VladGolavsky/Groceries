import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { black, red } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: black,
    borderBottomWidth: 1,
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(5),
  },
  containerWithError: {
    borderBottomColor: red,
  },
  textInput: {
    fontSize: scale(16),
    color: black,
    padding: 0,
    width: '100%',
  },
  textInputWithError: {
    color: red,
  },
  textInputWithSecure: {
    width: '90%'
  },
  containerWithSecure: {
    flexDirection: 'row',
  },
  secureButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '10%',
  },
  textCharactersLeft: {
    textAlign: 'right',
    marginTop: scale(2),
    fontSize: scale(19),
    fontWeight: '500',
    letterSpacing: -0.5,
    color: black,
  },
});
