
class Calculator {
    constructor() {
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
            multiply: '#multiplication',
            dots: '#dot',
            squRoot: '#squr-root',
            deleteAll: '#delete-all',
            del: '#del',

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
                    dotValue: document.querySelector(DOMString.dots).innerHTML,
                    squRoot: document.querySelector(DOMString.squRoot).innerHTML,
                    deleteAll: document.querySelector(DOMString.deleteAll).innerHTML,
                    del: document.querySelector(DOMString.del).innerHTML,

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
                    multiply: DOMString.multiply,
                    equalTo: DOMString.equalTo,
                    dot: DOMString.dots,
                    squRoot: DOMString.squRoot,
                    deleteAll: DOMString.deleteAll,
                    del: DOMString.del,
                }
            }
        }

    }

    backEnd = () => {
        let numbers = '';
        let output = 0;
        let dotArray = [];
        const inputs = [];
        return {

            clearAll: () => {
                inputs.length = 0;
                numbers = '';
            },

            clear: () => {


                if (numbers !== '') {
                    let newClearNumber = numbers.substring(numbers.length - 1, -1);
                    numbers = newClearNumber;
                    document.querySelector('#current-operand').innerHTML = numbers;

                }
                // document.querySelector('#current-operand').innerHTML = '0';
              
            },

            acceptNumbers: (number) => {
                numbers = numbers.concat(number);   
                document.querySelector('#current-operand').innerHTML = numbers;

                if (numbers.includes('.') ) {
                    document.querySelector('#dot').disabled = true;
                }else if(!(output == '') && !(output.includes('.'))){
                    document.querySelector('#dot').disabled = false;
                } else {
                    document.querySelector('#dot').disabled = false;
                }
                console.log(numbers, 'input');

            },

            operation: (operator) => {
                if (numbers != '') {
                    inputs.push(parseFloat(numbers));
                }
                inputs.push(operator);

                console.log(`Input : ${inputs}`);

                numbers = '';
            },
             
            result: () => {
                inputs.push(parseFloat(numbers));
                numbers = '';
                for (let i = 0; i < inputs.length; i++) {
                    if (i == 0) {
                        if (inputs[i + 1] == '+') {
                            output += inputs[i] + inputs[i + 2];

                        } else if (inputs[i + 1] == '-') {
                            output += inputs[i] - inputs[i + 2];
                        } else if (inputs[i + 1] == '*') {
                            output += inputs[i] * inputs[i + 2];
                        } else if (inputs[i + 1] == '/') {
                            output = inputs[i] / inputs[i + 2];
                        } else if (inputs[i + 1] == 'squroot') {
                            output = Math.sqrt(inputs[i]);
                            console.log(`Sqr:  ${output}`);
                        }
                    } else if (i > 0 && i % 2 == 0 && i < inputs.length - 1) {
                        if (inputs[i + 1] == '+') {
                            output += inputs[i + 2];
                        } else if (inputs[i + 1] == '-') {
                            output -= inputs[i + 2];
                        } else if (inputs[i + 1] == '*') {
                            output *= inputs[i + 2];
                        } else if (inputs[i + 1] == '/') {
                            output /= inputs[i + 2];
                        } else if (inputs[i + 1] == 'squroot') {
                            output = Math.sqrt(output);
                            console.log(`Sqr:  ${output}`);
                        }

                    }



                }

                document.querySelector('#previous-operand').innerHTML = output;

                console.log('d' + inputs);
                console.log(output);
                output = 0;
            }


        }

    }

    controller = (front, back) => {
        const ui = front();
        const brain = back();

        const dom = ui.getDOM();

        const addFunction = () => {
            brain.operation('+');

        }

        const subtractFunction = () => {
            brain.operation('-');
        }

        const divisionFunction = () => {
            brain.operation('/');
        }

        const multiplicationFunction = () => {
            brain.operation('*');
        }

        const squRootFunction = () => {
            brain.operation('squroot');

        }
        const clearAllFunction = () => {
            document.querySelector('#current-operand').textContent = '0';
            document.querySelector('#previous-operand').textContent = '';
            brain.clearAll();
        }

        const clear = () => {
            brain.clear();
        }

        const dotFunction = () => {
            brain.acceptNumbers(dom.dotValue);
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

        const calculate = () => {
            brain.result();
        }

        document.querySelector(dom.plus).addEventListener('click', addFunction);
        document.querySelector(dom.minus).addEventListener('click', subtractFunction);
        document.querySelector(dom.divide).addEventListener('click', divisionFunction);
        document.querySelector(dom.multiply).addEventListener('click', multiplicationFunction);


        document.querySelector(dom.squRoot).addEventListener('click', squRootFunction);
        document.querySelector(dom.deleteAll).addEventListener('click', clearAllFunction);
        document.querySelector(dom.del).addEventListener('click', clear);



        document.querySelector(dom.dot).addEventListener('click', dotFunction);
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

        document.querySelector(dom.equalTo).addEventListener('click', calculate);

    }
}
const calc = new Calculator;