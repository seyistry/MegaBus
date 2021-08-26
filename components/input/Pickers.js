import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

const Pickers = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={styles.inputContainer}>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }
            >
                <Picker.Item
                    label="Gender"
                    value=""
                    style={{ color: "#999", fontSize: 16 }}
                />
                <Picker.Item
                    label="Male"
                    value="male"
                    style={{ fontSize: 16 }}
                />
                <Picker.Item
                    label="Female"
                    value="female"
                    style={{ fontSize: 16 }}
                />
            </Picker>
        </View>
    );
};

export default Pickers;
