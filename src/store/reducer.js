// import { combineReducers } from 'redux-immutable';

// export default combineReducers({
//     // 之后开发具体功能模块的时候添加 reducer
// });

import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/Recommend/store/index';

export default combineReducers({
    recommend: recommendReducer,
});