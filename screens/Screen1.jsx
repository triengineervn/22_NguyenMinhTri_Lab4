import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Screen1() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    userName: "123",
    userPassword: "pass",
  };

  const handleLogin = () => {
    if (name === data.userName && password === data.userPassword) {
      console.log("Đăng nhập thành công", "Chào mừng bạn!");
    } else {
      console.log("Đăng nhập thất bại", "Vui lòng kiểm tra name và mật khẩu");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 20, width: "100%" }}>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={setName}
          value={name}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        ></TextInput>
        <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          Forgot your password?
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBCB00",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    color: "#000",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 700,
    marginBottom: 60,
  },
  textInput: {
    flex: 1,
    margin: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "#fff",
    fontSize: 16,
    fontWeight: 600,
    backgroundColor: "#fbbf24",
  },
  btnLogin: {
    flex: 1,
    backgroundColor: "#060000",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 15,
    marginTop: 59,
    marginBottom: 45,
  },
});
