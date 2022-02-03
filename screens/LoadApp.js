import React, { useRef, useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Animated } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import Drawers from "../navigation/Drawers";
import { pryColor } from "../utils/color";
import Logo from "../assets/image/Logo";
// import { auth } from "../firebase/firebase.utils";
// import { onAuthStateChanged } from "firebase/auth";
// import { preAuthStacks } from "../navigation/Stacks";

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const setHeight = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
        Animated.spring(setHeight, {
            toValue: 1,
            speed: 9,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,
                transform: [{ scale: setHeight }], // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
};

// const LoadApp = () => {
//     const [routeState, setRouteState] = useState(false);
//     // const [User, setUser] = useState(null);
//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (routeState) {
//                 setRouteState(true);
//                 console.log(`${routeState} A`);
//             } else if (!user && !routeState) {
//                 // setRouteState(false);
//                 console.log(`${routeState} B`);
//             } else {
//                 setRouteState(true);
//                 console.log(`${routeState} C`);
//             }
//             setTimeout(() => {
//                 // if (user) {
//                 //     console.log(user.uid);
//                     <NavigationContainer>
//                         <Drawers />
//                     </NavigationContainer>;
//                 // } else {
//                 //     // <NavigationContainer>
//                 //         <preAuthStacks />

//                 // }
//             }, 1500);
//         });
//     }, [routeState]);

//     return (
//         <View
//             style={{
//                 flex: 1,
//                 backgroundColor: pryColor,
//             }}
//         >
//             <View
//                 style={{
//                     flex: 1,
//                     justifyContent: "center",
//                     alignItems: "center",
//                 }}
//             >
//                 <FadeInView>
//                     <Logo />
//                 </FadeInView>
//             </View>
//         </View>
//     );
// };

const LoadApp = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: pryColor,
            }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <FadeInView>
                    <Logo />
                </FadeInView>
            </View>
        </View>
    );
};

export default LoadApp;
