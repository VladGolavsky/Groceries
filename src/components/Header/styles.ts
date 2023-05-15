import { StyleSheet, Dimensions } from "react-native";
import { scale } from "react-native-size-matters";

import { black, lightGray } from "src/constants/colors";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: lightGray,
    height: scale(50),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftPart: {
    width: width * 0.25,
  },
  rightPart: {
    width: width * 0.25,
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: '500',
    color: black,
    fontSize: scale(16),
  },
});