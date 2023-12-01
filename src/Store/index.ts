import {configureStore} from "@reduxjs/toolkit"
import step from "./step.ts";
import screen from "./screen.ts";

const store = configureStore({
	reducer: {
		step, screen
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store