import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

class LoginScreen extends Component {

    //Clears the distinctive line between status bar and header
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../../assets/purple-background-2.jpg')}
                    style={{ flex: 1 }}>

                    {/* Top half */}
                    <View
                        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 50, paddingLeft: 25 }}>
                        <Image style={{ backgroundColor: 'white', height: 120, width: 120 }}
                            source={require('../../assets/transparent-logo.jpg')}
                            resizeMode='contain' />
                    </View>

                    {/* Bottom half */}
                    <View>

                        <View style={{
                            height: 160, //TODO: Make Dynamic
                            backgroundColor: 'white'
                        }}>

                            <View style={{
                                opacity: 1, //TODO: Animate
                                paddingHorizontal: 25,
                                marginTop: 25, //TODO: Animate
                            }}>
                                <Text style={{ fontSize: 22, textAlign: 'center' }}>Get your car moving with</Text>
                                <Text style={{ fontSize: 22, textAlign: 'center' }}>Fuel-On-Call</Text>
                            </View>

                            {/* Enter mobile numnber section */}
                            <TouchableOpacity>
                                <View style={{
                                    marginTop: 25, //TODO: Animate
                                    paddingHorizontal: 25,
                                    flexDirection: 'row'
                                }}>
                                    <Image
                                        source={require('../../assets/south-african-flag.jpg')}
                                        style={{ height: 24, width: 24 }}
                                        resizeMode='contain' />

                                    <View style={{
                                        flexDirection: 'row',
                                        flex: 1
                                    }}>
                                        <Text style={{
                                            fontSize: 20,
                                            paddingHorizontal: 10
                                        }}>+27</Text>

                                        <TextInput
                                            style={{ flex: 1, fontSize: 20 }}
                                            placeholder="Enter your mobile number"
                                            underlineColorAndroid="transparent" />

                                    </View>

                                </View>
                            </TouchableOpacity>

                        </View>
                        {/* Social Media section */}
                        <View style={{
                            height: 70,
                            backgroundColor: 'white',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            borderTopColor: '#d6d6d6',
                            borderTopWidth: 1,
                            paddingHorizontal: 25
                        }}>
                            <Text style={{ color: '#A26FAE', fontWeight: 'bold' }}>
                                Or connect using a social media account
                                </Text>
                        </View>
                    </View>
                </ImageBackground>

            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});