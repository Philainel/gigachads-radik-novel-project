import {configureStore} from "@reduxjs/toolkit"
import step from "./step.ts";
import screen from "./screen.ts";
import layout from "./layout.ts";
import script from "./script.ts";
import characters from "./characters.ts";
import background from "./background.ts";
import state from "./state.ts";
import ifState from "./ifState.ts";

const store = configureStore({
	reducer: {
		step, screen, layout, script, characters, background, state, ifState
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store