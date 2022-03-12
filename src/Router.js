import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

import Home from './pages/Home';
import Login from './pages/Login';
import Room from './pages/Room';
import Sign from './pages/Sign';
import colors from './styles/colors';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="SignScreen" component={Sign} />
      </Stack.Group>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          AuthStack()
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="HomeScreen"
              component={Home}
              options={{
                headerBackVisible: false,
                headerTintColor: colors.light_orange,
                headerTitleAlign: 'center',
                title: 'Odalar',
              }}
            />
            <Stack.Screen
              name="RoomScreen"
              component={Room}
              options={({route}) => ({
                title: route.params.room_name,
                headerTintColor: colors.dark_orange,
                headerTitleAlign: 'center',
                headerRight: () => {
                  return (
                    <Icon
                      name="logout"
                      size={30}
                      color={colors.dark_orange}
                      onPress={() => auth().signOut()}
                    />
                  );
                },
              })}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};
export default Router;
