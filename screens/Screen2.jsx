import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "react-native-vector-icons";

export default function Screen2() {
  const [textReview, setTextReview] = useState("");
  const handleSend = () => {
    console.log(textReview);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listProducts}>
        <Image
          source={require("../assets/usb.png")}
          style={styles.imgProduct}
        ></Image>
        <Text style={styles.text}>
          USB Bluetooth Music Receiver <br /> HJX-001 - Biến loa thường thành
          loa bluetooth
        </Text>
      </View>
      <View style={styles.review}>
        <Text style={[styles.text, { marginTop: 40 }]}>Cực kỳ hài lòng</Text>
        <View style={styles.listStars}>
          <Entypo name="star" style={styles.customIcon}></Entypo>
          <Entypo name="star" style={styles.customIcon}></Entypo>
          <Entypo name="star" style={styles.customIcon}></Entypo>
          <Entypo name="star" style={styles.customIcon}></Entypo>
          <Entypo name="star" style={styles.customIcon}></Entypo>
        </View>
      </View>
      <TouchableOpacity style={styles.btnAddPicture}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo
            name="camera"
            style={[styles.customIcon, { color: "#000" }]}
          />
          <Text style={[styles.text, { marginStart: 10 }]}>Thêm hình ảnh</Text>
        </View>
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        multiline
        placeholderTextColor={"#C4C4C4"}
        placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
        onChangeText={setTextReview}
      ></TextInput>
      <TouchableOpacity style={styles.btnSend} onPress={handleSend}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Gửi
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 15,
  },
  listProducts: {
    flexDirection: "row",
  },
  imgProduct: {
    width: 70,
    height: 70,
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight: 700,
  },
  review: {
    alignItems: "center",
  },
  listStars: {
    flexDirection: "row",
  },
  customIcon: {
    color: "#F2DD1B",
    fontSize: 40,
    margin: 5,
  },
  btnAddPicture: {
    marginTop: 20,
    width: "80%",
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1511EB",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    height: "40%",
    borderRadius: 5,
    marginTop: 20,
    padding: 11,
    fontSize: 18,
    fontWeight: 700,
    borderWidth: 1,
  },
  btnSend: {
    width: "80%",
    backgroundColor: "#0D5DB6",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 25,
    borderRadius: 5,
  },
});
