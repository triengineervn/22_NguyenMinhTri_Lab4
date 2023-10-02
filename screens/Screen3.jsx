import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  CheckBox,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const generateRandomPassword = (length, lower, upcase, number, special) => {
  const charset = [];

  if (lower) {
    charset.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (upcase) {
    charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (number) {
    charset.push("0123456789");
  }
  if (special) {
    charset.push("!@#$%^&*()_+");
  }
  const charsetString = charset.join("");
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsetString.length);
    password += charsetString[randomIndex];
  }
  return password;
};

export default function Screen3() {
  const [password, setPassword] = useState("Password");
  const [passwordLength, setPasswordLength] = useState("");
  const [cbLowercaseLetter, setCbLowercaseLetter] = useState("");
  const [cbUpcaseLetter, setCbUpcaseLetter] = useState("");
  const [cbNumber, setCbNumber] = useState("");
  const [cbSpecialSymbol, setCbSpecialSymbol] = useState("");

  const handleGeneratePassword = () => {
    const newPassword = generateRandomPassword(
      passwordLength,
      cbLowercaseLetter,
      cbUpcaseLetter,
      cbNumber,
      cbSpecialSymbol
    ); // Change the length as needed
    setPassword(newPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.primaryContainer}>
        <Text style={styles.title}>
          password
          <br />
          generator
        </Text>
        <Text style={styles.textPasswordGenerated}>{password}</Text>
        <View style={styles.rowOptions}>
          <Text style={styles.text}>Password length</Text>
          <TextInput
            value={passwordLength}
            onChangeText={setPasswordLength}
            style={{
              width: 120,
              backgroundColor: "#fff",
              paddingVertical: 8,
              textAlign: "center",
              fontSize: 18,
              fontWeight: "600",
            }}
          ></TextInput>
        </View>
        <View style={styles.rowOptions}>
          <Text style={styles.text}>Include lower case letters</Text>
          <CheckBox
            value={cbLowercaseLetter}
            onValueChange={setCbLowercaseLetter}
            style={styles.checkbox}
          ></CheckBox>
        </View>
        <View style={styles.rowOptions}>
          <Text style={styles.text}>Include upcase letters</Text>
          <CheckBox
            value={cbUpcaseLetter}
            onValueChange={setCbUpcaseLetter}
            style={styles.checkbox}
          ></CheckBox>
        </View>
        <View style={styles.rowOptions}>
          <Text style={styles.text}>Include number</Text>
          <CheckBox
            value={cbNumber}
            onValueChange={setCbNumber}
            style={styles.checkbox}
          ></CheckBox>
        </View>
        <View style={styles.rowOptions}>
          <Text style={styles.text}>Include special symbol</Text>
          <CheckBox
            value={cbSpecialSymbol}
            onValueChange={setCbSpecialSymbol}
            style={styles.checkbox}
          ></CheckBox>
        </View>
        <TouchableOpacity
          style={styles.btnGenerate}
          onPress={handleGeneratePassword}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            GENERATE PASSWORD
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#3B3B98",
    alignItems: "center",
  },
  primaryContainer: {
    width: "95%",
    height: "95%",
    borderRadius: 15,
    shadowRadius: 5,
    backgroundColor: "#23235B",
    margin: 15,
  },
  title: {
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: 700,
    marginTop: 40,
  },
  textPasswordGenerated: {
    height: "auto",
    color: "#fff",
    backgroundColor: "#000",
    borderRadius: 5,
    marginTop: 33,
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: 700,
    borderWidth: 1,
    marginHorizontal: 25,
    textAlign: "center",
  },
  rowOptions: {
    marginTop: 28,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
  },
  checkbox: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  btnGenerate: {
    width: "80%",
    backgroundColor: "#3B3B98",
    padding: 15,
    marginTop: 45,
    borderRadius: 5,
    alignSelf: "center",
  },
});
