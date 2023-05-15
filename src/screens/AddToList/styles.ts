import { StyleSheet, Dimensions } from "react-native";
import { scale } from "react-native-size-matters";

import { black, blackWithOpacity, white } from "src/constants/colors";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: scale(10),
  },
  buttonHeader: {
    paddingHorizontal: scale(10),
  },
  buttonTextHeader: {
    fontWeight: '500',
    color: black,
    fontSize: scale(19),
    letterSpacing: -0.9
  },
  textTitle: {
    marginTop: scale(30),
    textAlign: 'center',
    fontWeight: '500',
    color: black,
    fontSize: scale(20),
    letterSpacing: -0.9
  },
  textInput: {
    marginTop: scale(30),
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: blackWithOpacity,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
