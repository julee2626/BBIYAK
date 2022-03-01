import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

const identificationData = require("../data/drugIdentification.json");
const drugData = require("../data/drugInfo.json");

const DrugInfo = () => {
  const searchDrugInfo = useSelector(state => state.drug.drugInfo);
  const [identifiedDrug, setIdentifiedDrug] = useState(null);
  const [drug, setDrug] = useState(null);

  useEffect(() => {
    for (let i = 0; i < identificationData.length; i++) {
      if (
        identificationData[i].표시앞 === searchDrugInfo.identificationLetter ||
        identificationData[i].표시뒤 === searchDrugInfo.identificationLetter
      ) {
        setIdentifiedDrug(identificationData[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    if (identifiedDrug) {
      for (let j = 0; j < drugData.length; j++) {
        if (drugData[j].품목일련번호 === identifiedDrug.품목일련번호) {
          setDrug(drugData[j]);
          break;
        }
      }
    }
  }, [identifiedDrug]);

  return <Text>DrugInfo</Text>;
};

export default DrugInfo;
