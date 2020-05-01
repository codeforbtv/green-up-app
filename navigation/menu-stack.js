// @flow
import { createStackNavigator, createAppContainer } from "react-navigation";
import AboutScreen from "../screens/about-screen";
import MenuScreen from "../screens/menu-screen";
import TownsScreen from "../screens/towns-screen";
import ProfileScreen from "../screens/profile-screen";
import LegalScreen from "../screens/legal-screen";
import FeedbackScreen from "../screens/feedback-screen";

// $FlowFixMe
const MenuStack = createStackNavigator({
    Menu: { screen: MenuScreen },
    About: { screen: AboutScreen },
    Towns: { screen: TownsScreen },
    Profile: { screen: ProfileScreen },
    Legal: { screen: LegalScreen },
    Feedback: { screen: FeedbackScreen }
});

export default createAppContainer<any, any>(MenuStack);

