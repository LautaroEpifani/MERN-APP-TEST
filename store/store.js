import { configureStore  } from "@reduxjs/toolkit";
import resultReducer from "../features/results/resultSlice";

const store = configureStore({
    reducer: {
        results: resultReducer,
    }
})

export default store
