import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo } from "react-native-vector-icons";

export default function Screen2() {
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
        <View style={{ flexDirection: "row" }}>
          <Entypo
            name="camera"
            style={[styles.customIcon, { color: "#000" }]}
          />
          <Text style={[styles.text, { textAlign: "center" }]}>
            Thêm hình ảnh
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 16,
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
  btnAddPicture: {},
});
