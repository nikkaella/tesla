import React from 'react';
import { View, Text, Alert, Pressable } from 'react-native';
import styles from './styles';

const Btn = (props) => {

    const { title, type } = props;

    const backgroundColor = type === 'primary' ? '#00000090' : '#ffffff90';
    const fontColor = type === 'primary' ? '#ffffff90' : '#00000090';
    if (type === 'header') {
        return (
            <View style={styles.menuContainer}>
            <Pressable
                style={styles.menuBtn}
                onPress={() => Alert.alert(title + ' button pressed')}>
                <Text style={styles.menuText}>{title}</Text>
            </Pressable>
        </View>
        )
    }
    return (
        <View style={styles.btnContainer}>
            <Pressable
                style={[styles.btn, { backgroundColor: backgroundColor }]}
                onPress={() => Alert.alert(title + ' button pressed')}>
                <Text style={[styles.btnText,{color: fontColor}]}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default Btn;
