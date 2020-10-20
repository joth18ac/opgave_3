import {createStackNavigator} from "react-navigation-stack";
import MainSamplePackageScreen from "../Screens/MainSamplePackageScreen";
import SamplePackageScreen1 from "../Screens/SamplePackageScreen1";
import SamplePackageScreen2 from "../Screens/SamplePackageScreen2";
import SamplePackageScreen3 from "../Screens/SamplePackageScreen3";

/**
 * Dette er prøvepakke navigation, som sikre at man kan tilgå de forskellige prøvepakker.
 */

/*Her har vi stack navigationen*/
const SampleStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        MainSample: { screen: MainSamplePackageScreen},
        Sample1: {screen: SamplePackageScreen1},
        Sample2: {screen: SamplePackageScreen2},
        Sample3: {screen: SamplePackageScreen3},
    },
    {
        /*Hvilket View skal starte*/
        initialRouteName: 'MainSample',
        navigationOptions:{
            title:'Main'
        }
    }
);
/*Skyd det afsted så App.js kan bruge componenet*/
export default SampleStack