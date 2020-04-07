//Первое задание

//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2, т.к. прединкремент сначало делает приращение и затем возвращает новое значение
//d = b++; alert(d);           // 1, т.к. постинкеремент возвращает исходное значение, а потом делает приращение
//c = (2+ ++a); alert(c);      // 5, т.к. из первой операции a=2, прединкремент возвращает увеличение a=3, а затем +2
//d = (2+ b++); alert(d);      // 4, т.к. из второй операции d'=2, постинкремент вернет это значение, а затем +2
//alert(a);                    // 3, т.к. изначально а=1, два прединкремента ++а вернут увеличение на а на 2
//alert(b);                    // 3, т.к. в операциях с прединкрементом используется исходное значение b, но итог также увеличивает на 2


// Второе задание

//var a = 2;
//var x = 1 + (a *= 2);
//alert(x); // 5


// Третье задание

//var a = parseInt(prompt('Введите первое число: '));
//var b = parseInt(prompt('Введите второе число: '));

//(a >= 0 && b >= 0) ? alert(a - b) :
//	(a < 0 && b < 0) ? alert(a * b):
//		(a > 0 && b < 0 || a < 0 && b > 0) ? alert(a + b) : alert('Неверное число')


// Четвертое задание

//var a = parseInt(prompt('Введите число от 0 до 15: '))
//switch (a){
//	case a > 0 && a < 15:
//		alert(a++)
//	case a = 15:
//		alert('15')
//		break
//	case a < 0 || a > 15:
//		alert('Неправильное число!')
//		break
//	default:
//		alert('Попробуйте еще раз!')
//		break		
//}


// Пятое задание


//function operation_plus (numFirst, numSecond){
//	var result = numFirst + numSecond
//		return result
//}
//
//function operation_minus (numFirst, numSecond){
//	var result = numFirst - numSecond
//		return result
//}
//
//function operation_mult (numFirst, numSecond){
//	var result = numFirst * numSecond
//		return result
//}
//
//function operation_div (numFirst, numSecond){
//	var result = numFirst / numSecond
//		return result
//}
////
////var a = parseInt(prompt('Введите первое число: '))
////var b = parseInt(prompt('Введите второе число: '))
////
////alert('Сумма чисел: ' + operation_plus(a,b))
////alert('Разница чисел: ' + operation_minus(a,b))
////alert('Произведение чисел: ' + operation_mult(a,b))
////alert('Деление чисел: ' + operation_div(a,b))
//
//
//// Шестое задание
//
//function mathOperation(arg1, arg2, operation){
//	switch (operation){
//		case '+':
//			alert(operation_plus(arg1, arg2))
//			break
//		case '-':
//			alert(operation_minus(arg1, arg2))
//			break
//		case '*':
//			alert(operation_mult(arg1, arg2))
//			break
//		case '/':
//			alert(operation_div(arg1, arg2))
//			break
//	}
//}
//var arg1 = parseInt(prompt('Введите первое число: '))
//var arg2 = parseInt(prompt('Введите второе число: '))
//var operation = prompt('Введите + - * / ')
//alert('Результат:' + mathOperation(arg1,arg2,operation))

