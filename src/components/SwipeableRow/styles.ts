import { StyleSheet, Dimensions } from "react-native";

import { scale } from "react-native-size-matters";
import { black, white } from "src/constants/colors";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    borderBottomColor: '#DDDEDF',
    borderBottomWidth: 1,
    backgroundColor: white,
  },
  textTitle: {
    paddingLeft: scale(10),
    color: black,
    fontSize: scale(16),
    fontWeight: '500',
  },
  leftPart: {
    backgroundColor: '#E6E7E8',
    width: scale(70),
    height: scale(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightPart: {
    width: scale(70),
    height: scale(70),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6E7E8',
  },
  content: {
    height: scale(70),
    width: width - scale(70),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: white,
  },
  contentEditMode: {
    width,
    flexDirection: 'row',
    borderBottomColor: '#DDDEDF',
    borderBottomWidth: 1,
    height: scale(70),
    alignItems: 'center',
  },
  buttonRemove: {
    paddingLeft: scale(10),
  },
  rowBack: {
    height: scale(70),
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})