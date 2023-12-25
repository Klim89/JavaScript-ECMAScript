"use strict";

// Задача

// Необходимо получить список всех пользователей с помощью бесплатного API
// (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
// Пользователь должен иметь возможность удалить любого пользователя из списка.

// Загрузка списка пользователей с API
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Отображение списка пользователей
function displayUsers(users) {
  const userListElement = document.getElementById("userList");
  userListElement.innerHTML = ""; // Очистка списка
  // Добавление пользователя
  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${user.name} (${user.email})\n`;

    // Создание кнопки для удаления пользователя
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.addEventListener("click", () => deleteUser(user.id));

    listItem.appendChild(deleteButton);
    userListElement.appendChild(listItem);
  });
}

// Функция удаления пользователя
async function deleteUser(userId) {
  try {
    // Отправка запроса на удаление пользователя
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      fetchUsers();
    } else {
      console.error("Error deleting user");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

fetchUsers();
