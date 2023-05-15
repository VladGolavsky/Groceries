import React from 'react';
import { View, Text, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';


const SwipeableRow = () => {
  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={{ backgroundColor: 'green', height: 50 }}>
        <Text
          style={[
            {
              // transform: [{ translateX: trans }],
            },
          ]}>
          Archive
        </Text>
      </RectButton>
    );
  };

  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={{ backgroundColor: 'blue', height: 50 }}>
        <Text
          style={[
            {
              // transform: [{ translateX: trans }],
            },
          ]}>
          Test
        </Text>
      </RectButton>
    );
  };

  return (
    <Swipeable renderLeftActions={renderLeftActions} renderRightActions={renderRightActions} overshootFriction={8}>
      <View style={{ backgroundColor: 'red', height: 50 }}>
        <Text>"hello"</Text>
      </View>
    </Swipeable>
  );
};

export default SwipeableRow;
