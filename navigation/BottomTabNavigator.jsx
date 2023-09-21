import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";

import DetailItemScreen from "../screens/DetailItemScreen";
import SettingsScreen from "../screens/SettingsScreen";

import AuthScreen from "../screens/AuthScreen";

import ProfileScreen from "../screens/ProfileScreen";

import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PickerScreen from "../screens/PickerScreen";
import AddCounterScreen from "../screens/AddCounterScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
        }}
        name="Auth"
        component={AuthNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={ProfileNavigator}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="DetailScreen"
        component={DetailItemNavigator}
      />
      <HomeStack.Screen
        options={{
          title: "Add Counter",
          presentation: "modal",
        }}
        name="AddCounterScreen"
        component={AddCounterScreen}
      />
    </HomeStack.Navigator>
  );
}

const DetailItemStack = createStackNavigator();

function DetailItemNavigator() {
  const navigation = useNavigation();
  return (
    <DetailItemStack.Navigator>
      <DetailItemStack.Screen
        name="DetailItemScreen"
        component={DetailItemScreen}
        options={{
          headerTitle: "DetailItem",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("SettingsScreen")}
              style={{
                padding: 10,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  color: "#057CFF",
                }}
              >
                Settings
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <DetailItemStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: "Settings",
          presentation: "modal",
        }}
      />
      <DetailItemStack.Screen
        name="Picker"
        component={PickerScreen}
        options={{
          presentation: "modal",
        }}
      />
    </DetailItemStack.Navigator>
  );
}

const AuthStack = createStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{ headerTitle: "Auth" }}
      />
    </AuthStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileNavigator(session) {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: "Profile" }}
      />
    </ProfileStack.Navigator>
  );
}
