

/**
 * @description the function handles an event click when entering data into the repository
 * @param {Event} e - some event
 * @returns {undefined} undefined 
 */
function addValue (e) {

    e.preventDefault();                                     // обнуляємо стандартні події

    if(e.target.tagName === 'I' || e.key === 'Enter') {     // якщо подія клік на іконці кнопки або натиснута клавіша Enter 

    let triger = document.querySelector('.add__type').value === 'income';   //записуєм в змінну логічне значення, в залежності від того вибрано плюс або мінус
    let newNote = new Note(storage.notes.length + 1, triger, inputText.value, inputValue.value); // створюємо новий обєкт класу і передаєм в нього значення

    let check = checkNoteTemplate (checkNote(newNote));    // перевірка для отриманих даних

    if (check) return;              // якщо не пройшли перевірку то зупиняємо функцію

    storage.notes.push(newNote);    // відправляємо новий клас в сховище

    addToView(newNote);             // додаємо в розмітку

    mainValue.innerHTML = storage.getFullValue().toFixed(2);    // записуєм повну суму в розмітку
    income.innerHTML = storage.incomeValue().toFixed(2);        // дохід в розмітку
    outgo.innerHTML = storage.outgoValue().toFixed(2);          // витрати  в розмітку

    document.querySelector('select').value = 'income';          // обнуляємо значення "форми"
    inputText.value = '';
    inputValue.value = '';
    };

}

/**
 * @description the function handles an event click when delete data from the repository
 * @param {Event} e - some event
 * @returns {undefined} undefined 
 */

function deleteNote(e) {

    e.preventDefault();                             // обнуляємо стандартні події

    if (e.target.classList.value === 'ion-ios-close-outline') {                 // якщо на кнопку нажимаємо

        const id = parseFloat(e.target.closest('[data-id]').dataset.id);        // забираєм дата атрибут переводимо його в числове значення

        removeFromStorage(id);                                              // функція видалення з сховища
        e.target.closest('[class="item clearfix"]').remove();           // видаляємо з розмітки

        mainValue.innerHTML = storage.getFullValue().toFixed(2);
        income.innerHTML = storage.incomeValue().toFixed(2);
        outgo.innerHTML = storage.outgoValue().toFixed(2);

    };
}