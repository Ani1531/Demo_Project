// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const storeData = async (key, value) => {
//   try {
//     console.log('KEY AND VALUE', key, value);
//     await AsyncStorage.setItem(key, value);
//   } catch (e) {
//     console.log('ERROR WHILE STORING LOCAL STORE', e);
//   }
// };

// export const getData = async key => {
//   try {
//     console.log('KEY AND VALUE', key);
//     let value = await AsyncStorage.getItem(key);
//     if (value !== null) {
//       // value previously stored
//       return value;
//     }
//   } catch (e) {
//     // error reading value
//     console.log('ERROR WHILE GETTING LOCAL STORE', e);
//   }
// };
