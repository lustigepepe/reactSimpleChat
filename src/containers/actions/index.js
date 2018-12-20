
import { fetchGoolgeFonts, mappedCategoryArray } from './../../mapper';
// import _cloneDeep from 'lodash/cloneDeep';

export default {
    fetchData: (dispatch) => {
        return dispatch => {
            return fetchGoolgeFonts().then((res) => {
                dispatch({
                    type: "FETCHED_FONTS",
                    payload: {
                        fonts: res.fonts,
                        availableCategories: mappedCategoryArray(res.categories),
                        availableFontFamilies: res.fonts["All"]
                    }
                });
            });
        }
    },

    changeFontSize: (dispatch, fontSize) => {
        return dispatch => {
            dispatch({
                type: "FONTSIZE_CHANGED",
                payload: {
                    fontSize: fontSize,
                }
            });
        }
    },
}
