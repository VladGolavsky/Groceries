import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';
import { ConfigSettingsReducer } from '../actions/config/config.interface';

const initialState: ConfigSettingsReducer = {
  showSettingsModal: false,
};

const configModalReducer = createReducer<ConfigSettingsReducer>({
  [actions.setShowSettingsModalAction.getType()]: (state: ConfigSettingsReducer, showSettingsModal: boolean) => ({
    showSettingsModal,
  }),
}, initialState);

export default configModalReducer;
