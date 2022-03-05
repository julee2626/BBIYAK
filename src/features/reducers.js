import { SEARCH_DRUG_INFO } from "./types";

const initialState = {
  drugInfo: {
    identificationLetter: null,
    formulation: "",
    shape: "",
    color: "",
    name: null,
  },
};

export default function drugReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_DRUG_INFO: {
      const searchDrugInfoStateCopy = Object.assign({}, state);

      searchDrugInfoStateCopy.drugInfo = action.payload;

      return searchDrugInfoStateCopy;
    }
    default:
      return Object.assign({}, state);
  }
}
