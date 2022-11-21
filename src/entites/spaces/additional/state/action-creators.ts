import { createAsyncThunk } from "@reduxjs/toolkit";
import { AdditionalSpacesTypes, additionalSpacesAPI} from "../api";

export const getAdditionalSpaces = createAsyncThunk<AdditionalSpacesTypes.AdditionalSpacesResponse[]>(
    "spaces/additional",
    async (_, thunkAPI) => {
        try {
            const { data } = await additionalSpacesAPI.getAdditionalSpaces();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Data not found");
        }
    }
);