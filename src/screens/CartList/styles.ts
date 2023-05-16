import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { black, gray, white } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
  },
  buttonEditMode: {
    paddingHorizontal: scale(10),
  },
  buttonTextDone: {
    fontWeight: '500',
    color: black,
    fontSize: scale(19),
    letterSpacing: -0.9
  },
});
