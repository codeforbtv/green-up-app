// @flow

import React from "react";
import { StyleSheet, Text, View, ScrollView, Button, Linking } from "react-native";
import { defaultStyles } from "../../styles/default-styles";
import * as constants from "../../styles/constants";

const styles = StyleSheet.create(defaultStyles);

const FeedbackScreen = (): React$Element<any> => (
    <View style={ styles.frame }>
        <ScrollView style={ styles.scroll }>
            <View style={ styles.infoBlockContainer }>
                <Text style={ styles.infoBlockHeader }>Feedback</Text>
            </View>

            <View style={ styles.infoBlock }>
                <Text style={ [styles.textDark, { fontSize: 14 }] }>
                    Thank you so much for using our app!
                </Text>

                <Text style={ [styles.textDark, { fontSize: 14 }] }>
                    More than 56 volunteers have donated their time to provide this app to the 
                    Green Up Vermont non-profit - free of charge! 
                </Text>

                <Text style={ [styles.textDark, { fontSize: 14 }] }>
                    We appreciate your work to keep Vermont green and want to provide you with 
                    the very best mobile experience. Your feedback is greatly appreciated!
                </Text>

                <Button 
                    title="Share Feedback" 
                    onPress={ ()=>{ Linking.openURL('https://forms.gle/sxmGrZYsXzv9p7FU9')}} 
                />
            </View>

            <View style={ defaultStyles.padForIOSKeyboard }/>
        </ScrollView>
    </View>
);

FeedbackScreen.navigationOptions = {
    title: "Your Feedback",
    headerStyle: {
        backgroundColor: constants.colorBackgroundDark
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontFamily: "Rubik-Regular",
        fontWeight: "bold",
        fontSize: 20,
        color: constants.colorHeaderText
    },
    headerBackTitleStyle: {
        fontFamily: "Rubik-Regular",
        fontWeight: "bold",
        fontSize: 20,
        color: constants.colorHeaderText
    }
};


export default FeedbackScreen;
