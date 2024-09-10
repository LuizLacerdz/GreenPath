// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Home from '../Home';
// import noticias from './noticias/noticias';

// const Tab = createBottomTabNavigator();

//  export default function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         tabBarActiveTintColor: '#e91e63',
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Noticias"
//         component={noticias}
//         options={{
//           tabBarLabel: 'Noticias',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={size} />
//           ),
//           tabBarBadge: 3,
//         }}
//       />
//       <Tab.Screen
//         name="Login"
//         component={Login}
//         options={{
//           tabBarLabel: 'Login',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }