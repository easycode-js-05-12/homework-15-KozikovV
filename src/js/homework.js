// -------------------------- Home work --------------------------
// -------------------------- Козіков --------------------------
import './../css/style.css';
import img from '../images/back.png';
import { uiElements } from '../js/config/uiElements';
import { storage, Note } from '../js/service/storage.service';
import { alert } from '../js/view/alert';
import { noteUI } from '../js/view/notesUI';
import { date } from '../js/config/date';

uiElements.mainValue.innerHTML = storage.getFullValue().toFixed(2);
uiElements.monthTitle.innerHTML = date;



/**
 * @description the function handles an event click when entering data into the repository
 * @param {Event} e - some event
 * @returns {undefined} undefined 
 */
function addValue (e) {

    e.preventDefault();                                     

    if(e.target.tagName === 'I' || e.key === 'Enter') {      
    let newNote = new Note(Date.now(), uiElements.type.value, uiElements.inputText.value, uiElements.inputValue.value); 
    let check = alert.checkNoteTemplate (alert.checkNote(newNote));
    if (check) return;
    storage.addToStorage(newNote);
    noteUI.addToView(newNote);

    uiElements.mainValue.innerHTML = storage.getFullValue().toFixed(2);
    uiElements.income.innerHTML = storage.incomeValue().toFixed(2);
    uiElements.outgo.innerHTML = storage.outgoValue().toFixed(2);

    uiElements.type.value = 'income';    
    uiElements.inputText.value = '';
    uiElements.inputValue.value = '';
    }

}

/**
 * @description the function handles an event click when delete data from the repository
 * @param {Event} e - some event
 * @returns {undefined} undefined 
 */

function deleteNote(e) {

    e.preventDefault();                            

    if (e.target.classList.value === 'ion-ios-close-outline') {                 

        const id = parseFloat(e.target.closest('[data-id]').dataset.id);

        storage.removeFromStorage(id);                                         
        e.target.closest('[class="item clearfix"]').remove();     
        uiElements.mainValue.innerHTML = storage.getFullValue().toFixed(2);
        uiElements.income.innerHTML = storage.incomeValue().toFixed(2);
        uiElements.outgo.innerHTML = storage.outgoValue().toFixed(2);

    }
}

uiElements.add.addEventListener('click', addValue);            
uiElements.add.addEventListener('keyup', addValue);            
uiElements.fullList.addEventListener('click', deleteNote);     
