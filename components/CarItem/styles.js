import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
      },
      titles: {
        marginTop: 130,
        alignItems: 'center'
      },
      title: {
        marginBottom: 10,
        fontSize: 48,
        fontWeight: '500',
        color: '#393C41'
      },
      subtitle: {
        fontSize: 20,
        fontWeight: '400',
        color: '#5C5D61',
      },
      bgImg: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover',
      },
      btns: {
        width: '100%',
        position: 'absolute',
        bottom: 20,
      },
      touchless: {
        textDecorationLine: 'underline'
      }
});

export default styles;
