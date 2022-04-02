import {combineReducers} from 'redux'
import leftSidebar from './left-sidebar'
import config from './config'
import navigation from './navigation'
import palettes from './palettes'

const rootReducer = combineReducers({
    leftSidebar,
    config,
    navigation,
    palettes
});
export default rootReducer;