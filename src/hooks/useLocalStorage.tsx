import { useState } from "react";
import { UserRequest } from "../interfaces/user-request";

export const useLocalStorage = (key: string) => {
 const getData = (): UserRequest | null => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
 };

 const [storedData, setStoredData] = useState(getData);

 const saveData = (data: UserRequest) => {
  localStorage.setItem(key, JSON.stringify(data));
  setStoredData(data);
 };

 const deleteData = () => {
  localStorage.removeItem(key);
  setStoredData(null);
 };

 return {
  data: storedData,
  saveData,
  deleteData,
 };
};
