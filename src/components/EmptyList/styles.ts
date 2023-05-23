import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { black } from "src/constants/colors";

const styles = StyleSheet.create({
  textListEmpty: {
    marginTop: scale(20),
    textAlign: 'center',
    fontSize: scale(20),
    color: black,
  },
  buttonContainer: {
    marginHorizontal: scale(40),
    marginTop: scale(15),
  },
});

export default styles;
