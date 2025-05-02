'use client';

const useLocalStorage = (key: string) => {
  const get = () => {
    console.log('get is called');
    return JSON.parse(localStorage.getItem(key) || '');
  };

  const set = (value: unknown) => {
    console.log('set is called');
    localStorage.setItem(key, String(value));
  };

  const remove = () => {
    console.log('remove is called');
    localStorage.removeItem(key);
  };

  return [get(), set, remove];
};

export default useLocalStorage;
