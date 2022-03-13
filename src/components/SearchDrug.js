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
import {
  SEARCHDRUG_PLACEHOLDER_LETTER,
  SEARCHDRUG_PLACEHOLDER_NAME,
  SEARCHDRUG_TITLE,
} from "../constants/texts";
import { formulationData, shapeData, colorData } from "../data/searchData";
import { searchDrugInfo } from "../features";
import NavigationFooter from "./NavigatorFooter";

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
        <Text style={styles.title}>{SEARCHDRUG_TITLE}</Text>
        <View style={styles.elevation}>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>식별문자</Text>
            <TextInput
              style={styles.textInput}
              placeholder={SEARCHDRUG_PLACEHOLDER_LETTER}
              onChangeText={text => setIdentificationLetter(text)}
              underlineColorAndroid={SUB_COLOR_1}
              placeholderTextColor={SUB_COLOR_1}
            />
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>제품명</Text>
            <TextInput
              style={styles.textInput}
              placeholder={SEARCHDRUG_PLACEHOLDER_NAME}
              onChangeText={text => setName(text)}
              underlineColorAndroid={SUB_COLOR_1}
              placeholderTextColor={SUB_COLOR_1}
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
          <View style={styles.category}>
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
          <View style={styles.category}>
            <TouchableOpacity
              style={styles.button}
              onPress={handlePressGetSearchInfo}
              testID={"Search.Button"}>
              <Text style={styles.buttonTitle}>검색</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <NavigationFooter navigation={navigation} onScreen="SearchDrug" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "93%",
    alignItems: "center",
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
    flex: 5,
    width: "90%",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: WHITE,
    marginBottom: "3%",
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
    height: "50%",
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
