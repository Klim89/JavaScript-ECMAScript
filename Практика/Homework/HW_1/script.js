"use strict";

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
const minFromArr = Math.min(...arr);
console.log(minFromArr);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
const createCounter = () => {
  let counter = 0;
  return {
    increment: () => ++counter,
    decrement: () => --counter,
  };
};
const counter1 = createCounter();
console.log(counter1.increment());

const counter2 = createCounter();
console.log(counter2.decrement());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(root, targetClass) {
  // Проверяем, есть ли у текущего элемента класс
  if (root.classList && root.classList.contains(targetClass)) {
    return root;
  }

  // Рекурсивный поиск в дочерних элементах
  for (let i = 0; i < root.children.length; i++) {
    const result = findElementByClass(root.children[i], targetClass);
    if (result) {
      return result;
    }
  }
  return null;
}
// Пример использования:
const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
