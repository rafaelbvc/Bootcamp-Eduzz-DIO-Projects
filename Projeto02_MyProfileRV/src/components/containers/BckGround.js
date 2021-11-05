import React from 'react';
import { StyleSheet, View } from 'react-native';
import TopTopo from './TopTopo';
import MidMeio from './MidMeio';
import BottonBaixo from './BottonBaixo';

const BckGround = () => {
    return (
        <>
            <View style={styles.bckGround}>
                <TopTopo />
                <MidMeio />
                <BottonBaixo />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    bckGround: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#6600FF',
        width: '100%',
        height: '100%',
    },
})

export default BckGround;