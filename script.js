function deleteObjectValueByKey({name, age}, key) {
    if (key in deleteObjectValueByKey == true) {
        delete deleteObjectValueByKey.key;
        console.log ('Ключ найден и был удален')
    } else {
        console.log ('Ключ не найдет ');
    }
}

deleteObjectValueByKey ({ name: 'Pete', age: 12}, 'name');
deleteObjectValueByKey({ name: 'Pete', age: 12}, 'asdasdasdasd');
deleteObjectValueByKey({ name: 'Pete', age: 12}, 'asdasdasdasd');


let y = 1;
let num;

function printAllEvenNumbers() {
    do {
        num = prompt ('Введите число больше 0', 0);
    } while ( num == 0 || num == NaN || num == null);
    for (y ; y <= num; y++) {    
        if (y%2==0) {
            console.log (y);
        }
    }
  }

printAllEvenNumbers ();


let nameUser;
let isAgeValid;

function checkUser() {
    nameUser = prompt ('Введите ваше имя');
    isAgeValid = confirm ('Вам больше 18 ?');
    if (isAgeValid == true ) {
        alert ('Добро пожаловать ' + nameUser);
    } else {
        alert ( nameUser + ' тебе нет 18 !');
    }
}

checkUser();

