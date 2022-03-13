import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";

import {
  MAIN_COLOR_1,
  SUB_COLOR_1,
  SUB_COLOR_2,
  SUB_COLOR_4,
  WHITE,
} from "../constants/styles";
import { DRUGINFO_TITLE } from "../constants/texts";
import { searchDrug } from "../utils/search";
import NavigationFooter from "./NavigatorFooter";
const drugData = require("../data/drugInfo.json");
const win = Dimensions.get("window");

const DrugInfoScreen = ({ navigation }) => {
  const searchDrugInfo = useSelector(state => state.drug.drugInfo);
  const [identifiedDrug, setIdentifiedDrug] = useState(null);
  const [drugList, setDrugList] = useState(null);

  useEffect(() => {
    const filteredDrugList = searchDrug(searchDrugInfo);

    setIdentifiedDrug(filteredDrugList);
  }, [searchDrugInfo]);

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
            collectedDrug.elderCaution = false;
            collectedDrug.pregnancyCaution = false;
            collectedDrug.babyCaution = false;

            if (
              collectedDrug["이 약의 사용상 주의사항은 무엇입니까?"].includes(
                "노인",
              ) ||
              collectedDrug["이 약의 사용상 주의사항은 무엇입니까?"].includes(
                "고령자",
              )
            ) {
              collectedDrug.elderCaution = true;
            }

            if (
              collectedDrug["이 약의 사용상 주의사항은 무엇입니까?"].includes(
                "임부",
              )
            ) {
              collectedDrug.pregnancyCaution = true;
            }

            if (
              collectedDrug["이 약의 사용상 주의사항은 무엇입니까?"].includes(
                "2세미만",
              )
            ) {
              collectedDrug.babyCaution = 2;
            } else if (
              collectedDrug["이 약의 사용상 주의사항은 무엇입니까?"].includes(
                "7세미만",
              )
            ) {
              collectedDrug.babyCaution = 7;
            } else if (
              collectedDrug["이 약의 사용상 주의사항은 무엇입니까?"].includes(
                "15세미만",
              )
            ) {
              collectedDrug.babyCaution = 15;
            }

            finalData.push(collectedDrug);
          }
        }
      }

      setDrugList(finalData);
    }
  }, [identifiedDrug]);

  if (drugList === null)
    return (
      <ScrollView style={styles.container}>
        <View style={styles.sub}>
          <Text style={styles.subText}>검색결과를</Text>
          <Text style={styles.subText}>불러오는 중입니다</Text>
        </View>
      </ScrollView>
    );

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{DRUGINFO_TITLE}</Text>
        {drugList.length ? (
          <View>
            {drugList.map(drug => (
              <View key={drug.품목일련번호} style={styles.elevation}>
                <View style={styles.category}>
                  <Text style={styles.categoryTitle}>{drug.제품명}</Text>
                </View>
                <View style={styles.cautionView}>
                  {drug.pregnancyCaution && (
                    <Text style={styles.caution}>임산부</Text>
                  )}
                  {drug.elderCaution && (
                    <Text style={styles.caution}>고령자</Text>
                  )}
                  {drug.babyCaution && (
                    <Text style={styles.caution}>{drug.babyCaution}세이하</Text>
                  )}
                  {(drug.babyCaution ||
                    drug.pregnancyCaution ||
                    drug.elderCaution) && (
                    <Text style={styles.caution}>주의!</Text>
                  )}
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
                <View style={[styles.category, { marginBottom: 20 }]}>
                  <Text style={styles.categoryTitle}>보관방법</Text>
                  <Text style={styles.categoryContent}>
                    {drug["이 약은 어떻게 보관해야 합니까?"]}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.sub}>
            <Text style={styles.subText}>검색내용에</Text>
            <Text style={styles.subText}>해당하는 약이</Text>
            <Text style={styles.subText}>없습니다</Text>
          </View>
        )}
        {/* <View style={styles.buttonContainer}>
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
          <Text style={styles.buttonTitle}>알람 맞추기</Text>
        </TouchableOpacity>
      </View> */}
      </ScrollView>
      <NavigationFooter navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLOR_1,
  },
  title: {
    marginVertical: 10,
    color: SUB_COLOR_2,
    fontFamily: "Dongle-Bold",
    fontSize: 50,
    textAlign: "center",
  },
  elevation: {
    width: "90%",
    marginHorizontal: "5%",
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: WHITE,
  },
  category: {
    flex: 1,
    width: "100%",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    width: "90%",
    textAlign: "left",
    fontFamily: "Dongle-Bold",
    fontSize: 40,
    color: SUB_COLOR_2,
  },
  cautionView: {
    width: "95%",
    flexDirection: "row-reverse",
  },
  caution: {
    marginRight: 5,
    fontFamily: "Dongle-Bold",
    fontSize: 30,
    color: SUB_COLOR_4,
  },
  categoryContent: {
    width: "90%",
    fontFamily: "Dongle-Bold",
    fontSize: 25,
    color: SUB_COLOR_1,
  },
  drugImage: {
    width: win.width * 0.8,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    height: 60,
    marginBottom: 20,
    marginHorizontal: "10%",
    backgroundColor: SUB_COLOR_4,
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontFamily: "Dongle-Bold",
    fontSize: 35,
    color: WHITE,
  },
  sub: {
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  subText: {
    fontSize: 80,
    fontFamily: "Dongle-Bold",
    color: SUB_COLOR_4,
  },
});

export default DrugInfoScreen;
