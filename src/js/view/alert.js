import { uiElements } from '../config/uiElements';

class Check {
    constructor() {
        this.fullList = uiElements.fullList;
    }
/**
 * @description the method handles the created object w checks the data transmitted to it
 * @param {object} object new object from storage
 * @return {object} object with text and boolean value of error 
 */

checkNote(object) {
    
    if (object.text.length === 0 || object.value === 0) {               
        return {                                                        
            error: true, 
            text: 'Please check description and value',
            value: 'danger'
        };
    } else {                                                            
        return {
            error: false, 
            value: 'success',
            text: `Add ${object.text} success!`
        };
    }
}

/**
 * @description the method handles the object of the error, and depending on the value 
 * adds to the markup alert, and after two seconds removes it
 * @param {object} object result from function checkNote
 * @returns {boolean} boolean value of error 
 */

checkNoteTemplate (object) {
    let template = this.checkNoteView(object);                                        
    this.fullList.insertAdjacentHTML('beforebegin', template)
        setTimeout(() => {                                     
            document.querySelector('.alert').remove();
        }, 2000);
        return object.error;                                    
}

/**
 * @description the method template of note view
 * @param {object} object result from function checkNote
 * @returns {string} template 
 */


checkNoteView(object) {
    return `
        <div class="alert alert-${object.value}" role="alert">
            ${object.text}!
        </div>
    `;
}

}

export let alert = new Check();