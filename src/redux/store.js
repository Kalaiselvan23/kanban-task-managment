import {configureStore} from "@reduxjs/toolkit"
import taskReducer from "./slices/taskSlices";
import tabReducer from "./slices/tabSlice";

const store = configureStore({
    reducer:{
        tasks:taskReducer,
        tab:tabReducer,
    }
})
export default store