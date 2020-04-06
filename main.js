"use strict"

//1. Клонирование массива. Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.


let etalonArray = ["apple", "cherry", "pear"];

function copyArr(arrayToCopy) {
    return arrayToCopy.slice();
}
let arrayB = copyArr(etalonArray);

console.log(arrayB);

//2. Преобразование массива в строку. Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами


let arr2 = [123, 45, 67, 87, 96];

console.log(arr2.join(", "));

console.log(arr2.toString());


//3 Заполните массив 10-ю иксами с помощью цикла.

let arr3 = [];

for (let i = 0; i < 10; i++) {
    arr3.push("x");
};

console.log(arr3);


//4. Заполните массив числами от 1 до 10 с помощью цикла

let arr4 = [];
for (let i = 0; i < 10; i++) {
    arr4.push(1 + i);

}

console.log(arr4);


//5. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.

let arr5 = [];

for (let i = 0; i < 10; i++) {
    arr5.push((Math.random()).toFixed(2));

}

console.log(arr5);


//6  Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла. 


function ArrayFiller() {
    let arr6 = [];
    while (arr6.length < 10) {
        let genNum = Math.round((Math.random() + 0.1) * 10);
        if (genNum < 11) arr6.push(genNum);
    }
    return arr6;
}

let arr7 = ArrayFiller();
console.log(arr7);


// 7 Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти. 

let arr = [1, 23, -5, 3, -7, 40, 5, 22, 6, 7]

for (let i = 0; i < arr.length; i++) {
    if ((arr[i] > 0) && (arr[i] < 10)) {
        console.log(arr[i]);
    }

}

//8 Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.

let arr8 = [1, 23, -5, 3, -7, 40, 5, 22, 6, 7];

for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] == 5) {
        console.log("Есть");
        break;
    }
}


//9 Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    sum9 = 0;

for (let i = 0; i < arr9.length; i++) {
    sum9 = sum9 + arr9[i];
}
console.log(sum9);

// 10 Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. 

let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    sum10 = 0;

for (let i = 0; i < arr10.length; i++) {
    sum10 = sum10 + arr10[i] * arr10[i];
}
console.log(sum10);

//11  Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)

let arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    sum11 = 0;

for (let i = 0; i < arr11.length; i++) {
    sum11 = sum11 + arr11[i];
}
let average = sum11 / arr11.length;
console.log(average);

//12 Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.

let num = prompt("Укажите число");

function colonOdd(num) {
    let strNum = num.toString();
    let result = [strNum[0]];
    for (var i = 1; i < strNum.length; i++) {
        if ((strNum[i - 1] % 2 !== 0) && (strNum[i] % 2 !== 0)) {
            result.push(':', strNum[i]);
        } else {
            result.push(strNum[i]);
        }
    }
    return result.join('');
}

alert(colonOdd(num));

//14 Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.


let array = ["cat", "dog", "lion", "elephant", "raccoon"];

function getFirst(array, n) {

    return array.slice(0, n);
}
console.log(getFirst(array, 4));


// 15 Сумма элементов двух массивов. Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

function getSumOfArr() {

    let arr = [22, 33, 44, 55, 66, 77],
        arr2 = [1, 2, 3, 4, 5, 6, 7],
        arr3 = [];

    for (let i = 0; i < arr.length; i++) {
        arr3.push(arr[i] + arr2[i]);
    }
    return arr3;

}
console.log(getSumOfArr());



// 18 Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.
function compareNumbers(arr19) {

    arr19.sort(CompareNum);
    return arr19;

    function CompareNum(a, b) {
        return b - a;
    }

}
console.log(compareNumbers([34, 22, 78, 63, 2, 1]));


//19 Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.

function sumOfSquares(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i] * arr[i];

    }
    return sum;
}

console.log(sumOfSquares([3, 3, 8]));


//20 Напишите код, который определяет сумму и произведение значений массива.

function getSumAndMultipliction(arr) {
    let sum = 0,
        multiply = 1;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        multiply = multiply * arr[i];
    }
    return ("Сумма элементов массива: " + sum + ". Произведение элементов массива: " + multiply);
}
alert(getSumAndMultipliction([1, 2, 3, 4]));

// 22  Переместить элемент массива из одной позиции в другую. Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент массива из позиции from в позицию to.


function moveElement(arr, from, to) {
    arr23.splice(to, 0, arr23.splice(from, 1)[0]);
    return arr23;
};

let arr23 = [1, 2, 3, 4, 5, 6, 7];
console.log(moveElement(arr23, 6, 0));


// 23 Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len, заполненный целыми числами, где каждое число больше предыдущего на единицу.

function generayeNubbers(start, len) {
    let arr = new Array(len);

    for (let i = 0; i < len; i++, start++) {
        arr[i] = start;

    }
    return arr;
}

console.log(generayeNubbers(1, 4));

// 24 Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.


let numbers = [2, 3, 5, 7, 11, 13, 17, 19];

function currentSums(numbers) {

    let numbersSums = [];
    numbers.reduce(function (sum, current, i) {
        return numbersSums[i] = sum + current;
    }, 0);
    console.log(numbersSums);

}
currentSums(numbers);

// 25  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

function ArrayFillToEnd(arr) {
    let arrTotal = arr.push(1, 2, 3);
    return arr;
}

console.log(ArrayFillToEnd(['a', 'b', 'c']));

// 26 Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

function numberReverse(arr) {
    arr = arr.reverse();
    return arr;
}
alert(numberReverse([1, 2, 3]));

//27 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

function ArrayFillToStart(arr) {

    let arrTotal = arr.unshift(4, 5, 6);
    return arr;
}

console.log(ArrayFillToStart([1, 2, 3]));

//28 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
function returnLastNum(arr) {

    return arr[arr.length - 1];
}
console.log(returnLastNum(["js", "css", "jq"]));

//29 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

function returnNewArr(arr) {
    let arrNew = arr.slice(3);
    return arrNew;
}

console.log(returnNewArr([1, 2, 3, 4, 5]));

//30  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

function returnTransformedArr(arr) {
    arr.splice(1, 2);
    return arr;
}

console.log(returnTransformedArr([1, 2, 3, 4, 5]));

//31 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

function returnNewArray(arr) {
    let arrNew = arr.splice(1, 3);
    return arrNew;
}

console.log(returnNewArray([1, 2, 3, 4, 5]));

//32 Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
function MultyArray(arr) {
    return [2][0];

}
alert(MultyArray([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));

//33 Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.

let obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
alert(obj.js[0]);

//34 Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.

let arr35 = ["a", "b", "c"]
alert(arr35);

//35  С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.

alert(arr35[0]);
alert(arr35[1]);
alert(arr35[2]);

//36 Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
let arr37 = ["a", "b", "c", "d"];

alert(arr37[0] + " + " + arr37[1] + ", " + arr37[2] + " + " + arr37[3]);

//37 Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
function getSumOfMultiplication(arr) {
    let result = arr[0] * arr[1] + arr[2] * arr[3];
    return result;
}
console.log(getSumOfMultiplication([2, 5, 3, 9]));