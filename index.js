// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import StorybookUI from './.storybook'; // Import Storybook
import { name as appName } from './app.json';

const SHOW_STORYBOOK = false; // Set to true to enable Storybook

AppRegistry.registerComponent(appName, () => (SHOW_STORYBOOK ? StorybookUI : App));