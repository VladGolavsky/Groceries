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
import Icon from 'react-native-vector-icons/Ionicons';

import { IProduct } from 'src/interfaces/list.interface';
import styles from './styles';
import { scale } from 'react-native-size-matters';
import { red } from 'src/constants/colors';

const { width } = Dimensions.get('window');

interface ISwipeableRow {
  item: IProduct;
  isEditMode: boolean;
  onDelete: (_id: string) => void;
};

const SwipeableRow = ({ item, isEditMode, onDelete }: ISwipeableRow) => {
  const ref = useRef(null);
  const [isLoading, _isLoading] = useState(false);

  const renderRightActions = (progress: ReturnType<Animated.Value['interpolate']>, dragX: ReturnType<Animated.Value['interpolate']>) => {
    const opacity = dragX.interpolate({
      inputRange:  [-55, -50, -25, 0],
      outputRange: [1, 0.5, 0.2, 0],
    });

    return (
      <Animated.View style={[styles.rightPart, { opacity }]}>
        <Icon name='home-outline' size={25} color='black'/>
      </Animated.View>
    );
  };

  const cartBlockRender = () => (
    <View style={styles.leftPart}>
      <Icon name='cart-outline' size={scale(25)} color='black'/>
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
    // _isLoading(true);
    // setTimeout(() => _isLoading(false), 2500)
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

  if (isEditMode) {
    return (
      <View style={styles.contentEditMode}>
        <TouchableOpacity onPress={() => onDelete(item._id)} style={styles.buttonRemove}>
          <Icon name="remove-circle" size={scale(25)} color={red} />
        </TouchableOpacity>
        <Text style={styles.textTitle}>
          {item?.productDetails?.title}
        </Text>
      </View>
    );
  }

  return (
    <>
      {loadingOverlay()}
      <View style={styles.container}>
        <Swipeable
          ref={ref}
          onSwipeableOpen={changeStatus}
          onSwipeableClose={changeStatus}
          renderRightActions={renderRightActions}
          overshootRight={false}
          overshootFriction={1}
        >
          <View style={styles.content}>
            { cartBlockRender() }
            <Text style={styles.textTitle}>
              {item?.productDetails?.title}
            </Text>
          </View>
        </Swipeable>
      </View>
      {/* <TouchableOpacity
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
      </TouchableOpacity> */}
    </>
  );
};

export default SwipeableRow;
