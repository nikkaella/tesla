import React from 'react';
import { View, FlatList } from 'react-native';
import cars from './components/CarsList';
import CarItem from '../CarItem';
import styles from '../CarItem/styles';

const CarsList = () => {
    const renderItem = ({ item }) => {
        <CarItem title={item.title} imgSrc={item.imgSrc} tagline={item.tagline} taglineCTA={item.taglineCTA} />
    }
    return (
        <View style={styles.carsContainer}>
            <FlatList
                data={cars}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CarsList;
