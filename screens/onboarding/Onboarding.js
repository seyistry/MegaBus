import React, { useRef, useEffect } from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";
import OnboardPage from "../../components/OnboardPage";
import OnBScreenOneBg from "../../assets/image/OnBScreenOneBg.png";
import OnBScreenTwoBg from "../../assets/image/OnBScreenTwoBg.png";
import OnBScreenThreeBg from "../../assets/image/OnBScreenThreeBg.png";
import Home from "../LoginSignUp";

const Onboarding = ({ navigation }) => {
    useEffect(
        () =>
            navigation.addListener("beforeRemove", (e) => {
                // Prevent default behavior of leaving the screen
                e.preventDefault();

                return navigation.navigate("Onboarding");
            }),
        [navigation]
    );
    
    const pagerRef = useRef(null);

    return (
        <View style={{ flex: 1 }}>
            <PagerView
                style={{ flex: 1 }}
                initialPage={0}
                ref={pagerRef}
                showPageIndicator={true}
            >
                <View key="1">
                    <OnboardPage
                        bg={OnBScreenOneBg}
                        backgroundColor="#ffc93c"
                        title="Cashless transit payment with ease on your phone"
                        dotOne={true}
                    />
                </View>
                <View key="2">
                    <OnboardPage
                        bg={OnBScreenTwoBg}
                        backgroundColor="#07689f"
                        title="Enjoy seamless transportation with over 800 buses available"
                        dotTwo={true}
                    />
                </View>
                <View key="3">
                    <OnboardPage
                        bg={OnBScreenThreeBg}
                        backgroundColor="#07689f"
                        title="Proximity Bus Station where you can easily hop in and alight"
                        dotThree={true}
                    />
                </View>
                <Home />
            </PagerView>
        </View>
    );
};

export default Onboarding;
