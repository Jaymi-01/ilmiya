// src/hooks/useAuth.js
import { useState } from 'react';

const STORAGE_KEY = 'ilmiyaUser'; // Key for the currently active user
const DB_KEY = 'ilmiyaUserDB'; // Key for the mock user database

const getInitialUser = () => {
  try {
    const user = localStorage.getItem(STORAGE_KEY);
    const parsedUser = user ? JSON.parse(user) : null;
    // Ensure user is truly logged in before setting state
    return parsedUser && parsedUser.isLoggedIn ? parsedUser : null;
  } catch (error) {
    console.error("Error retrieving user from localStorage:", error);
    return null;
  }
};

export const useAuth = () => {
  const [user, setUser] = useState(getInitialUser);

  // Saves user data to both the active user key and the mock DB
  const saveUserToLocalStorage = (userData) => {
    try {
      const allUsers = JSON.parse(localStorage.getItem(DB_KEY) || '[]');
      const userIndex = allUsers.findIndex(u => u.email === userData.email);

      // Update or add user to the mock DB (for persistence of courses/progress)
      if (userIndex !== -1) {
          allUsers[userIndex] = { ...allUsers[userIndex], ...userData };
      } else {
          allUsers.push(userData);
      }
      localStorage.setItem(DB_KEY, JSON.stringify(allUsers));
      
      // Set the currently active user
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  const clearUserFromLocalStorage = () => {
    try {
      if (user) {
          // Log out the active user in the DB (isLoggedIn: false)
          const loggedOutUser = { ...user, isLoggedIn: false };
          saveUserToLocalStorage(loggedOutUser); // Persists loggedOutUser status to the DB
      }
      
      // Clear the session key
      localStorage.removeItem(STORAGE_KEY);
      setUser(null);
    } catch (error) {
      console.error("Error clearing user session:", error);
    }
  };

  return { user, saveUserToLocalStorage, clearUserFromLocalStorage };
};