	//0. Начальные условия---------------------------------------------
var students_result = [	'Алексей Петров', 0,
						'Ирина Овчинникова', 60,
						'Глеб Стулаков', 30,
						'Антон Павлович', 30,
						'Виктория Заровская', 30,
						'Алексей Левенец', 70,
						'Тимур Вамуш', 30,
						'Евгений Прочан', 60,
						'Александр Малов', 0,];


	//1. Вывод списка студентов и баллов-------------------------------
console.log ('\tСписок студентов:');
for (var i = 0; i < students_result.length; i += 2){
	console.log ('Студент', students_result[i], 'набрал', students_result[i+1], 'баллов.');
}

	//2. Вывод лучшего студента и его балла----------------------------
var max_result = 0; // максимальный результат в группе
var best_student = 0; // индекс лучшего студента
for (var i = 1; i < students_result.length; i += 2){
	if (students_result[i] > max_result){
		best_student = i-1;
		max_result = students_result[i];
	}
}
console.log ('\n\n\tСтудент набравший максимальный балл:\nСтудент', students_result[best_student], 'имеет максимальный балл', max_result, '.');

	//3. Добавление новых студентов------------------------------------
students_result.push ('Николай Фролов', 0); // добавлен студент Николай Фролов
students_result.push ('Олег Боровой', 0); // добавлен студент Олег Боровой
// for (var i = 0; i < students_result.length; i += 2){
// 	console.log ('Студент', students_result[i], 'набрал', students_result[i+1], 'баллов.');
// } // цикл для проверки работоспособности


	//4. Набор баллов у студентов--------------------------------------
for (var i = 0; i < students_result.length; i += 2){
	if (students_result[i] === 'Антон Павлович' || students_result[i] === 'Николай Фролов'){
		students_result[i+1] += 10;
	}
}
// for (var i = 0; i < students_result.length; i += 2){
// 	console.log ('Студент', students_result[i], 'набрал', students_result[i+1], 'баллов.');
// } // цикл для проверки работоспособности


	//5. Список студентов не набравших баллов--------------------------
console.log ('\n\n\tСтуденты не набравшие баллов:')
for (var i = 1; i < students_result.length; i += 2){
	if (students_result[i] === 0){
		console.log (students_result[i-1]);
	}
}


	//6. Удаление из массива данных о студентах, набравших 0 баллов----
for (var i = 1; i < students_result.length; i += 2){
	if (students_result[i] === 0){
		students_result.splice (i-1, 2);
	}
}


	// Результат-------------------------------------------------------
console.log ('\n\tОкончательные результаты:')
for (var i = 0; i < students_result.length; i += 2){
	console.log ('Студент', students_result[i], 'набрал', students_result[i+1], 'баллов.');
} // цикл для проверки работоспособности