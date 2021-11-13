import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Header from "../../../components/Header";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { pryColor, white } from "../../../utils/color";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import TransactionCard from "../../../components/transactionCard/TransactionCard";

const Pickers = () => {
    const [selectedOptions, setSelectedOptions] = useState();
    return (
        <View style={styles.optionsContainer}>
            <Picker
                selectedValue={selectedOptions}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedOptions(itemValue)
                }
            >
                <Picker.Item
                    label="Filter By"
                    value=""
                    style={styles.pickerItem}
                />
                <Picker.Item
                    label="All"
                    value="all"
                    style={styles.pickerItem}
                />
                <Picker.Item label="Ins" value="in" style={styles.pickerItem} />
                <Picker.Item
                    label="Outs"
                    value="Out"
                    style={styles.pickerItem}
                />
            </Picker>
        </View>
    );
};

const TransactionMainView = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode("date");
    };

    return (
        <ScrollView
            contentContainerStyle={{
                flex: 1,
                backgroundColor: white,
            }}
        >
            <Header name="Transactions" />
            <View
                style={{
                    flexDirection: "row",
                    margin: 20,
                    justifyContent: "space-between",
                }}
            >
                <Pickers />
                <TouchableOpacity
                    style={styles.optionsDateContainer}
                    onPress={showDatepicker}
                >
                    <Text
                        style={{
                            fontFamily: "HeeboR",
                            color: pryColor,
                            marginRight: 20,
                            fontSize: 11,
                        }}
                    >
                        Search by date
                    </Text>
                    <Ionicons
                        name="calendar-outline"
                        size={13}
                        color={pryColor}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <TransactionCard
                    itemDate="29 July, 2021"
                    itemTime="05:45"
                    itemType="debit"
                    itemAmount="400"
                    itemInfo="Trip"
                />
                <TransactionCard
                    itemDate="30 July, 2021"
                    itemTime="07:45"
                    itemType="credit"
                    itemAmount="1000"
                    itemInfo="Fund"
                />
                <TransactionCard
                    itemDate="29 December, 2021"
                    itemTime="05:45"
                    itemType="debit"
                    itemAmount="100"
                    itemInfo="Trip"
                />
                <TransactionCard
                    itemDate="24 July, 2021"
                    itemTime="05:45"
                    itemType="debit"
                    itemAmount="300"
                    itemInfo="Trip"
                />
                <TransactionCard
                    itemDate="29 July, 2021"
                    itemTime="05:45"
                    itemType="debit"
                    itemAmount="100"
                    itemInfo="Trip"
                />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    pickerItem: {
        fontFamily: "HeeboR",
        fontSize: 11,
        color: pryColor,
    },
    optionsContainer: {
        width: 115,
        borderWidth: 1,
        borderColor: "#C2DEEE",
        height: 28,
        borderRadius: 50,
        paddingLeft: 10,
        justifyContent: "center",
    },
    optionsDateContainer: {
        width: 150,
        borderWidth: 1,
        borderColor: "#C2DEEE",
        height: 28,
        borderRadius: 50,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
});

export default TransactionMainView;
