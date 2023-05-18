import { StyleSheet, Dimensions } from "react-native";
import { scale } from "react-native-size-matters";

import { black, gray, green, lightGray } from "src/constants/colors";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: lightGray,
    height: scale(50),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#BCBCBC'
  },
  leftPart: {
    width: width * 0.25,
  },
  rightPart: {
    width: width * 0.25,
    alignItems: 'flex-end',
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: '500',
    color: black,
    fontSize: scale(20),
    letterSpacing: -0.5,
  },
  dot: {
    backgroundColor: green,
    marginTop: scale(8),
    marginLeft: scale(5),
    height: scale(5),
    width: scale(5),
    borderRadius: scale(5),
  },
  titleContainer: {
    flexDirection: 'row',
  },
  emptyDot: {
    backgroundColor: black,
  },
});