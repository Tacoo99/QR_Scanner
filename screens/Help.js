import * as React from 'react';
import { View, Text } from 'react-native'
import { List } from 'react-native-paper';
import { colors, images } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome';

const Help = () => {

    return (
        <View style={{
            flex: 1
        }}>
            <List.Section title="FAQ">
                <List.Accordion
                    title="Jak zeskanować kod QR?"
                    left={props => <Icon name="camera" size={25} color={colors.primary} />}>
                    <List.Item title="Tutaj coś" />
                </List.Accordion>

                <List.Accordion
                    title="Jak wygenerować kod QR?"
                    left={props => <Icon name="qrcode" size={25} color={colors.primary} />}>
                    <List.Item title="Tutaj coś" />
                </List.Accordion>

                <List.Accordion
                    title="Jak założyć konto?"
                    left={props => <Icon name="user-plus" size={25} color={colors.primary} />}>
                    <List.Item title="Tutaj coś" />
                </List.Accordion>
            </List.Section>

            <View style={{
                top: 40,
                alignItems: 'center'
            }}
            >
                <Text style={{
                    fontSize: 25,
                    marginBottom: 10
                }}>
                    Masz jakieś pytania?
                </Text>

                <View style={{
                    flexDirection: 'row'
                }}
                >
                    <Icon name="phone" size={30} color={colors.primary}></Icon>
                    <Text style={{
                        fontSize: 22,
                        marginLeft: 10
                    }}>
                        789543212
                    </Text>
                </View>

                <View style={{
                    marginTop: 7,
                    flexDirection: 'row'
                }}
                >
                    <Icon name="envelope" size={25} color={colors.primary}></Icon>
                    <Text style={{
                        fontSize: 22,
                        marginLeft: 10
                    }}>
                        qrskaner@pomoc.pl
                    </Text>
                </View>
                
            </View>
        </View>
    );
};

export default Help;