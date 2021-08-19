import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Modal, Form } from 'react-native';
import { Icon, Text, Header, Slider } from 'react-native-elements';

class Entry extends Component {
    render() {
        return(
            <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.showModal}
            onRequestClose={() => this.toggleModal()}
        >
            <Text>Entry: </Text>
            <Slider style={styles.Test}
                debugTouchArea='true'
                maximumValue='100'
                minimumValue='0'
                allowTouchTrack
            ></Slider>
        </Modal>
        )
    }
}

export default Entry;