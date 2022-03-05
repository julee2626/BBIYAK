import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

import { MAIN_COLOR_1, SUB_COLOR_2 } from "../constants/styles";
import { searchDrug } from "../utils/search";
const drugData = require("../data/drugInfo.json");
const win = Dimensions.get("window");

const DrugInfoScreen = ({ navigation }) => {
  const searchDrugInfo = useSelector(state => state.drug.drugInfo);
  const [identifiedDrug, setIdentifiedDrug] = useState(null);
  const [drugList, setDrugList] = useState(null);

  useEffect(() => {
    const filteredDrugList = searchDrug(searchDrugInfo);

    setIdentifiedDrug(filteredDrugList);
  }, []);

  useEffect(() => {
    if (identifiedDrug !== null) {
      let finalData = [];

      if (identifiedDrug.length) {
        for (let i = 0; i < identifiedDrug.length; i++) {
          const [collectedDrug] = drugData.filter(
            data => data.품목일련번호 === identifiedDrug[i].품목일련번호,
          );

          if (collectedDrug) {
            collectedDrug.큰제품이미지 = identifiedDrug[i].큰제품이미지;
            finalData.push(collectedDrug);
          }
        }
      }

      setDrugList(finalData);
    }
  }, [identifiedDrug]);

  if (drugList === null) return <Text>검색 결과를 불러오는 중입니다.</Text>;

  return drugList.length ? (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>검색 결과</Text>
      {drugList.map(drug => (
        <View key={drug.품목일련번호}>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>{drug.제품명}</Text>
          </View>
          <Image
            style={styles.drugImage}
            source={{
              uri: drug.큰제품이미지,
            }}
          />
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>{drug.업체명}</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>효능</Text>
            <Text style={styles.categoryContent}>
              {drug["이 약의 효능은 무엇입니까?"]}
            </Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>사용법</Text>
            <Text style={styles.categoryContent}>
              {drug["이 약은 어떻게 사용합니까?"]}
            </Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>주의사항</Text>
            <Text style={styles.categoryContent}>
              {drug["이 약의 사용상 주의사항은 무엇입니까?"]}
            </Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>보관방법</Text>
            <Text style={styles.categoryContent}>
              {drug["이 약은 어떻게 보관해야 합니까?"]}
            </Text>
          </View>
        </View>
      ))}
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
  ) : (
    <Text>검색내용에 해당하는 약이 없습니다</Text>
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
