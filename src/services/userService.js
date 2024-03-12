import { storageService } from "./storageService";

function createUser(username, email, password, avatar = "") {
  const newUser = {
    id: utilService.generateId(),
    username,
    password,
    email,
    avatar,
    isAdmin: false,
    createdAt: new Date(),
  };
  const totalUsers = storageService.getUsers();
  storageService.saveUsers([...totalUsers, newUser]);
}

function login(username, password) {
  const users = storageService.getUsers();
  const foundedUser = users.find(
    (user) => user.password === password && user.username === username
  );

  if (!foundedUser) return null;
  storageService.saveLoggedInUser(foundedUser);
  return foundedUser;
}

function logout() {
  storageService.clearAll();
}

async function fetchAvatar(username = "shoshi") {
  try {
    const URL = `https://robohash.org/${username}`;
    const response = await fetch(URL);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const userService = { createUser, login, logout, fetchAvatar };
