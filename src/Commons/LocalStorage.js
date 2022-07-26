import DefaultPreference from 'react-native-default-preference';

class LocalStorage {
  get = async key => {
    let jsonValue = await DefaultPreference.get(key);
    return jsonValue;
  };

  set = async (key, value) => {
    await DefaultPreference.set(key, value);
  };

  clearAll = async () => {
    await DefaultPreference.clearAll();
  };
}

const localStorage = new LocalStorage();

export default localStorage;
