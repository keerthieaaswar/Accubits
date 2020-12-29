import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Alert,
    TouchableWithoutFeedback,
} from 'react-native';

export default class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            isLoading: false
        }
    }

    loginFunction = () => {
        if (this.state.isLoading) return;
        this.setState({ isLoading: true });
        const { username, password } = this.state;
        if (username != '' && password != '') {
            if (password.length > 8) {
                if (username === 'testuser' && password === 'testpassword') {
                    setTimeout(() => {
                        this.setState({ isLoading: false });
                        this.props.navigation.navigate('HomeScreen', {
                            username: username
                        });
                    }, 500);
                }
                else {
                    setTimeout(() => {
                        this.setState({ isLoading: false });
                        Alert.alert('Username or Password is incorrect')
                    }, 500);
                }
            }
            else {
                setTimeout(() => {
                    this.setState({ isLoading: false });
                    Alert.alert("Password length should be greather than 8");
                }, 500);
            }
        }
        else {
            setTimeout(() => {
                this.setState({ isLoading: false })
                Alert.alert("Enter all the Details")
            }, 500);
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <ImageBackground style={styles.bgImage} source={require('../image/wallpaper.png')}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../icons/logo.png')} style={styles.logoImage} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>REACT NATIVE</Text>
                    </View>
                    <ScrollView>
                        <View style={{ marginTop: height * 0.15 }}>
                            <View style={styles.textInputContainer}>
                                <Image source={require('../icons/username.png')} style={styles.iconImage} />
                                <TextInput
                                    placeholder='Username'
                                    placeholderTextColor='white'
                                    style={styles.inputText}
                                    ref={ref => this.username = ref}
                                    returnKeyType='next'
                                    onChangeText={username => this.setState({ username })}
                                    onSubmitEditing={() => this.password && this.password.focus()}
                                />
                            </View>
                            <View style={styles.textInputContainer}>
                                <Image source={require('../icons/password.png')} style={styles.iconImage} />
                                <TextInput
                                    placeholder='Password'
                                    placeholderTextColor='white'
                                    style={styles.inputText}
                                    ref={ref => this.password = ref}
                                    returnKeyType='done'
                                    onChangeText={password => this.setState({ password })}
                                    secureTextEntry
                                />
                            </View>
                        </View>
                        {!this.state.isLoading ?
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.loginFunction()}
                            >
                                <Text style={styles.buttonText}>LOGIN</Text>
                            </TouchableOpacity>
                            :
                            <View style={styles.loadingContainer}>
                                <Image source={require('../icons/loading.gif')} style={styles.loading} />
                            </View>
                        }
                        <View style={styles.fotterContainer}>
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('CreateAccount')}>
                                <Text style={styles.fotterText}>Create Account</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                                <Text style={styles.fotterText}>Forgot Password?</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null
    },
    logoImage: {
        height: width * 0.3,
        width: width * 0.3,
    },
    iconContainer: {
        alignItems: 'center',
        marginTop: height * 0.1
    },
    textContainer: {
        marginTop: height * 0.01
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: width * 0.04,
        textAlign: 'center'
    },
    iconImage: {
        width: width * 0.08,
        height: width * 0.08
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        alignSelf: 'center',
        height: 50,
        borderRadius: 40,
        paddingLeft: 15,
        marginVertical: 10
    },
    inputText: {
        fontSize: width * 0.04,
        marginHorizontal: 10,
        paddingLeft: 5,
        color: '#ffffff'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F035E0',
        height: 50,
        borderRadius: 40,
        width: width * 0.9,
        alignSelf: 'center',
        marginTop: height * 0.01
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: width * 0.04
    },
    fotterContainer: {
        marginTop: height * 0.01,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignSelf: 'center'
    },
    fotterText: {
        color: 'white'
    },
    loading: {
        width: 30,
        height: 30
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F035E0',
        height: 50,
        borderRadius: 50,
        width: 50,
        alignSelf: 'center',
        marginTop: height * 0.01
    }
})