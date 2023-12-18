import React from 'react';
import { SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItems';

export default () => {
    return (
        <SafeAreaView>
            <RowItem
                text="Themes"
                onPress={() => alert("todo!")}
                rightIcon={
                    <Entypo name="chevron-right" size={20} color={colors.blue} />
                }
            />

            <RowSeparator />

            <RowItem
                text="React Native Basics"
                onPress={() => alert("todo!")}
                rightIcon={
                    <Entypo name="export" size={20} color={colors.blue} />
                }
            />

            <RowSeparator />

            <RowItem
                text="React Native by Example"
                onPress={() => alert("todo!")}
                rightIcon={
                    <Entypo name="export" size={20} color={colors.blue} />
                }
            />
        </SafeAreaView>
    );
};