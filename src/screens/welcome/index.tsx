import React from "react";
// prettier-ignore
import { WelcomeButtonIcon, WelcomeButtonText, WelcomeDescription, WelcomeDontShowText, WelcomeDontShowWrapper, WelcomeImage, WelcomeNextButton, WelcomePadding, WelcomeTitle, WelcomeWrapper,} from "./Welcome.styles";
import wateringImage from "../../../assets/images/watering.png";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Welcome: React.FC = ({}) => {
    const navigation = useNavigation();

    const handleStart = async () => {
        const hasName = await AsyncStorage.getItem("@botant:user");
        if (hasName) {
            navigation.navigate("plantSelection");
        } else {
            navigation.navigate("UserIdentification");
        }
    };

    const handleDontShow = async () => {
        await AsyncStorage.setItem("@botant:hideWelcome", "1");
        handleStart();
    };

    return (
        <WelcomeWrapper>
            <WelcomePadding>
                <WelcomeTitle>
                    Manage {"\n"}
                    your plants {"\n"}
                    in a easy way
                </WelcomeTitle>
                <WelcomeImage source={wateringImage} resizeMode="contain" />
                <WelcomeDescription>
                    Don't forget to water your plants anymore. Let us remember
                    you whenever you need.
                </WelcomeDescription>
                <WelcomeNextButton activeOpacity={0.4} onPress={handleStart}>
                    <WelcomeButtonText>Next</WelcomeButtonText>
                    <WelcomeButtonIcon
                        name="chevron-right"
                        size={25}
                        color="white"
                    />
                </WelcomeNextButton>
                <WelcomeDontShowWrapper>
                    <WelcomeDontShowText onPress={handleDontShow}>
                        Don't show this again
                    </WelcomeDontShowText>
                </WelcomeDontShowWrapper>
            </WelcomePadding>
        </WelcomeWrapper>
    );
};
export default Welcome;
