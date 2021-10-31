import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MasterCard from "../assets/image/MasterCard";
import VisaCard from "../assets/image/VisaCard";
import CheckOff from "../assets/image/CheckOff";
import CheckOn from "../assets/image/CheckOn";

const CardList = (props) => {
    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <View style={{ flexDirection: "row" }}>
                    <View style={{width: 30}}>
                        {props.card === "master" ? (
                            <MasterCard />
                        ) : (
                            <VisaCard />
                        )}
                    </View>
                    <Text style={{ fontSize: 13, marginLeft: 20 }}>
                        {props.title}
                    </Text>
                </View>
                <TouchableOpacity>
                    {props.on ? <CheckOn /> : <CheckOff />}
                </TouchableOpacity>
            </View>
            <View
                style={{
                    borderWidth: 0.5,
                    borderColor: "#BDBDBD",
                    marginVertical: 10,
                }}
            />
        </View>
    );
};

export default CardList;
