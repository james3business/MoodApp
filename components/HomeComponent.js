import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Modal, Form } from 'react-native';
import { Icon, Text, Header, Slider } from 'react-native-elements';
import Entry from './EntryComponent';


class Home extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            entries: 1,
            showModal: false
        };
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    render() {
        return(
            <ScrollView
            bounces
            style={styles.ScrollView}
            >
                <View>
                    <Text 
                    h1
                    justifyContent
                    style={styles.Header}
                    >Mood Journal</Text>
                </View>

                <View style={styles.View}
                    justifyContent
                >
                    <Icon 
                        style={styles.Icon}
                        name='smile-o'
                        type='font-awesome'
                        color='#96b9b9'
                        size='75'
                        reverse
                        onPress={() => this.toggleModal()}
                    />

                    <Icon 
                        style={styles.Icon}
                        name='frown-o'
                        type='font-awesome'
                        color='#7d9a9a'
                        size='75'
                        reverse
                        onPress={() => this.toggleModal()}        
                    />
                    <View>
                        <Modal
                        
                        animationType={'slide'}
                        transparent={false}
                        visible={this.state.showModal}
                        onRequestClose={() => this.toggleModal()}
                        >
                        <Text 
                        h1
                        justifyContent
                        style={styles.Header}
                        >Mood Rating</Text>
                        <Text 
                        h3
                        justifyContent
                        style={styles.Header}
                        >1-100</Text>

                        <Slider style={styles.Test}
                            maximumValue='100'
                            minimumValue='0'
                            allowTouchTrack
                            thumbTintColor='#7d9a8f'
                        ></Slider>
                        </Modal>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Test: {
        marginTop: 450
    },
    View: {
    flexDirection: 'row',
    paddingTop: 450,
    },
    Icon: {
    overlayColor: 'black'
    },
    Header: {
    color: '#597369',
    alignSelf: 'center',
    fontFamily: 'Times New Roman',
    marginTop: 125,
    fontWeight: 'bold'
    },
    ScrollView: {
    backgroundColor: '#e5f1df',
    },
    Modal: {
    backgroundColor: '#e5f1df'
    }
});

export default Home;