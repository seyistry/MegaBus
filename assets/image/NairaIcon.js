import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { white } from "../../utils/color";

function NairaIcon(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M16.027 11.288v.5h3.23c.03 0 .082.014.138.083.058.07.105.183.105.324v0a.516.516 0 01-.105.325c-.056.069-.107.083-.138.083h-3.23v5.258c0 .903-.171 1.288-.311 1.45-.119.137-.282.19-.566.19-.194 0-.35-.034-.468-.086h0a1.126 1.126 0 01-.369-.281h0a3.76 3.76 0 01-.464-.64 62.514 62.514 0 01-.529-.92l-2.512-4.707-.14-.264H5.22v5.578c0 .599-.108.938-.23 1.101-.124.168-.236.218-.407.218a.5.5 0 01-.234-.046.495.495 0 01-.174-.163h0c-.124-.173-.23-.518-.23-1.11v-5.578H.744c-.031 0-.083-.014-.139-.082a.515.515 0 01-.104-.325c0-.142.047-.255.104-.325.056-.068.108-.082.139-.082h3.203V7.583H.743c-.031 0-.083-.013-.139-.082A.516.516 0 01.5 7.176c0-.142.047-.255.104-.325.056-.068.108-.082.138-.082 0 0 0 0 0 0h3.203V2.448c0-.576.05-.975.122-1.203.08-.225.203-.398.385-.542h0A.818.818 0 014.983.5a.73.73 0 01.351.069c.109.06.202.14.288.247h0c.116.145.249.353.393.628h0c.17.322.346.659.532 1.018h0l.004.008 2.184 4.036.142.262h5.933V1.822c0-.622.104-.97.217-1.131h0a.436.436 0 01.156-.147.469.469 0 01.22-.043c.207 0 .31.06.406.195h0c.114.16.22.506.22 1.126v4.947h3.23c.03 0 .082.014.138.082.056.07.104.183.104.325a.515.515 0 01-.104.325c-.056.068-.108.082-.139.082h-3.23v3.705zM3.446 18.181c0 .63.108 1.101.323 1.401l-.323-6.48v5.079zM14.809 8.083v-.5H9.316l.4.738 1.734 3.205.141.262h3.218V8.083zM6.161 4.165l-.94.235V6.77h2.331l-.393-.736-.998-1.868zm-.94 7.123v.5H10.231l-.393-.735-1.711-3.205-.141-.265H5.22v3.705zM13.868 16l.94-.238v-3.16h-2.777l.4.739L13.868 16z"
                fill={props.color ? props.color : white}
                stroke={props.color ? props.color : white}
            />
        </Svg>
    );
}

export default NairaIcon;