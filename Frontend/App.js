import 'react-native-gesture-handler';
import React from 'react';
import Login from './Screens/Login.js';
//import Categories from './Screens/Categories.js';
import Register from './Screens/Register.js';
import Profile from './Screens/Profile.js';
import Main from './Screens/Main.js';
import NewCategory from './Screens/Categories/NewCategory.js';
import CategoryFramework from './Screens/Categories/CategoryFramework.js';
import Posts from './Screens/Posts.js';
import {createStackNavigator} from '@react-navigation/stack';
import Playground from './Screens/Playground.js';
import LanguagePage from './Screens/LanguagePage.js';
import BottomNavBar from './Screens/BottomNavBar.js';
import ArticleHeader from './Screens/ArticleHeader.js';
import Article from './Components/Article.js';
import List from './Components/SettingsComponents/List.js';
import TopBar from './Screens/TopBar.js';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import TextHere from './Components/--TextHere---.js';
import Settings from './Screens/Settings/Settings';
import Account from './Screens/Settings/Account';
import Appearance from './Screens/Settings/Appearance';
import Notification from './Screens/Settings/Notification';
import Security from './Screens/Settings/Security';
import Comment from './Screens/Comment';
import ChatScreen from './Screens/Chat/ChatScreen';
import ChatLayout from './Screens/Chat/ChatLayout';
// import NewPost from './Screens/NewPost';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Article" component={Article} />
          <Stack.Screen name="ArticleHeader" component={ArticleHeader} />
          <Stack.Screen name="NewCategory" component={NewCategory} />
          <Stack.Screen name="ChatLayout" component={ChatLayout} />
          <Stack.Screen
            name="CategoryFramework"
            component={CategoryFramework}
          />
          <Stack.Screen name="Comment" component={Comment} />
          <Stack.Screen name="LanguagePage" component={LanguagePage} />
          <Stack.Screen name="Security" component={Security} />
          <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Posts" component={Posts} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="Appearance" component={Appearance} />
          <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
