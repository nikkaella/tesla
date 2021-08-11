import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import styles from './styles';
import Btn from '../Btn';

const CarItem = (props) => {

    const {title, tagline, imgSrc, taglineCTA} = props;

    return (
        <View style={styles.carContainer}>
            <ImageBackground style={styles.bgImg} source={imgSrc} />
            <View style={styles.titles}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{tagline}<Text style={styles.touchless}>{taglineCTA}</Text>
                </Text>
            </View>
            <View style={styles.btns}>
                <Btn title='Custom Order' type='primary' />
                <Btn title='Existing Inventory' type='secondary' />
            </View>
  
        </View>

    )
}

export default CarItem;




