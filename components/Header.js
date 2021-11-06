import React from "react";
import { Text, View } from "react-native";
import { pryColor, white } from "../utils/color";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                height: 120,
                backgroundColor: pryColor,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                width: "100%",
                justifyContent: "center",
            }}
        >
            <View
                style={{
                    marginHorizontal: 20,
                    justifyContent: "center",
                    // marginTop: 40,
                    border: 1,
                }}
            >
                <View style={{ position: "absolute", zIndex:1 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo
                            name="chevron-thin-left"
                            size={24}
                            color={white}
                        />
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        color: white,
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                    }}
                >
                    {props.name}
                </Text>
            </View>
        </View>
    );
};

export default Header;
