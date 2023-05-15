import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const SwipeableRow = () => {
  const ref = useRef(null);
  const [isLoading, _isLoading] = useState(false);

  const renderRightActions = (progress, dragX) => {
    const opacity = dragX.interpolate({
      inputRange:  [-55, -50, -25, 0],
      outputRange: [1, 0.5, 0.2, 0],
    });

    return (
      <Animated.View style={{
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor: 'gray',
      }}>
        <Icon name='home' size={25} color='black'/>
      </Animated.View>
    );
  };

  const cartBlockRender = () => (
    <View style={{
      width: 75,
      height: 75,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'gray',
    }}>
      <Icon name='shopping-cart' size={25} color='black'/>
    </View>
  );

  const toCart = () => {
    if (ref?.current)
      ref?.current.close();
  };

  const toHome = () => {
    if (ref?.current)
      ref?.current.openRight();
  };

  const changeStatus = () => {
    //...code of changing status
    _isLoading(true);
    setTimeout(() => _isLoading(false), 2500)
  };

  const loadingOverlay = () => isLoading && (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height: 75,
        zIndex: 999,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size='small' color='black'/>
    </View>
  );

  return (
    <>
      {loadingOverlay()}
      <View style={{
        borderBottomWidth: 1,
        borderColor: 'gray',
      }}>
        <Swipeable
          ref={ref}
          onSwipeableOpen={changeStatus}
          onSwipeableClose={changeStatus}
          renderRightActions={renderRightActions}
          overshootFriction={1}
        >
          <View style={{ height: 75, width: width - 75, flexDirection: 'row', alignItems: 'center', }}>
            { cartBlockRender() }
            <Text style={{ fontSize: 24, paddingLeft: 15, }}>
            Pizaa
            </Text>
          </View>
        </Swipeable>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={toCart}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
        style={{ marginTop: 20 }}
      >
        <Text>To cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={toHome}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
        style={{ marginTop: 20 }}
      >
        <Text>To home</Text>
      </TouchableOpacity>
    </>
  );
};

export default SwipeableRow;
