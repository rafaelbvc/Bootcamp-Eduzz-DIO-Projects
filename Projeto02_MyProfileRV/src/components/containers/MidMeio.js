import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import certificado01 from '../../assets/certificacoes/certificado01.jpg';
import certificado02 from '../../assets/certificacoes/certificado02.jpg';
import certificado03 from '../../assets/certificacoes/certificado03.jpg';
import certificado04 from '../../assets/certificacoes/certificado04.jpg';
import certificado05 from '../../assets/certificacoes/certificado05.jpg';
         

const MidMeio = () => {

    const carouselConteudo = [
        {
            title: 'Introdução ao ReactJS',
            image: certificado02,
        },
        {
            title: 'Aplicações Móveis com React Native',
            image: certificado01,
        },
        {
            title: 'Desenvolvimento com JavaScript ES6',
            image: certificado03,
        },
        {
            title: 'Components em React',
            image: certificado04,
        },
        {
            title: 'Práticas em Projetos ReactJS',
            image: certificado05,
        },
    ];

    function renderCarousel ({item}){
        return (
            <View>
                <Text style={styles.txtDescricao}>{item.title}</Text>
                <Image source={item.image} style={styles.imgCarousel}/>
            </View>
        )
    }

    return (
        <>
            <View style={styles.midMeio}>
   
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                    <View style={styles.contCarousel}>
                        <Carousel
                            data={carouselConteudo}
                            sliderWidth={408}
                            itemWidth={350}
                            renderItem={renderCarousel}
                        />
                    </View>
                
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    midMeio: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6600FF',
        width: '100%',
        height: '50%',
        borderColor: '#6666FF',
        borderWidth: 8,
        borderBottomWidth: 16,
        borderTopWidth: 12,
        borderRadius: 14,
    },
    contCarousel: {
        backgroundColor: '#6600FF',
        justifyContent: 'center',
        alignItems: 'center',
        width: '96%',
        height: '98%',
        marginBottom: -7,
    },
    txtDescricao: {
        textTransform: 'uppercase',
        letterSpacing: 1,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '2%',
        textAlign: 'center',
    },
    imgCarousel: {
        width: '100%',
        height: '90%',
        borderRadius: 8,
    },
})

export default MidMeio;