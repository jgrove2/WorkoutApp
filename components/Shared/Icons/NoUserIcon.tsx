import * as React from "react"
import Svg, { Path, Circle, G } from "react-native-svg"
const NoUserIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24 * props.scale}
        height={24 * props.scale}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        scale={20}
        {...props}
    >
        <G scale={props.scale}>
            <Path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
            <Circle cx={12} cy={10} r={3} />
            <Circle cx={12} cy={12} r={10} />
        </G>
    </Svg>
)
export default NoUserIcon;
