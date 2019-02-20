/**
 * @description class constructor for storage and methods for calculating it value
 */

class Storage {
    constructor() {
        this.notes = [];
    }

    /**
     * @description method to calculate total cost of all notes in storage
     * @returns {number} value of totall value
     */
    getFullValue() {                  
        let totallCost = 0;
        for (let note of this.notes) {          
            note.dest === 'income' ? totallCost += note.value : totallCost -= note.value;                      
        }

        return totallCost;                       
    }

    /**
     * @description method to calculate total cost of income notes in storage
     * @returns {number} value of totall income value
     */

    incomeValue() {                    
        let income = 0;
        for (let note of this.notes) {
            if (note.dest === 'income') {
                income += note.value;
            }
        }
        
        return income;
    }

    /**
     * @description method to calculate total cost of expence notes in storage
     * @returns {number} value of totall expense value
     */

    outgoValue() {                   
        let outgo = 0;
        for (let note of this.notes) {
            if (note.dest === 'expense') {
                outgo -= note.value;
            }
        }
        
        return outgo;
    }

    /**
     * @description method for adding notes to storage
     * @param {object} note - some note
     */

    addToStorage(note) {
        this.notes.push(note);    
    }
    /**
     * @description method for remove notes to storage
     * @param {number} id - id of note
     */
    removeFromStorage(id) {
    
        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i].id === id) {
                this.notes.splice(i, 1);         
            }
        }
    }
}   

export let storage = new Storage();

/**
 * @description class constructor for creating one note
 * @param {number} id - id for note
 * @param {string} plus - description type value of note
 * @param {string} text - text of note
 * @param {number} value - value of note
 * @returns {undefined} undefined
 */

export class Note {                                         

    constructor(id, plus, text, value) {
        this.id = id,
        this.dest = plus,
        this.text = text,
        this.value = + value
    }

}