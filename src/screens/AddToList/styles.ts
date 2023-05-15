import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { black, white } from "src/constants/colors";

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
});
