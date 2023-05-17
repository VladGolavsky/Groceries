import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import SwipeRow from 'src/lib/SwipeRow';
import Icon from 'react-native-vector-icons/Ionicons';

import { IProduct } from 'src/interfaces/list.interface';
import styles from './styles';
import { scale } from 'react-native-size-matters';
import { red } from 'src/constants/colors';
import { StatusEnum } from 'src/enums/list.enum';

const { width } = Dimensions.get('window');

interface ISwipeableRow {
  item: IProduct;
  isEditMode: boolean;
  onDelete: (_id: string) => void;
  onUpdateProduct: (_id: string, status: StatusEnum, undoChanges: () => void) => void;
};

const SwipeableRow = ({ item, isEditMode, onDelete, onUpdateProduct }: ISwipeableRow) => {
  const ref = useRef();

  const [isLoading, _isLoading] = useState(false);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    if (item.status === StatusEnum.cart) {
      ref.current?.manuallySwipeRow(85);
    } else {
      ref.current?.closeRow();
    }
  }, [item.status, isError]);

  const changeStatus = (openedValue?: number) => {
    const updatedStatus = openedValue ? StatusEnum.cart : StatusEnum.home;
    if (updatedStatus !== item.status) {
      onUpdateProduct(item._id, item.status, () => setError(!isError));
    }
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
        <SwipeRow ref={ref} leftOpenValue={85} stopLeftSwipe={85} stopRightSwipe={0.1} shoudBeOpened={item?.status === StatusEnum.cart} onRowDidOpen={changeStatus} onRowDidClose={changeStatus}>
            <View style={styles.rowBack}>
              <View style={styles.leftPart}>
                <Icon name='cart-outline' size={scale(25)} color='black'/>
              </View>
              <View style={styles.rightPart}>
                <Icon name='home-outline' size={25} color='black'/>
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.textTitle}>
                {item?.productDetails?.title}
              </Text>
          </View>
        </SwipeRow>
      </View>
    </>
  );
};

export default SwipeableRow;
