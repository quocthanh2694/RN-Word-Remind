
import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableHighlight,
    Button,
} from "react-native";

var PushNotification = require('react-native-push-notification');
import { ROUTE_NAME } from '../constant';
import { homeStore } from './homeStore';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    enthusiasmLevel: number;
}

export class HomeScreen extends React.Component<Props, State> {

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: () => (
                <View style={{ paddingRight: 10 }}>
                    <Button
                        onPress={() => navigation.getParam('_onPressAddItem')()}
                        title="Add"
                    />
                </View>
            ),
        };
    }; 

    componentDidMount = () => {
        console.log("-------DID mount home ");
        const { navigation } = this.props
        navigation.setParams({
            _onPressAddItem: this._onPressAddItem,
        })
        // this.pushNotification();
    };

    _onPressAddItem = () => {
        console.log('onclick add')
        this.props.navigation.navigate(ROUTE_NAME.ADD_WORD);
    }
    _onPress = (item) => {
        console.log('onPress: ', item);
    }

    render() {
        const DATA = [
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                title: 'First Item',
            },
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                title: 'Second Item',
            },
        ];

        return (
            <View>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item, index, separators }) => {
                            return (
                                <TouchableHighlight
                                    onPress={() => this._onPress(item)}
                                    onShowUnderlay={separators.highlight}
                                    onHideUnderlay={separators.unhighlight}>
                                    <View style={styles.flatListItem} >
                                        <Text>{item.title}</Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
    },
    flatListItem: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#fff',
    },
    headerRightBtn: {
        marginRight: 10,
        padding: 10,
    },
});

export default HomeScreen;
