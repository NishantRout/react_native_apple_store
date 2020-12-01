import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Avatar } from "react-native-elements";

const Shop = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.heading}>
          <Text
            style={{
              color: colors.text,
              fontSize: 35,
              fontWeight: "bold",
              paddingBottom: 12,
            }}
          >
            Shop
          </Text>
          <Avatar
            rounded
            source={{
              uri:
                "https://pbs.twimg.com/profile_images/1018110148315832321/bXV2rxEy_400x400.jpg",
            }}
          />
        </View>
        <View style={styles.iphone12pro}>
          <Text style={{ color: "grey", fontWeight: "600", fontSize: 11 }}>
            NEW
          </Text>
          <Text
            style={{
              color: "#fff",
              fontWeight: "600",
              fontSize: 35,
              marginBottom: 10,
            }}
          >
            iPhone 12 Pro
          </Text>
          <Text
            style={{
              color: "#fff",
              fontWeight: "400",
              fontSize: 16,
              marginBottom: 2,
              lineHeight: 22,
            }}
          >
            5G speed. A14 Bionic. Pro Camera system.{"\n"}Take a look at what
            this iPhone can do.
          </Text>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://www.apple.com/v/iphone-12-pro/c/images/overview/hero/hero_static__k8unjy3rn32a_small_2x.jpg",
            }}
          />
          <View
            style={{
              backgroundColor: "#000",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "400", fontSize: 11 }}>
              From $41.62/mo. 0r $999 before trade-in*
            </Text>
            <View
              style={{
                backgroundColor: "#efeff7",
                paddingLeft: 22,
                paddingRight: 22,
                paddingTop: 7,
                paddingBottom: 7,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: "#3b82f6",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                BUY
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.iphone12}>
          <Text style={{ color: "grey", fontWeight: "600", fontSize: 11 }}>
            NEW
          </Text>
          <Text
            style={{
              color: "#333",
              fontWeight: "600",
              fontSize: 35,
              marginBottom: 10,
            }}
          >
            iPhone 12
          </Text>
          <Text
            style={{
              color: "#333",
              fontWeight: "400",
              fontSize: 16,
              lineHeight: 22,
            }}
          >
            5G speed. A14 Bionic. Dual Camera{"\n"}system.Explore the all-new
            iPhone 12 and{"\n"}iPhone 12 mini.
          </Text>
          <Image
            style={styles.image2}
            source={{
              uri:
                "https://www.apple.com/in/iphone-12/images/overview/hero/hero_endframe__fc7apyu3c7au_small.jpg",
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            padding: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#333",
              fontWeight: "400",
              fontSize: 11,
            }}
          >
            From $29.12.62/mo. 0r $699 before trade-in*
          </Text>
          <View
            style={{
              backgroundColor: "#efeff7",
              paddingLeft: 22,
              paddingRight: 22,
              paddingTop: 7,
              paddingBottom: 7,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#3b82f6",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              BUY
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  heading: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#333",
    margin: 20,
    marginTop: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iphone12pro: {
    backgroundColor: "#000",
    padding: 20,
  },
  iphone12: {
    backgroundColor: "#F2F2F2",
    padding: 20,
    paddingTop: 30,
  },
  image: {
    height: 400,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 70,
  },
  image2: {
    height: 400,
    width: 380,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
});
