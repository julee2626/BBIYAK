import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useDispatch } from "react-redux";

import { MAIN_COLOR_1, SUB_COLOR_2, WHITE } from "../constants/styles";
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
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>식별문자</Text>
          <TextInput
            style={styles.textInput}
            placeholder="식별문자를 입력해주세요"
            onChangeText={text => setIdentificationLetter(text)}
          />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>제형</Text>
          <SelectDropdown
            data={formulationData}
            defaultButtonText="제형을 선택해주세요"
            onSelect={selectedItem => setFormulation(selectedItem)}
            buttonStyle={styles.select}
          />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>모양</Text>
          <SelectDropdown
            data={shapeData}
            defaultButtonText="모양을 선택해주세요"
            onSelect={selectedItem => setShape(selectedItem)}
            buttonStyle={styles.select}
          />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>색상</Text>
          <SelectDropdown
            data={colorData}
            defaultButtonText="색상을 선택해주세요"
            onSelect={selectedItem => setColor(selectedItem)}
            buttonStyle={styles.select}
          />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>제품명</Text>
          <TextInput
            style={styles.textInput}
            placeholder="제품명을 입력해주세요"
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.category}>
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
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  category: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: MAIN_COLOR_1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    width: "20%",
    marginRight: "8%",
    textAlign: "center",
    fontSize: 18,
    color: SUB_COLOR_2,
  },
  select: {
    width: "60%",
    backgroundColor: MAIN_COLOR_1,
  },
  textInput: {
    width: "60%",
  },
  button: {
    width: "50%",
    height: "40%",
    backgroundColor: SUB_COLOR_2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 20,
    color: WHITE,
  },
});

export default SearchDrugScreen;
