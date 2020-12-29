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
} from 'react-native';

export default class CreateAccount extends Component {
    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <ImageBackground style={styles.bgImage} source={require('../image/wallpaper.png')}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <View style={styles.arrowContainer}>
                            <Image
                                source={require('../icons/left-arrow.png')}
                                style={styles.arrowIcon}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>Create Account</Text>
                    </View>
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
    headerTextContainer: {
        alignItems: 'center',
        marginTop: height * 0.05
    },
    headerText: {
        fontSize: width * 0.04,
        color: 'white',
        fontWeight: 'bold'
    },
    arrowContainer: {
        margin: 10
    },
    arrowIcon: {
        width: 25,
        height: 25
    }
})