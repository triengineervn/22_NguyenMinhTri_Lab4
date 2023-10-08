import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { IntlProvider, FormattedNumber } from "react-intl";
import Modal from "react-native-modal";
const vouchers = [
  { id: 1, description: "Voucher: Giảm 15.000 đ" },
  { id: 2, description: "Voucher: Giảm 10.000 đ" },
  { id: 3, description: "Voucher: Giảm 5.000 đ" },
];

export default function Screen4() {
  const price = 141800;
  let [discountAmount, setDiscontAmount] = useState(0);

  const [totalPrice, setTotalPrice] = useState(price);
  const [count, setCount] = useState(1);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getDiscontAmount = () => {
    //callback function
    setDiscontAmount(discountAmount);
  };

  const getTotalPrice = () => {
    setTotalPrice(count * price - discountAmount);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const selectVoucher = (voucher) => {
    setSelectedVoucher(voucher);
  };

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const CurrencyStringToNumber = (index) => {
    const currencyString = `${index}`;
    const number = currencyString.replace("." || ",", "");
    const match = number.match(/\d+/);
    const amount = match ? parseInt(match[0], 10) : null;
    return amount != null ? amount : console.log("null");
  };

  return (
    <View style={[styles.container, { background: "#C4C4C4" }]}>
      <View style={styles.container}>
        <View style={{ margin: 12 }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/book.png")}
              style={styles.img}
            ></Image>
            <View style={{ marginStart: 25, justifyContent: "space-between" }}>
              <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={styles.text}>Cung cấp bởi Tiki Trading</Text>
              <Text
                style={{
                  color: "#EE0D0D",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                141.800 đ
              </Text>
              <Text
                style={[
                  styles.text,
                  { textDecorationLine: "line-through", color: "#808080" },
                ]}
              >
                181.000 đ
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.btnDecrease} onPress={decrement}>
                  -
                </Text>
                <Text style={[styles.text, { marginHorizontal: 11 }]}>
                  {count}
                </Text>
                <Text style={styles.btnIncrease} onPress={increment}>
                  +
                </Text>
                <Text
                  style={[styles.text, { color: "#134FEC", marginLeft: 92 }]}
                >
                  Mua sau
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 21 }}>
            <Text style={styles.text}>Mã giảm giá đã lưu</Text>
            <Text style={[styles.text, { color: "#134FEC", marginLeft: 17 }]}>
              Xem tại đây
            </Text>
          </View>
          <View
            style={{
              marginTop: 35,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={[styles.btnVoucher, { flexDirection: "row" }]}
              onPress={openPopup}
            >
              <View
                style={{
                  alignSelf: "center",
                  width: 32,
                  height: 16,
                  backgroundColor: "#F2DD1B",
                  marginRight: 9,
                }}
              ></View>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[styles.text, { fontSize: 18 }]}
              >
                {selectedVoucher
                  ? `${selectedVoucher.description}`
                  : "Mã giảm giá"}
              </Text>
            </TouchableOpacity>
            <Modal
              visible={isPopupVisible}
              animationType="slide"
              transparent={false}
              onRequestClose={closePopup}
            >
              <View style={styles.popupContainer}>
                <Text style={styles.title}>Danh sách Voucher</Text>
                <FlatList
                  data={vouchers}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.voucherItem}
                      onPress={() => {
                        selectVoucher(item);
                        closePopup();
                      }}
                    >
                      <Text>{item.description}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.id.toString()}
                />
                <TouchableOpacity
                  onPress={closePopup}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeButtonText}>Đóng</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <TouchableOpacity
              style={[styles.btnApplyVoucher, { flexDirection: "row" }]}
              onPress={() => {
                discountAmount = CurrencyStringToNumber(
                  `${selectedVoucher.description}`
                );
                getTotalPrice();
                getDiscontAmount();
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 20,
                    color: "#fff",
                    textAlign: "center",
                    padding: 10,
                  },
                ]}
              >
                Áp dụng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={[styles.container, { marginVertical: 12, paddingVertical: 15 }]}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 12 }}>
          <Text style={styles.text}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <Text
            style={[styles.text, { marginLeft: 12, color: "#134FEC" }]}
            onPress={() => {
              console.log("null");
            }}
          >
            Nhập tại đây?
          </Text>
        </View>
      </View>
      <View style={[styles.container, { paddingVertical: 15 }]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 12,
          }}
        >
          <Text style={[styles.text, { fontSize: 18 }]}>Tạm tính</Text>
          <IntlProvider locale="vi">
            <Text
              style={[
                styles.text,
                { marginLeft: 12, color: "#EE0D0D", fontSize: 18 },
              ]}
            >
              <FormattedNumber
                value={count * price}
                style="currency"
                currency="VND"
              />
            </Text>
          </IntlProvider>
        </View>
        <View style={[styles.container, { paddingVertical: 15 }]}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 12,
            }}
          >
            <Text style={[styles.text, { fontSize: 18, color: "gray" }]}>
              Giảm giá
            </Text>
            <IntlProvider locale="vi">
              <Text
                style={[
                  styles.text,
                  { marginLeft: 12, color: "gray", fontSize: 18 },
                ]}
              >
                -{""}
                <FormattedNumber
                  value={discountAmount}
                  style="currency"
                  currency="VND"
                />
              </Text>
            </IntlProvider>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.container,
          { paddingVertical: 15, flex: 1, justifyContent: "flex-end" },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 12,
          }}
        >
          <Text style={[styles.text, { fontSize: 20, color: "#808080" }]}>
            Thành tiền
          </Text>
          <IntlProvider locale="vi">
            <Text
              style={[
                styles.text,
                { marginLeft: 12, color: "#EE0D0D", fontSize: 18 },
              ]}
            >
              <FormattedNumber
                value={totalPrice}
                style="currency"
                currency="VND"
              />
            </Text>
          </IntlProvider>
        </View>
        <TouchableOpacity style={styles.btnGet} onPress={toggleModal}>
          <Text
            style={[
              styles.text,
              {
                fontSize: 20,
                color: "#fff",
                textAlign: "center",
                padding: 10,
              },
            ]}
          >
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
          <View style={styles.popupContainer}>
            <Text style={[styles.text, { fontSize: 18 }]}>
              Đặt hàng thành công
            </Text>
            <TouchableOpacity style={styles.btnGet} onPress={toggleModal}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 20,
                    color: "#fff",
                    textAlign: "center",
                    padding: 10,
                  },
                ]}
              >
                Đóng
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#ffffff",
  },
  img: {
    width: 104,
    height: 127,
  },
  text: {
    textAlign: "start",
    fontSize: 12,
    fontWeight: 700,
  },
  btnDecrease: {
    textAlign: "center",
    width: 16,
    height: 16,
    backgroundColor: "#808080",
  },
  btnIncrease: {
    textAlign: "center",
    width: 16,
    height: 16,
    backgroundColor: "#808080",
  },
  btnVoucher: {
    borderColor: "#808080",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 2,
    maxWidth: 250,
  },
  btnApplyVoucher: {
    borderRadius: 2,
    backgroundColor: "#0A5EB7",
  },
  btnGet: {
    margin: 12,
    marginTop: 20,
    borderRadius: 2,
    backgroundColor: "#E53935",
  },
  popupContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  voucherItem: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
