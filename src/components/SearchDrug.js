import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useDispatch } from "react-redux";
import { ERROR_SEARCH_NO_FILTER } from "../constants/messages";

import {
  MAIN_COLOR_1,
  SUB_COLOR_1,
  SUB_COLOR_2,
  SUB_COLOR_4,
  WHITE,
} from "../constants/styles";
import { formulationData, shapeData, colorData } from "../data/searchData";
import { searchDrugInfo } from "../features";

const SearchDrugScreen = ({ navigation }) => {
  const [identificationLetter, setIdentificationLetter] = useState(null);
  const [formulation, setFormulation] = useState("전체");
  const [shape, setShape] = useState("전체");
  const [color, setColor] = useState("전체");
  const [name, setName] = useState(null);
  const dispatch = useDispatch();

  const handlePressGetSearchInfo = () => {
    if (
      (identificationLetter === "" || identificationLetter === null) &&
      (name === "" || name === null) &&
      formulation === "전체" &&
      shape === "전체" &&
      color === "전체"
    ) {
      Alert.alert(ERROR_SEARCH_NO_FILTER);
      return;
    }

    const searchInfo = {
      identificationLetter,
      formulation,
      shape,
      color,
      name,
    };

    dispatch(searchDrugInfo(searchInfo));
    navigation.navigate("DrugInfo");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>식별 정보 입력</Text>
        <View style={styles.elevation}>
          <View style={[styles.category, { marginTop: 20 }]}>
            <Text style={styles.categoryTitle}>식별문자</Text>
            <TextInput
              style={styles.textInput}
              placeholder="식별문자를 입력해주세요"
              onChangeText={text => setIdentificationLetter(text)}
              underlineColorAndroid={SUB_COLOR_1}
            />
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>제품명</Text>
            <TextInput
              style={styles.textInput}
              placeholder="제품명을 입력해주세요"
              onChangeText={text => setName(text)}
              underlineColorAndroid={SUB_COLOR_1}
            />
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>제형</Text>
            <SelectDropdown
              data={formulationData}
              defaultValue="전체"
              onSelect={selectedItem => setFormulation(selectedItem)}
              buttonStyle={styles.select}
              buttonTextStyle={styles.selectText}
              rowTextStyle={styles.selectText}
            />
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>모양</Text>
            <SelectDropdown
              data={shapeData}
              defaultValue="전체"
              onSelect={selectedItem => setShape(selectedItem)}
              buttonStyle={styles.select}
              buttonTextStyle={styles.selectText}
              rowTextStyle={styles.selectText}
            />
          </View>
          <View style={[styles.category, { marginBottom: 20 }]}>
            <Text style={styles.categoryTitle}>색상</Text>
            <SelectDropdown
              data={colorData}
              defaultValue="전체"
              onSelect={selectedItem => setColor(selectedItem)}
              buttonStyle={styles.select}
              buttonTextStyle={styles.selectText}
              rowTextStyle={styles.selectText}
            />
          </View>
        </View>
        <View style={[styles.category, { marginVertical: 10 }]}>
          <TouchableOpacity
            style={styles.button}
            onPress={handlePressGetSearchInfo}>
            <Text style={styles.buttonTitle}>검색</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: MAIN_COLOR_1,
  },
  title: {
    marginVertical: 20,
    color: SUB_COLOR_2,
    fontFamily: "Dongle-Bold",
    fontSize: 50,
    textAlign: "center",
  },
  elevation: {
    flex: 5,
    width: "90%",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: WHITE,
  },
  category: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    width: "20%",
    marginRight: "8%",
    textAlign: "center",
    fontFamily: "Dongle-Bold",
    fontSize: 30,
    color: SUB_COLOR_2,
  },
  select: {
    width: "60%",
    backgroundColor: WHITE,
  },
  selectText: {
    fontFamily: "Dongle-Regular",
    fontSize: 30,
    color: SUB_COLOR_1,
  },
  textInput: {
    width: "60%",
    fontFamily: "Dongle-Regular",
    color: SUB_COLOR_1,
    fontSize: 30,
  },
  button: {
    width: "30%",
    height: "80%",
    backgroundColor: SUB_COLOR_4,
    borderRadius: 10,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontFamily: "Dongle-Bold",
    fontSize: 40,
    color: WHITE,
  },
});

export default SearchDrugScreen;
