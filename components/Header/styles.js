import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerCtnr: {
        justifyContent:'center',
        width: '94%',
        position: 'absolute',
        zIndex: 2,
        top: 40,
        left: 20 
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        resizeMode: 'contain',
        width: 150, 
        height: 40
    }
})

export default styles;