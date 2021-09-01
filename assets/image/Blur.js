import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function Blur(props) {
    return (
        <Svg
            width={83}
            height={100}
            viewBox="0 0 83 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle
                r={36}
                transform="matrix(-1 0 0 1 36 64)"
                fill="#fff"
                fillOpacity={0.1}
            />
            <Circle
                r={27.5}
                transform="matrix(-1 0 0 1 55.5 27.5)"
                fill="#fff"
                fillOpacity={0.1}
            />
        </Svg>
    );
}

export default Blur;
