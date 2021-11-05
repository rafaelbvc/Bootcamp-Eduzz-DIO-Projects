import React from 'react';
import { StyleSheet, View, Image, Text, Linking, TouchableOpacity } from 'react-native';
import logotipodoGitHub from '../../assets/icos/logotipo-do-github.png';
import logotipodoLinkedIn from '../../assets/icos/logotipo-do-linkedin.png';
import coracao from '../../assets/icos/coracao.png';
import Modal from 'react-native-modal';

const BottonBaixo = () => {

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);


    return (
        <>
            <View style={styles.bottonBaixo}>
                <View style={styles.contLeft}>
                    <TouchableOpacity style={styles.touchProp} onPress={() => {
                        Linking.openURL('https://github.com/rafaelbvc');}}>                  
                        <Image source={logotipodoGitHub} style={styles.icoGitHub}/>
                        <Text style={styles.txtTexto}>GitHub</Text>        
                    </TouchableOpacity>                      
                </View>
                <View style={styles.contMid}>
                    <TouchableOpacity style={styles.touchProp} onPress={handleModal}>
                        <Modal isVisible={isModalVisible}>
                            <View style={styles.modalPop}>
                                <Text style={styles.txtDescricaoModal}>Este aplicativo foi criado por Rafael Barbosa Vendramini Costa, 
                                    no intuito de aprendizado sobre react-native, 
                                    o mesmo está separado e em containers e cada container estilizado separadamente, 
                                    adicionado funções de aplicativos simples, 
                                    está em versão inicial, muito dos componentes não estão com suas funcionalidades completas,
                                    e estão em modo "dummy", será refatorado.
                                </Text>
                                <Text style={styles.btnModal} onPress={handleModal}>FECHAR</Text>
                            </View>
                        </Modal>
                        <Image source={coracao} style={styles.icoCoracao}/>
                        <Text style={styles.txtTexto}>Informações</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contRight}>
                    <TouchableOpacity style={styles.touchProp} onPress={() => {
                        Linking.openURL('https://www.linkedin.com/in/rafael-vendramini/');}}>
                        <Image source={logotipodoLinkedIn} style={styles.icoLinkedIn}/>
                        <Text style={styles.txtTexto}>LinkedIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    bottonBaixo: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#6600FF',
        width: '100%',
        height: '20%',
        borderColor: '#6666FF',
        borderWidth: 6,
        borderTopWidth: 0,
        borderRadius: 10,
    },
    contLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '34%',
        height: '98%',
    },
    touchProp: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    contMid: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '32%',
        height: '98%',
    },
    contRight: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '34%',
        height: '98%',
    },
    icoGitHub: {
        width: '50%',
        height: '50%',
    },
    icoCoracao: {
        width: '50%',
        height: '50%',
    },
    icoLinkedIn: {
        width: '50%',
        height: '50%',
    },
    txtTexto : {
        color: 'white',
        paddingTop: '2%',
        fontWeight: 'bold',
    },
    modalPop: {
        marginLeft: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '86%',
        height: '70%',
        backgroundColor: '#6666FF',
        borderRadius: 20,
    },
    txtDescricaoModal: {
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 26,
    },
    btnModal: {
        paddingTop: '20%',
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 2,
    },
})

export default BottonBaixo;  