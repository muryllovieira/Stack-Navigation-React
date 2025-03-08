import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes() {
    return (
        <Navigator>
            <Screen
                name='home'
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color='red'
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name='gallery'
                component={GalleryScreen}
                options={{
                    title: 'Gallery',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="view-gallery"
                            color='red'
                            size={size}
                        />
                    )
                }}
            />

        </Navigator>
    )
}