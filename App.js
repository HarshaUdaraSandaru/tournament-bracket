import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStaticNavigation} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import TournamentScreen from './src/screens/TournamentScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarIcon: ({color, size}) => {
          return <AntDesign name="home" size={size} color={color} />;
        },
      },
    },
    Tournament: {
      screen: TournamentScreen,
      options: {
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="tournament" size={size} color={color} />
        ),
      },
    },
  },
});

const Navigation = createStaticNavigation(BottomTabs);

function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
