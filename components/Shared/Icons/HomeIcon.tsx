import * as React from "react"
import Svg, { Path, G } from "react-native-svg"
const HomeIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24 * props.scale}
        height={24 * props.scale}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        {...props}
    >
        <G scale={props.scale}>
            <Path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
            <Path d="M9 22V12h6v10M2 10.6 12 2l10 8.6" />
        </G>
    </Svg>
)
export default HomeIcon