import { useEffect, useState } from "react";
import { Button } from "./Button/Button";

export default function Calculator() {

    const keyboarCodeValid: Array<number> = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 187, 189, 13, 170, 191, 27];


    const handler = (e: KeyboardEvent) => {
        if (keyboarCodeValid.some(c => c == e.keyCode)) {
            actions(e.key);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handler, false);
        return () => window.removeEventListener('keydown', handler, false);
    })

    const [screen, setScreen] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [digits, setDigits] = useState<Array<string>>([]);




    const handleClick = (operation: string) => {
        actions(operation);
    }

    function actions(operation: string) {
        switch (operation) {
            case "+":
                if (screen == "") return;
                // setDigits(prev => [...prev, screen])
                setDigits(prev => {
                    let digits = [...prev, screen]
                    evaluarSuma(digits);
                    return digits;
                });
                setDigits(prev => {
                    let digits = [...prev, operation]
                    evaluarSuma(digits);
                    return digits;
                });
                // setDigits(prev => [...prev, operation])
                setNumber(preResult => preResult + operation)
                setScreen("");
                // evaluarSuma();
                break;
            case "-":
                if (screen == "") return;
                // setDigits(prev => [...prev, screen])
                setDigits(prev => {
                    let digits = [...prev, screen]
                    evaluarSuma(digits);
                    return digits;
                });
                // setDigits(prev => [...prev, operation])
                setDigits(prev => {
                    let digits = [...prev, operation]
                    evaluarSuma(digits);
                    return digits;
                });
                setNumber(preResult => preResult + operation)
                setScreen("");
                // evaluarSuma();
                break;
            case "x":
                if (screen == "") return;
                // setDigits(prev => [...prev, screen])
                setDigits(prev => {
                    let digits = [...prev, screen]
                    evaluarSuma(digits);
                    return digits;
                });
                // setDigits(prev => [...prev, operation])
                setDigits(prev => {
                    let digits = [...prev, operation]
                    evaluarSuma(digits);
                    return digits;
                });
                setNumber(preResult => preResult + operation)
                setScreen("");
                // evaluarSuma();
                break;
            case "*":
                if (screen == "") return;
                // setDigits(prev => [...prev, screen])
                setDigits(prev => {
                    let digits = [...prev, screen]
                    evaluarSuma(digits);
                    return digits;
                });
                // setDigits(prev => [...prev, operation])
                setDigits(prev => {
                    let digits = [...prev, operation]
                    evaluarSuma(digits);
                    return digits;
                });
                setNumber(preResult => preResult + operation)
                setScreen("");
                // evaluarSuma();
                break;
            case "%":
                if (screen == "") return;
                // setDigits(prev => [...prev, screen])
                // setDigits(prev => [...prev, operation])
                setDigits(prev => {
                    let digits = [...prev, screen]
                    evaluarSuma(digits);
                    return digits;
                });
                setDigits(prev => {
                    let digits = [...prev, operation]
                    evaluarSuma(digits);
                    return digits;
                });
                setNumber(preResult => preResult + operation)
                setScreen("");
                break;
            case "/":
                if (screen == "") return;
                // setDigits(prev => [...prev, screen])
                setDigits(prev => {
                    let digits = [...prev, screen]
                    evaluarSuma(digits);
                    return digits;
                });
                setDigits(prev => {
                    let digits = [...prev, operation]
                    evaluarSuma(digits);
                    return digits;
                });
                // setDigits(prev => [...prev, operation])
                setNumber(preResult => preResult + operation)
                setScreen("");
                // evaluarSuma();
                break;
            case "=":
                setDigits(prev => {
                    let digits = [...prev, screen]
                    evaluarSuma(digits);
                    return digits;
                });
                break;
            case "Enter":
                setDigits(prev => {
                    let digits = [...prev, screen]
                    evaluarSuma(digits);
                    return digits;
                });
                break;
            case "C":
            case "Escape":
                setNumber("");
                setScreen("");
                break;
            case "0":
            case "00":
                if (screen == "") return;
                concatValues(operation);
                break;

            default:
                // debugger;
                concatValues(operation);

                break;
        }
    }


    function concatValues(operation: string) {
        setNumber(preResult => preResult + operation);
        if (digits.length <= 0) {
            setScreen(preResult => preResult + operation)
        }
        else {
            // debugger
            setScreen(preResult => preResult + operation)
            // setDigits(prev => [...prev, operation])
        }
    }

    function evaluarSuma(digitss: Array<string>) {
        if (digitss.length == 3) {
            debugger;
            var operation: { [id: string]: (a: number, b: number) => number } = {};
            operation["+"] = (a, b) => a + b;
            operation["-"] = (a, b) => a - b;
            operation["x"] = (a, b) => a * b;
            operation["*"] = (a, b) => a * b;
            operation["/"] = (a, b) => a / b;
            operation["%"] = (a, b) => a % b;
    
            let resultado = operation[digitss[1]](Number(digitss[0]), Number(digitss[2]))
            setScreen(resultado.toString());
            setNumber(resultado.toString());
            setDigits([]);
            // setDigits(prev => [...prev, resultado.toString()]);
        }
    }


    return (
        <>
            <h2>Calculadora</h2> <br />
            <div className="card w-50">
                <div className="card-header">
                    <p className="m">{number == "" ? "" : number}</p>
                    <p>{screen == "" ? "0" : screen}</p>
                </div>
                <div className="card-body">
                    <div className="row mb-2">
                        <div className="col-md-3">
                            <Button label={"C"} value={"C"} onClick={handleClick} />
                        </div>
                        <div className="col-md-3">
                            <Button label={"%"} value={"%"} onClick={handleClick} />
                        </div>
                        {/* <div className="col-md-3">
                            <Button label={"C"} value={"C"} onClick={handleClick} />
                        </div> */}
                        <div className="col-md-3">
                            <Button label={"+"} value={"+"} onClick={handleClick} />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-3">
                            <Button label={"7"} value={"7"} onClick={handleClick} />
                        </div>
                        <div className="col-md-3">
                            <Button label={"8"} value={"8"} onClick={handleClick} />
                        </div>
                        <div className="col-md-3">
                            <Button label={"9"} value="9" onClick={handleClick} />
                        </div>
                        <div className="col-md-3">
                            <Button label={"x"} value="x" onClick={handleClick} />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-3">
                            <Button label={"4"} value="4" onClick={handleClick} />
                        </div>
                        <div className="col-md-3">
                            <Button label={"5"} value="5" onClick={handleClick} />
                        </div>
                        <div className="col-md-3">
                            <Button label={"6"} value="6" onClick={handleClick} />
                        </div>
                        <div className="col-md-3">
                            <Button label={"-"} value="-" onClick={handleClick} />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-3">
                            <Button label={"1"} value="1" onClick={handleClick} />
                        </div>
                        <div className="col-md-3">
                            <Button label={"2"} value="2" onClick={handleClick} />
                        </div>
                        <div className="col-md-3">
                            <Button label={"3"} value="3" onClick={handleClick} />
                        </div>
                        <div className="col-md-3">
                            <Button label={"/"} value="/" onClick={handleClick} />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-3">
                            <Button label={"00"} value="00" onClick={handleClick} />
                        </div>
                        <div className="col-md-3">
                            <Button label={"0"} value="0" onClick={handleClick} />
                        </div>
                        {/* <div className="col-md-3">
                            <Button label={"."} value="." onClick={handleClick} />
                        </div> */}
                        <div className="col-md-3">
                            <Button label={"="} value="=" onClick={handleClick} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}