import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList89275Navigator from '../features/ArticleList89275/navigator';
import ArticleList89274Navigator from '../features/ArticleList89274/navigator';
import ArticleList89273Navigator from '../features/ArticleList89273/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList89275: { screen: ArticleList89275Navigator },
ArticleList89274: { screen: ArticleList89274Navigator },
ArticleList89273: { screen: ArticleList89273Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
