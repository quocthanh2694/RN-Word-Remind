
import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,
    View,
    Button,
    ScrollView,
    Picker,
    KeyboardAvoidingView,
} from "react-native";



export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    enthusiasmLevel: number;
}

export default class AddWordScreen extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            word: '',
            meaning: '',
            example: '',
        };
    }

    componentDidMount = () => {

    };

    onPressSave = () => {
        console.log('onclick save', this.state);
    }

    render() {
        return (
            <SafeAreaView >
                <KeyboardAvoidingView>
                    <ScrollView>
                        <View style={styles.row}>
                            <Text>Word:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(word) => this.setState({ word })}
                                placeholder="Input your words"
                                value={this.state.word}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text>Meaning:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(meaning) => this.setState({ meaning })}
                                placeholder="Input the meaning"
                                value={this.state.meaning}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text>Example:</Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                multiline={true}
                                numberOfLines={3}
                                placeholder="Input an example"
                                underlineColorAndroid="transparent"
                                onChangeText={(example) => this.setState({ example })}
                                value={this.state.example}
                            />
                        </View>
                        <View style={[styles.row, { flex: 1, flexDirection: 'row', alignItems: 'center' }]}>
                            <Text style={{ flex: 1 }}>Repeat:</Text>
                            <Picker
                                style={[styles.input, { flex: 1, alignSelf: 'flex-end' }]}
                                selectedValue={this.state.repeat}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ repeat: itemValue })
                                }>
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                        </View>
                        
                        <View style={styles.row}>
                            <Button
                                onPress={() => this.onPressSave()}
                                title="Save"
                            />

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    row: {
        margin: 5,
        marginLeft: 6,
        marginRight: 6,
    },
    input: {
        borderColor: '#c1c1c1',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderRadius: 0,
        height: 40,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 0,
        paddingRight: 0,
    },
    textArea: {
        height: 100,
        justifyContent: 'flex-start',
        textAlignVertical: 'top'
    },
});

