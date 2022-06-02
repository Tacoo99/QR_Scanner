import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import { colors, images } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome';

const Account = ( { navigation, route }) => {
    
    if( (route.params.login) == "Anonim"){
        return (
            <View style={{
                flex:1,
                alignItems: 'center',
                top: '5%'
            }}>
                <Image
          source={images.qr_code}
          resizeMode="contain"
          style={{
            width: 350,
            height: 150,
            marginBottom: '10%'
          }}
        />
        <Text style={{
            fontSize: 25,
        }}>
        Nie jesteś zalogowany!
        </Text>
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.primary,
                borderRadius: 40,
                width: 250,
                top: 30,
                alignItems: 'center',
                height: 50,
            }}

            onPress={() => navigation.replace("SignIn")}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 25,
                        backgroundColor: null
                    }}
                >
                    <Icon name="sign-out" size={32} marginRight={20} color={'white'} /> Zaloguj się
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.primary,
                borderRadius: 40,
                width: 250,
                top: 50,
                alignItems: 'center',
                height: 50,
            }}

            onPress={() => navigation.replace("SignUp")}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 25,
                        backgroundColor: null
                    }}
                >
                    <Icon name="file" size={32} marginRight={20} color={'white'} /> Załóż konto
                </Text>

            </TouchableOpacity>
        </View>
        )
    }

    else{
    return (
        <View
            style={{
                flex: 1,
                paddingVertical: 16,
                backgroundColor: 'white'
            }}
        >
            <View
                style={{
                    flex: 2,
                    alignItems: 'center',
                    marginTop: 70
                }}
            >
                <Image
                source={images.profile}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 60
                }}

            />

            <View
                style={{
                    flex: 0,
                    flexDirection: 'row',
                    marginTop: 40,
                   
                }}
            >
                <View
                    style={{
                        marginRight: 10
                    }}
                >
                <Icon name="user" size={32} marginTop={20} color={colors.primary} />
                </View>

                <Text style={{fontSize: 28}}>
                    {route.params.login}
                </Text>
            </View>

            <View
                style={{
                    flex: 0,
                    flexDirection: 'row',
                    marginTop: 40,
                   
                }}
            >
                <View
                    style={{
                        marginRight: 10
                    }}
                >
                <Icon name="envelope" size={32} marginTop={20} color={colors.primary} />
                </View>

                <Text style={{fontSize: 28}}>
                    {route.params.login}
                </Text>
            </View>

            <View
                style={{
                    flex: 2,
                    marginTop: 40,
                    
                   
                }}
            >

                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.primary,
                borderRadius: 40,
                width: 250,
                top: 30,
                alignItems: 'center',
                height: 50,
            }}

            onPress={() => navigation.navigate("Welcome")}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 25,
                        backgroundColor: null
                    }}
                >
                    <Icon name="sign-out" size={32} marginRight={20} color={'white'} /> Wyloguj się
                </Text>

            </TouchableOpacity>
                </View>

            </View>

            </View>
        </View>
    )
}
}

export default Account;