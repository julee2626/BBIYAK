const identificationData = require("../data/drugIdentification.json");

export const searchDrug = searchDrugInfo => {
  let filteredDrugList = null;

  if (
    searchDrugInfo.identificationLetter !== null &&
    searchDrugInfo.identificationLetter !== ""
  ) {
    filteredDrugList = identificationData.filter(
      data =>
        data.표시앞 === searchDrugInfo.identificationLetter ||
        data.표시뒤 === searchDrugInfo.identificationLetter,
    );
  }

  if (searchDrugInfo.name !== null && searchDrugInfo.name !== "") {
    filteredDrugList = (
      filteredDrugList !== null ? filteredDrugList : identificationData
    ).filter(data => data.품목명.includes(searchDrugInfo.name));
  }

  if (searchDrugInfo.color !== "전체" && searchDrugInfo.color !== "") {
    filteredDrugList = (
      filteredDrugList !== null ? filteredDrugList : identificationData
    ).filter(
      data =>
        data.색상앞 === searchDrugInfo.color ||
        data.색상뒤 === searchDrugInfo.color,
    );
  }

  if (searchDrugInfo.shape !== "전체" && searchDrugInfo.shape !== "") {
    filteredDrugList = (
      filteredDrugList !== null ? filteredDrugList : identificationData
    ).filter(data => data.의약품제형 === searchDrugInfo.shape);
  }

  if (
    searchDrugInfo.formulation !== "전체" &&
    searchDrugInfo.formulation !== ""
  ) {
    filteredDrugList = (
      filteredDrugList !== null ? filteredDrugList : identificationData
    ).filter(data => data.성상.includes(searchDrugInfo.formulation));
  }

  return filteredDrugList;
};
