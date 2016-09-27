/* @flow */
'use strict';

/*!
 * Pattern criado para que o projeto não crie dependência de quaisquer bibliotecas
 *
 * todo: importar elementos diferentes para ios e android diretamente aqui. Ex.: DatePicker
 * todo :implementar estrutura de Temas (themes)
 *
 * @author   Rodrigo Cipriani da Rosa <chopsss@gmail.com> <http://www.rodrigocipriani.com.br>
 * @license  MIT
 */


// exemplo:
// não importa de onde está vindo o Text, o App funciona da mesma maneira
import {
    AppRegistry,
    StyleSheet,
    View,
    DrawerLayoutAndroid,
    Image,
    Text,

    TextInput,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableHighlight,
    DatePickerAndroid,
    TimePickerAndroid,
    ListView,
    Navigator
} from 'react-native';
// import { Text } from 'native-base';

// components
import Button from './components/material-design/Button';
import TextField from './components/Input/TextField';

/**
 * Vendors
 * */


module.exports = {
    // ex.: NomeMaisAdequado: Component

    // react-native components
    AppRegistry: AppRegistry,
    StyleSheet: StyleSheet,
    View: View,
    Drawer: DrawerLayoutAndroid,
    Image: Image,
    Text: Text,
    TextInput: TextInput,
    ScrollView: ScrollView,
    TouchableWithoutFeedback: TouchableWithoutFeedback,
    TouchableHighlight: TouchableHighlight,
    DatePicker: DatePickerAndroid,
    TimePicker: TimePickerAndroid,
    ListView: ListView,
    Navigator: Navigator,

    // material designs components
    Button: Button,
    TextField: TextField
};
