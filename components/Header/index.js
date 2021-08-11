import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import Btn from '../Btn';

const Header = () => {
    return (
        <View style={styles.headerCtnr}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')}></Image>
                <Btn title='menu' type='header'/>

            </View>
        </View>
    )
}

export default Header;
