import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Swipe(props) {
    return (
        <Svg
            width={77}
            height={77}
            viewBox="0 0 77 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G filter="url(#prefix__filter0_d)">
                <Circle cx={38.5} cy={38.5} r={27.5} fill="#fff" />
            </G>
            <Path
                d="M50.62 37.496l-8.258-7.22a1.11 1.11 0 10-1.462 1.673l6.03 5.273H26.111a1.11 1.11 0 100 2.221h20.817l-6.03 5.273a1.11 1.11 0 101.463 1.674l8.257-7.221a1.107 1.107 0 000-1.673z"
                fill="#000"
            />
            <Defs></Defs>
        </Svg>
    );
}

export default Swipe;
