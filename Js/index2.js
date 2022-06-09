
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement, dot) {
        // this.previousOperandTextElement = previousOperandTextElement;
        // this.currentOperandTextElement = currentOperandTextElement;

        // this.number = this.number;
        // this.clear();
        // this.dot = '.';

        this.controller(this.frontEnd, this.backEnd);
    }

    frontEnd = () => {
        let DOMString = {
            dot: '#dot',
            Zero: '#zero',
            numberOne: '#one',
            numberTwo: '#two',
            numberThree: '#three',
            numberFour: '#four',
            numberFive: '#five',
            numberSix: '#six',
            numberSeven: '#seven',
            numberEight: '#eight',
            numberNine: '#nine',
            plus: '#plus',
            minus: '#minus',
            divide: '#division',
            equalTo: '#equal-to',
            previous: '#previous-operand'
        }



        return {
            getDOM: () => {
                return {
                    zeroValue: parseInt(document.querySelector(DOMString.Zero).innerHTML),
                    oneValue: parseInt(document.querySelector(DOMString.numberOne).innerHTML),
                    twoValue: parseInt(document.querySelector(DOMString.numberTwo).innerHTML),
                    threeValue: parseInt(document.querySelector(DOMString.numberThree).innerHTML),
                    fourValue: parseInt(document.querySelector(DOMString.numberFour).innerHTML),
                    fiveValue: parseInt(document.querySelector(DOMString.numberFive).innerHTML),
                    sixValue: parseInt(document.querySelector(DOMString.numberSix).innerHTML),
                    sevenValue: parseInt(document.querySelector(DOMString.numberSeven).innerHTML),
                    eightValue: parseInt(document.querySelector(DOMString.numberEight).innerHTML),
                    nineValue: parseInt(document.querySelector(DOMString.numberNine).innerHTML),

                    previous: parseInt(document.querySelector(DOMString.previous).innerHTML),

                    zero: DOMString.Zero,
                    one: DOMString.numberOne,
                    two: DOMString.numberTwo,
                    three: DOMString.numberThree,
                    four: DOMString.numberFour,
                    five: DOMString.numberFive,
                    six: DOMString.numberSix,
                    seven: DOMString.numberSeven,
                    eight: DOMString.numberEight,
                    nine: DOMString.numberNine,
                    plus: DOMString.plus,
                    minus: DOMString.minus,
                    divide: DOMString.divide,
                    equalTo: DOMString.equalTo
                }
            },
        }

    }

    backEnd = () => {
        let numbers = '';
        let output = 0;
        const inputs = [];
        const operators = [];
        var add = []

        // const returnNumber = () => 

        return {
            acceptNumbers: (number) => {
                add.push(number);
                let Add = add.toString();

                // let Add =(add.join());
                console.log(eval(Add));
            },

        }
    }
    controller = (front, back) => {
        const ui = front();
        const brain = back();

        const dom = ui.getDOM();

        const addFunction = () => {
            brain.acceptNumbers('+');

        }

        const subtractFunction = () => {
            brain.acceptNumbers('*');
        }

        const divisionFunction = () => {
            brain.acceptNumbers('/');
        }

        const multiplicationFunction = () => {
            // 
        }


        const zeroFunction = () => {
            brain.acceptNumbers(dom.zeroValue);
        }
        const oneFunction = () => {
            brain.acceptNumbers(dom.oneValue);
        }
        const twoFunction = () => {
            brain.acceptNumbers(dom.twoValue);
        }
        const threeFunction = () => {
            brain.acceptNumbers(dom.threeValue);
        }
        const fourFunction = () => {
            brain.acceptNumbers(dom.fourValue);
        }
        const fiveFunction = () => {
            brain.acceptNumbers(dom.fiveValue);
        }
        const sixFunction = () => {
            brain.acceptNumbers(dom.sixValue);
        }
        const sevenFunction = () => {
            brain.acceptNumbers(dom.sevenValue);
        }
        const eightFunction = () => {
            brain.acceptNumbers(dom.eightValue);
        }
        const nineFunction = () => {
            brain.acceptNumbers(dom.nineValue);
        }



        document.querySelector(dom.plus).addEventListener('click', addFunction);
        document.querySelector(dom.minus).addEventListener('click', subtractFunction);
        document.querySelector(dom.divide).addEventListener('click', divisionFunction);

        document.querySelector(dom.zero).addEventListener('click', zeroFunction);
        document.querySelector(dom.one).addEventListener('click', oneFunction);
        document.querySelector(dom.two).addEventListener('click', twoFunction);
        document.querySelector(dom.three).addEventListener('click', threeFunction);
        document.querySelector(dom.four).addEventListener('click', fourFunction);
        document.querySelector(dom.five).addEventListener('click', fiveFunction);
        document.querySelector(dom.six).addEventListener('click', sixFunction);
        document.querySelector(dom.seven).addEventListener('click', sevenFunction);
        document.querySelector(dom.eight).addEventListener('click', eightFunction);
        document.querySelector(dom.nine).addEventListener('click', nineFunction);

        document.querySelector(dom.equalTo).addEventListener('click', addFunction, subtractFunction);


    }


}

const calc = new Calculator;