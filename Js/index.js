
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
            squr: '#squr',
            deleteAll: '#delete-all',
            del: '#del',
            naviHistory: '#naviHistory',
            historyClear: '#naviHistoryClear',
            nav: '#nav',

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
                    naviHistory: document.querySelector(DOMString.naviHistory),
                    nav: document.querySelector(DOMString.nav).style.display = 'none',
                    squr: document.querySelector(DOMString.squr).innerHTML,

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
                    squr: DOMString.squr,
                    deleteAll: DOMString.deleteAll,
                    del: DOMString.del,
                    naviHistory: DOMString.naviHistory,
                    nav: DOMString.nav,
                    historyClear: DOMString.historyClear,
                }
            }
        }

    }

    backEnd = () => {
        let numbers = '';
        let output = 0;
        let dotArray = [];

        const inputs = [];
        const history = [];

        return {

            clearHistory: () => {
                history.length = 0;
                let clearHistory = history.length;
                document.querySelector('#history').innerHTML = '';
            },

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

                if (numbers.includes('.')) {
                    document.querySelector('#dot').disabled = true;
                } else if (!(output == '') && !(output.includes('.'))) {
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

                if (!isNaN(inputs[inputs.length - 1])) {
                    inputs.push(operator);
                }


                console.log(`Input : ${inputs}`);

                numbers = '';
            },

            result: () => {
                if (numbers == '') {
                    // inputs.push(numbers.substring(0, numbers.length));
                    numbers = ''
                } else if (numbers == null) {
                    inputs.pop()
                } else {
                    inputs.push(parseFloat(numbers));
                    numbers = '';
                }


                for (let i = 0; i < inputs.length; i++) {

                    document.querySelector('#current-operand').innerHTML = inputs.join("");
                    if (i == 0) {
                        if (inputs[i + 1] == '+') {
                            if (isNaN(inputs[i + 2])) {
                                inputs[i + 2] = null;
                                inputs.pop();
                                output = inputs[i];
                            } else if (inputs[i + 1] != '+') {
                                inputs[i + 1] = null;
                                inputs.pop();
                            } else {
                                output += inputs[i] + inputs[i + 2];
                            }

                        } else if (inputs[i + 1] == '-') {
                            if (isNaN(inputs[i + 2])) {
                                inputs[i + 2] = null;
                                inputs.pop();
                                output = inputs[i];
                            } else {
                                output += inputs[i] - inputs[i + 2];
                            }

                        } else if (inputs[i + 1] == '*') {
                            if (isNaN(inputs[i + 2])) {
                                inputs[i + 2] = null;
                                inputs.pop();
                                output *= inputs[i];
                            } else {
                                output += inputs[i] * inputs[i + 2];
                            }

                        } else if (inputs[i + 1] == '/') {
                            if (isNaN(inputs[i + 2])) {
                                inputs[i + 2] = null;
                                inputs.pop();
                                output = inputs[i];
                            } else {
                                output = inputs[i] / inputs[i + 2];
                            }

                        } else if (inputs[i + 1] == 'squroot') {
                            if (isNaN(inputs[i + 2])) {
                                inputs[i + 2] = null;
                                inputs.pop();
                                output = Math.sqrt(inputs[i]);
                            }
                            output = Math.sqrt(inputs[i]);
                            console.log(`Sqr:  ${output}`);
                        } else if (inputs[i + 1] == 'squr') {
                            if (isNaN(inputs[i + 2])) {
                                inputs[i + 2] = null;
                                inputs.pop();
                                output = Math.pow(inputs[i], 2);
                            }
                            output = Math.pow(inputs[i], 2);

                        }


                    } else if (i > 0 && i % 2 == 0 && i < inputs.length - 1) {

                        document.querySelector('#current-operand').innerHTML = `input: ${inputs.join("")}`;
                        if (inputs[i + 1] == '+') {
                            if (isNaN(inputs[i + 2])) {
                                inputs[i + 2] = null;

                                inputs.pop();
                            } else {
                                output += inputs[i + 2];
                            }

                        } else if (inputs[i + 1] == '-') {
                            if (isNaN(inputs[i + 2])) {
                                inputs[i + 2] = null;
                                inputs.pop();
                            } else {
                                output -= inputs[i + 2];
                            }

                        } else if (inputs[i + 1] == '*') {
                            if (isNaN(inputs[i + 2])) {
                                inputs[i + 2] = null;
                                inputs.pop();
                            } else {
                                output *= inputs[i + 2];
                            }


                        } else if (inputs[i + 1] == '/') {
                            if (isNaN(inputs[i + 2])) {
                                inputs[i + 2] = null;
                                inputs.pop();
                            } else {
                                output /= inputs[i + 2];
                            }


                        } else if (inputs[i + 1] == 'squroot') {

                            output = Math.sqrt(output);
                            console.log(`Sqr:  ${output}`);
                        }
                        else if (inputs[i + 1] == 'squr') {
                            output = Math.pow(output[i], 2)
                        }


                    }
                }

                document.querySelector('#previous-operand').innerHTML = output;

                console.log(inputs);

                if (inputs != 0) {
                    history.push(inputs.join("") + ' = ' + output + '\n');
                } else if (inputs == 0) {
                    inputs = null;
                    history.push(inputs.join("") + ' = ' + output + '\n');
                }


                console.log(`${history}`);

                var html;
                if (history.length != 0) {
                    html = ` <li id="history" class="navbar__history--li">${history.join("")}</li>`
                    document.querySelector('#history').innerHTML = html;
                }



                console.log(output);
                output = 0;
            }


        }

    }

    controller = (front, back) => {
        const ui = front();
        const brain = back();
        const dom = ui.getDOM();


        const keys = addEventListener('keydown', (event) => {

            if (event.key == 1) {
                brain.acceptNumbers(dom.oneValue);
            } else if (event.key == 2) {
                brain.acceptNumbers(dom.twoValue);
            } else if (event.key == 3) {
                brain.acceptNumbers(dom.threeValue);
            } else if (event.key == 4) {
                brain.acceptNumbers(dom.fourValue);
            } else if (event.key == 5) {
                brain.acceptNumbers(dom.fiveValue);
            } else if (event.key == 6) {
                brain.acceptNumbers(dom.sixValue);
            } else if (event.key == 7) {
                brain.acceptNumbers(dom.sevenValue);
            } else if (event.key == 8) {
                brain.acceptNumbers(dom.eightValue);
            } else if (event.key == 9) {
                brain.acceptNumbers(dom.nineValue);
            } else if (event.key == 0) {
                brain.acceptNumbers(dom.zeroValue);
            } else if (event.key == '+') {
                brain.operation('+');
            } else if (event.key == '-') {
                brain.operation('-');
            } else if (event.key == '/') {
                brain.operation('/');
            } else if (event.key == '*') {
                brain.operation('*');
            } else if (event.key == '.') {
                brain.acceptNumbers(dom.dotValue);
            } else if (event.key == 'Enter') {
                brain.result();
            }
        })


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
        const squrFunction = () => {
            brain.operation('squr');
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

            // event.target.style.color = 'red';
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
        const ClearAllHistory = () => {
            brain.clearHistory();
        }
        const naviToggleFunction = () => {
            var gg = document.querySelector(dom.nav);
            if (gg.style.display == 'none') {
                gg.style.display = 'block'
            } else if (gg.style.display == 'block') {
                gg.style.display = 'none'
            }
        }


        document.querySelector(dom.plus).addEventListener('click', addFunction);
        document.querySelector(dom.minus).addEventListener('click', subtractFunction);
        document.querySelector(dom.divide).addEventListener('click', divisionFunction);
        document.querySelector(dom.multiply).addEventListener('click', multiplicationFunction);
        document.querySelector(dom.historyClear).addEventListener('click', ClearAllHistory);


        document.querySelector(dom.squRoot).addEventListener('click', squRootFunction);
        document.querySelector(dom.squr).addEventListener('click', squrFunction);
        document.querySelector(dom.deleteAll).addEventListener('click', clearAllFunction);
        document.querySelector(dom.del).addEventListener('click', clear);
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

        document.querySelector(dom.naviHistory).addEventListener('click', naviToggleFunction);

        document.querySelector(dom.equalTo).addEventListener('click', calculate);

    }
}
const calc = new Calculator;