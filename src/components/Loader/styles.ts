import { StyleSheet } from "react-native";

import { blackWithOpacity } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: blackWithOpacity,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
