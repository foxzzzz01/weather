import { createSlice } from "@reduxjs/toolkit";
import { getWeatherData } from "./getWeatherApi";


const getWeatherSlice = createSlice({
    name: 'weater',
    initialState: {
        data: null
    },
    reducers: {
        getWeather: (state, action) => {
            state.data = action.payload;
        }
    }
})


export const getWeaterInfo = (city) => async (dispatch) => {
    try {
        const data = await getWeatherData(city)
        dispatch(getWeather(data))
    } catch (error) {
        console.error(error);
    }
}

export const { getWeather } = getWeatherSlice.actions;
export default getWeatherSlice.reducer;