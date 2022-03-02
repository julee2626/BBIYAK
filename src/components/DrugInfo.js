import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { MAIN_COLOR_1, SUB_COLOR_2, WHITE } from "../constants/styles";
const identificationData = require("../data/drugIdentification.json");
const drugData = require("../data/drugInfo.json");
const win = Dimensions.get('window');

const DrugInfoScreen = ({ navigation }) => {
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

  return (drug ?
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>검색 결과</Text>
        <Image style={styles.drugImage}
          source={{
            uri: identifiedDrug.큰제품이미지,
          }} />
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>{drug.업체명}</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>{drug.제품명}</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>효능</Text>
          <Text style={styles.categoryContent}>{drug["이 약의 효능은 무엇입니까?"]}</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>사용법</Text>
          <Text style={styles.categoryContent}>{drug["이 약은 어떻게 사용합니까?"]}</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>주의사항</Text>
          <Text style={styles.categoryContent}>{drug["이 약의 사용상 주의사항은 무엇입니까?"]}</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>보관방법</Text>
          <Text style={styles.categoryContent}>{drug["이 약은 어떻게 보관해야 합니까?"]}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Home");
            }}>
            <Text style={styles.buttonTitle}>홈으로</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Alarm");
            }}>
            <Text style={styles.buttonTitle}>약 알람 맞추기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </> : <Text>찾는 약의 정보가 없습니다</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLOR_1,
  },
  title: {
    marginVertical: 10,
    marginLeft: 20,
    color: SUB_COLOR_2,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "left",
  },
  category: {
    flex: 1,
    width: "100%",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MAIN_COLOR_1,
  },
  categoryTitle: {
    width: "94%",
    marginLeft: "3%",
    textAlign: "left",
    fontSize: 22,
    color: SUB_COLOR_2,
  },
  categoryContent: {
    width: "90%",
    fontSize: 15,
  },
  drugImage: {
    width: win.width * 0.9,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: "5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: SUB_COLOR_2,
  },
  buttonTitle: {
    color: MAIN_COLOR_1,
  },
});

export default DrugInfoScreen;
