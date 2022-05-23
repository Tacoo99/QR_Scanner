import * as React from 'react';
import { View, Text, ScrollView } from 'react-native'
import { List } from 'react-native-paper';
import { colors } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome';

const Help = () => {

    return (
        <ScrollView style={{
            flex: 1
        }}>
            <List.Section title="FAQ">
                <List.Accordion
                    title="Skanowanie kodów QR" style={{
                        fontSize: 12
                    }}
                    left={() => <Icon name="camera" size={25} color={colors.primary} />}>
                    <List.Item title="Zezwalanie na dostęp do kamery" />
                    <List.Item descriptionNumberOfLines={5} description="Używając ikon na dole aplikacji przejdż do okna 'Skanuj', jeśli nie zezwolono na dostęp 
                    to wystarczy kliknąć na przycisk a potem 'zezwól'"/>

                    <List.Item title="Używanie tylnego aparatu do odczytania kodu QR" />
                    <List.Item descriptionNumberOfLines={5} description="W celu odczytania kod QR wystarczy skierować aparat tylny telefonu na interesujący nas kod, 
                    w tym momenice w polu tekstowym pojawi się tekst"/>
                </List.Accordion>

                <List.Accordion
                    title="Generowanie kodów QR"
                    left={() => <Icon name="qrcode" size={25} color={colors.primary} />}>
                    <List.Item title="Tworzenie kodu QR" />
                    <List.Item descriptionNumberOfLines={5} description="Używając ikon na dole przejdź do okna o nazwie 'Stwórz', 
                    wpisz tekst w pole i kliknij przycisk 'Generuj kod QR' " />
                </List.Accordion>

                <List.Accordion
                    title="Moje konto"
                    left={() => <Icon name="user" size={25} color={colors.primary} />}>
                    <List.Item title="Jak założyć konto?" />
                    <List.Item descriptionNumberOfLines={5} description="Używając ikon na dole przejdź do okna o nazwie 'Konto', 
                    i kliknij przycisk 'Załóż konto' "/>

                    <List.Item title="Jak zalogować się?" />
                    <List.Item descriptionNumberOfLines={5} description="Używając ikon na dole przejdź do okna o nazwie 'Konto', 
                    i kliknij przycisk 'Zaloguj się' "/>
                </List.Accordion>

            </List.Section>

            <View style={{
                //top: 40,
                alignItems: 'center'
            }}
            >
                <Text style={{
                    fontSize: 25,
                    marginBottom: 10,
                    marginTop: 20
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
                        marginLeft: 10,
                        marginBottom: 10
                    }}>
                        qrskaner@pomoc.pl
                    </Text>
                </View>

            </View>
           
        </ScrollView>
        
    );
};

export default Help;