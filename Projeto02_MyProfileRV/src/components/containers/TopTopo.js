import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import imgProfileEu1 from '../../assets/images/imgProfileEu1.jpg';
import imgProfileEu2 from '../../assets/images/imgProfileEu2.jpg';
import Modal from 'react-native-modal';


const TopTopo = () => {

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    return (
        <>
            <View style={styles.topTopo}>    
                <View style={styles.contFoto}>
                    <TouchableOpacity style={styles.propTouch} onPress={handleModal}>
                    <Modal isVisible={isModalVisible}>
                        <View style={styles.modalPop}>
                            <Text style={styles.txtImagemPerfil}>IMAGEM DO PERFIL</Text>
                            <Image source={imgProfileEu2} style={styles.imgProfileModal} alt='Foto do Perfil'/>
                            <Text style={styles.btnModal} onPress={handleModal}>FECHAR</Text> 
                        </View>      
                    </Modal>
                    <Image source={imgProfileEu1} style={styles.imgProfileEu1} alt='Foto do Perfil'/>
                    </TouchableOpacity>
                </View>

                <View style={styles.contDescricao}>
                    <View style={styles.contTexto}>
                        <Text style={styles.txtNome}>Rafael Vendramini</Text>
                        <Text style={styles.txtDescricao}>Sou apaixonado por tecnologia, espaço exterior, jogos e principalmente a vida e minha família.
                            Estudante de Análise e Desenvolvimento de Sistemas na FATEC - Itapetininga/São Paulo.
                        </Text>
                        <Text style={styles.txtFooter}>
                            Objetivo: FullStack Development
                        </Text>                                
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    topTopo: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#6600FF',
        width: '100%',
        height: '30%',
        borderColor: '#6666FF',
        borderWidth: 6,
        borderBottomWidth: 0,
        borderRadius: 10,
    },
    contFoto: {
        height: '100%',
        width: '40%',
    },
    contDescricao: {
        height: '100%',
        width: '60%',
    },
    contTexto: {
        padding: '3%',
        marginTop: '3%',
        marginRight: '5%',
        borderWidth: 3,
        borderColor: '#6666FF',
        backgroundColor: '#6646FF',
        height: '90%',
        width: '96%',
        borderRadius: 10,
    },
    imgProfileEu1: {
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#6666FF',
        width: '80%',
        height: '68%',
        marginTop: '16%',
        marginLeft: '10%',
    },
    txtNome: {
        paddingTop: 3,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    txtDescricao: {
        paddingTop: '1%',
        paddingBottom: '1%',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontWeight: '500',
    },
    txtFooter: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontWeight: '500',
    },
    propTouch: {
        width: '100%',
        height: '100%',
    },
    modalPop: {
        marginLeft: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '96%',
        height: '54%',
        backgroundColor: '#6666FF',
        borderRadius: 20,
    },
    btnModal: {
        paddingTop: '2%',
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    imgProfileModal: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '94%',
        height: '80%',
        borderRadius: 18,
    },
    txtImagemPerfil: {
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: '1%',
        letterSpacing: 2,
        fontSize: 14,
    }
})

export default TopTopo;