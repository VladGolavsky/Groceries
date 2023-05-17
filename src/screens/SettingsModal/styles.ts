import { StyleSheet, Dimensions } from "react-native";
import { scale } from "react-native-size-matters";

import { white } from "src/constants/colors";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width * 0.85,
    backgroundColor: white,
    borderRadius: scale(5),
    paddingVertical: scale(20),
    paddingHorizontal: scale(10),
  },
  buttonContainer: {
     marginTop: scale(20),
  },
  buttonClose: {
    alignSelf: 'flex-end',
    marginBottom: scale(10),
  },
  placeholder: {
    fontSize: scale(13),
  },
});
