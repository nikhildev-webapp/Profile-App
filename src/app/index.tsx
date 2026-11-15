import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.HeadingText}>PROFILE APP</Text>
      <View>
        <Image source={
          require("@/assets/images/User.jpg")
        }
        style={styles.ImageStyle}  
        />
        <View style={{justifyContent: "center", alignItems: "center", marginTop: 20}}>
          <Text style={{fontSize: 18, fontWeight: "bold"}}>Nikhil Kholiya</Text>
          <Text style={{fontSize: 16, fontWeight: "bold", color: "gray"}}>Software Engineer</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  
  },
  HeadingText: {
    fontSize: 20,
    fontWeight: "bold",  
  },
  ImageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
  }
});
