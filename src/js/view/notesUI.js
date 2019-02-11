import { storage } from '../service/storage.service';

/**
 * @description class constructor for create note user intarface
 */

class NotesUI {
    constructor(){}
    /**
     * @description  method whitch add note to view
     * @param {object} object - one note
     * @returns {undefined} undefined 
     */
    addToView(object) {

        const template = this.addTemplate(object);
        document.querySelector(`.${object.dest}__list`).insertAdjacentHTML('afterbegin',template); 

    }
    /**
     * @description method for creating template of note
     * @param {object} object - one note
     * @returns {string} some string html 
     */
    addTemplate(object) {

        let num = Math.round(object.value * 100 / storage.incomeValue()); 
        if (num > 0 && num !== Infinity) {                                
            num = num;
        } else {
            num = 0;                                        
        }
    
        return `
            <div class="item clearfix" data-id=${object.id}>
                <div class="item__description">${object.text}</div>
                <div class="right clearfix">
                    <div class="item__value"> ${object.dest === 'income' ? '+' : '-'} ${object.value.toFixed(2)}</div>
                    <div class="item__percentage" ${object.dest === 'income' ? 'style = "display: none"' : 'style = "display: block"'}>${num} %</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
        `;
    
        }

}

export let noteUI = new NotesUI();