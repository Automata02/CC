import React, { useState } from "react";
import { View, StyleSheet, StatusBar, Image, Dimensions, Text, ScrollView, TouchableOpacity } from "react-native";
import colors from '../constants/colors';
import { ConversionInput } from "../components/ConversionInput";
import { format } from 'date-fns';
import { Button } from "../components/button";
import { KeyboardSpacer } from "../components/keyboardSpacer";
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1
    },
    content: {
        paddingTop: screen.height * 0.1
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    logoBackground: {
        width: screen.width * 0.45,
        height: screen.width * 0.45
    },
    logo: {
        position: "absolute",
        width: screen.width * 0.25,
        height: screen.width * 0.25
    },
    text: {
        color: colors.white,
        fontSize: 13,
        textAlign: "center"

    },
    textHeader: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 30,
        marginVertical: 20,
        textAlign: "center"
    },
    header: {
        alignItems: 'flex-end',
        marginHorizontal: 20
    }
});

export default ({ navigation }) => {
    const baseCurrency = 'USD';
    const quoteCurrency = 'GBP';
    const conversionRate = 0.8345;
    const date = new Date();

    const [scrollEnabled, setScrollEnabled] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.header}>
                <TouchableOpacity onPress={() => navigation.push('Options')}>
                    <Entypo name="cog" size={32} color={colors.white} />
                </TouchableOpacity>
            </SafeAreaView>

            <ScrollView scrollEnabled={scrollEnabled}>
                <View style={styles.content}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/images/background.png')} style={styles.logoBackground} resizeMode="contain"/>
                        <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain"/>
                    </View>

                    <Text style={styles.textHeader}>Currency Converter</Text>

                    <ConversionInput
                        text={baseCurrency}
                        value="123"
                        onButtonPress={() => navigation.push('CurrencyList')}
                        onChangeText={text => console.log("text", text)}
                        keyboardType="numeric"
                    />

                    <ConversionInput
                        text={quoteCurrency}
                        value="123"
                        onButtonPress={() => navigation.push('CurrencyList')}
                        editable={false}
                    />

                    <Text style={styles.text}>
                        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(date, 'MMMM do, yyyy')}`}
                    </Text>

                    <Button text="Reverse Currencies" onPress={() => alert('TODO!')} />

                    <KeyboardSpacer onToggle={(keyboardIsVisible) => setScrollEnabled(keyboardIsVisible) }/>
                </View>
            </ScrollView>
        </View>
    )
};