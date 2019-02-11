class UiElements {
    constructor(){
        this.mainValue = document.querySelector('.budget__value');
        this.income = document.querySelector('.budget__income--value');
        this.outgo = document.querySelector('.budget__expenses--value');
        this.add = document.querySelector('.add');
        this.type = document.querySelector('.add__type');
        this.btn = document.querySelector('.add__btn');
        this.incomeList = document.querySelector('.income__list');
        this.outgoList = document.querySelector('.expenses__list');
        this.inputText = document.querySelector('.add__description');
        this.inputValue = document.querySelector('.add__value');
        this.fullList = document.querySelector('.container.clearfix');
        this.monthTitle = document.querySelector('.budget__title--month');
    }
}

export let uiElements = new UiElements();
