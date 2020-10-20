import {createStackNavigator} from "react-navigation-stack";
import ShavingMenScreen from "../Screens/ShavingMenScreen";
import MainSamplePackageScreen from "../Screens/MainSamplePackageScreen";

/**
 * Dette er main stack navigator, som sikre at man tilgå prøvepakkerne fra barbering mænd view.
 */

/*Her har vi stack navigationen*/
const SettingStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        Men: { screen: ShavingMenScreen },
        Sample: {screen: MainSamplePackageScreen}
    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'Men',
        navigationOptions:{
            title:'Barbering mænd'
        }
    }
);
/*Skyd mig det afsted så App.js kan bruge componenet*/
export default SettingStack