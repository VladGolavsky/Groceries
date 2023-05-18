import {
  all,
  call,
  put,
  select,
  takeLatest,
  take,
} from 'redux-saga/effects';
import io from 'socket.io-client';

import * as actions from 'src/redux/actions';
import { apiUrlSelector, deviceIdSelector } from '../selectors/config';
import { IProduct } from 'src/interfaces/list.interface';
import { EventChannel, eventChannel } from 'redux-saga';
import { Socket } from 'socket.io-client';

type SocketHandler = {
  type: string;
  data: IProduct;
}

const createSocketChannel = (socket: Socket, deviceId: string) => eventChannel((emit) => {
    const handler = ({ type, data } : SocketHandler) => {
      emit({ type, data });
    };
    // socket.on('', handler);
    socket.on('connect', () => {
      console.log('connected');
      handler({ type: 'connected', data: {} })
    })

    socket.on('disconnect', () => {
      console.log('disconnected');
      handler({ type: 'disconnected', data: {} })
    })

    socket.on('error', () => {
      console.log('error');
      handler({ type: 'disconnected', data: {} })
    })

    socket.on(`list-update-${deviceId}`, (data: IProduct) => {
      handler({type: 'list-update', data});
    })

    socket.on(`list-create-${deviceId}`, (data: IProduct) => {
      handler({type: 'list-create', data});
    })

    socket.on(`list-delete-${deviceId}`, (data: IProduct) => {
      handler({type: 'list-delete', data});
    })
    
    return () => {
      socket.off('connect', () => handler({ type: 'connected', data: {} }));
      socket.off('disconnect', () => handler({ type: 'disconnected', data: {} }));
      socket.off('error', () => handler({ type: 'disconnected', data: {} }));
      socket.off(`list-update-${deviceId}`, handler);
      socket.off(`list-create-${deviceId}`, handler);
      socket.off(`list-delete-${deviceId}`, handler);
    };
  });

function* startListeningSaga({ payload } : { payload: { deviceId: string } }): Generator {
  try {
    const deviceId = (yield select(deviceIdSelector)) || payload.deviceId;
    const apiUrl = (yield select(apiUrlSelector)) as string;
    const updatedApiUrl = apiUrl?.replace('https', 'wss');
    console.log('updatedApiUrl', updatedApiUrl)
    const socket: Socket = io(updatedApiUrl);
    // const socket: Socket = io('web-production-baa0.up.railway.app');

    // @ts-ignore
    const socketChannel: any = (yield call(createSocketChannel, {socket, deviceId}));

    while (true) {
      const payload = (yield take(socketChannel)) as SocketHandler;
      switch (payload?.type) {
        case 'list-update':
          yield put(actions.updateProductStatusReduxAction(payload?.data));
          break;
        case 'list-create':
          yield put(actions.addToListReduxAction(payload?.data));
          break;
        case 'list-delete':
          yield put(actions.removeFromListReduxAction({ _id: payload?.data?._id }));
          break;
        case 'connected':
          yield put(actions.setSocketConnectionStatusAction(true));
          break;
        case 'disconnected':
          yield put(actions.setSocketConnectionStatusAction(false));
          break;
        default:
          break;
      }
    }

  } catch (error) {
    
  }
}

export default function* socketSaga() {
  yield all([
    takeLatest(actions.startListeningAction, startListeningSaga),
  ]);
};