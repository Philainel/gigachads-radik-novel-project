import {configureStore} from "@reduxjs/toolkit"
import step from "./step.ts";
import screen from "./screen.ts";
import layout from "./layout.ts";
import script from "./script.ts";
import characters from "./characters.ts";
import background from "./background.ts";
import state from "./state.ts";
import ifState from "./ifState.ts";
import layoutGroup from "./layoutGroup.ts";
import flags from "./flags.ts";
import overlay from "./overlay.ts";

const store = configureStore({
	reducer: {
		step, screen, layout, script, characters, background, state, ifState, layoutGroup, flags, overlay
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store