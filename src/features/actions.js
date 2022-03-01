import { SEARCH_DRUG_INFO } from "./types";

export function searchDrugInfo(drugInfo) {
  return { type: SEARCH_DRUG_INFO, payload: drugInfo };
}
