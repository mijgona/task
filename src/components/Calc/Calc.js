import React, {useState} from 'react'
import './Calc.css'
import "font-awesome/css/font-awesome.min.css"

export default function Calc() {
    const [curArg,setCur]=useState("");
    const [firstArg,setFirstArg]=useState("");
    const[operation,setOperation]=useState("");
    

const handleChange=(ev)=>{    
    ev.preventDefault();
    let {name,value}=ev.target;
    switch (name) {
        case "1": setCur(curArg+"1");
            break;
        case "2": setCur(curArg+"2");
                break;    
        case "3": setCur(curArg+"3");
                break;
        case "4": setCur(curArg+"4");
                break;
        case "5": setCur(curArg+"5");
                break;
        case "6": setCur(curArg+"6");
                break;
        case "7": setCur(curArg+"7");
                break;
        case "8": setCur(curArg+"8");
                break;        
        case "9": setCur(curArg+"9");
                break;                     
        case "0": setCur(curArg+"0");
                break;                
        case ",": setCur(curArg+".");
                break;      
        case "text": setCur(value);
                break;        
                        
        default:
            break;  
    }
    
    
};
const handleCalc=(ev)=>{       
    ev.preventDefault();
    let {name}=ev.target;
    if (operation){
        name=operation;
    }
    switch (name) {
        case "+":
            if (curArg){
                if (firstArg){
                    const sum=Number(curArg)+Number(firstArg)
                    setFirstArg("");                    
                    setOperation("");
                    setCur(sum); 
                }else{   
                    setFirstArg(curArg);
                    setOperation("+");
                    setCur("");
                }
            };
            break; 
        case "-":
            if (curArg){
                if (firstArg){
                    const sum=Number(firstArg)-Number(curArg)
                    setFirstArg("");                    
                    setOperation("");
                    setCur(sum); 
                }else{   
                    setFirstArg(curArg);
                    setOperation("-");
                    setCur("");
                }
            };
            break;
            
        case "/":
            if (curArg){
                if (firstArg){
                    const sum=Number(firstArg)/Number(curArg)
                    setFirstArg("");                    
                    setOperation("");
                    setCur(sum); 
                }else{   
                    setFirstArg(curArg);
                    setOperation("/");
                    setCur("");
                }
            };
            break;
            case "x":
                if (curArg){
                    if (firstArg){
                        const sum=Number(firstArg)*Number(curArg)
                        setFirstArg("");
                        setOperation("");
                        setCur(sum); 
                    }else{   
                        setFirstArg(curArg);
                        setOperation("x");
                        setCur("");
                    }
                };
                break;
                
        case "%":
            if (curArg){
                if (firstArg){
                    const sum=Number(firstArg)%Number(curArg)
                    setFirstArg("");                  
                    setOperation("");
                    setCur(sum); 
                }else{   
                    setFirstArg(curArg);
                    setOperation("%");  
                    setCur("");
                }
            };
            break;
            case "=":
                if (curArg){
                    if (firstArg){
                        setFirstArg("");
                        setOperation("");
                    }
                };
            break;
            case "ac":
                setCur("");
                setFirstArg("");
                setOperation("");
                break;
            case "del":
                    setCur(curArg.slice(0,-1));
                    setFirstArg("");
                    setOperation("");
                    break;    
    
        default:
            break;        
    }
}
    return (

        <form className="col-4 m-0">
            <div className="row m-0">
                <div className="col-12 m-0">
                    <input  className="input-text col-12 m-0" 
                value={curArg || ''} name="text" onChange={handleChange} />
                </div>
                <div className="col-12">
                    <button  className=" btn  btn-outline-warning col-3" name="ac" onClick={handleCalc}>AC</button>
                    <button  className=" btn  btn-outline-warning col-3" name="del" onClick={handleCalc}><i className="fa fa-angle-left"/></button>
                    <button  className=" btn  btn-outline-warning col-3" name="%" onClick={handleCalc}>%</button>
                    <button  className=" btn  btn-outline-warning col-3" name="/" onClick={handleCalc}>/</button>

                </div>
                <div className="col-12">
                    <button  className=" btn  btn-outline-secondary col-3" value="1" name="1" onClick={handleChange}>1</button>
                    <button  className=" btn  btn-outline-secondary col-3" value="2" name="2" onClick={handleChange}>2</button>
                    <button  className=" btn  btn-outline-secondary col-3" value="3" name="3" onClick={handleChange}>3</button>
                    <button  className=" btn  btn-outline-warning col-3" name="x" onClick={handleCalc}>x</button>

                </div>
                <div className="col-12 m-0">
                    <button className=" btn  btn-outline-secondary col-3" name="4" onClick={handleChange}>4</button>
                    <button className=" btn  btn-outline-secondary col-3" name="5" onClick={handleChange}>5</button>
                    <button className=" btn  btn-outline-secondary col-3" name="6" onClick={handleChange}>6</button>
                    <button className=" btn   btn-outline-warning col-3" name="-" onClick={handleCalc}>-</button>

                </div>
                <div className="col-12 m-0">
                    <button  className=" btn  btn-outline-secondary col-3" name="7" onClick={handleChange}>7</button>
                    <button  className=" btn  btn-outline-secondary col-3" name="8" onClick={handleChange}>8</button>
                    <button  className=" btn  btn-outline-secondary col-3" name="9" onClick={handleChange}>9</button>
                    <button  className=" btn   btn-outline-warning  col-3" name="+" onClick={handleCalc}>+</button>
                </div>
                
                <div className="col-12 m-0">
                    <button  className=" btn  btn-outline-secondary col-3" name="," onClick={handleChange}>,</button>
                    <button  className=" btn  btn-outline-secondary col-3" name="0" onClick={handleChange}>0</button>
                    <button  className=" btn   btn-success  col-6" value="=" name="=" onClick={handleCalc}>=</button>
                </div>
            </div>
            
        </form>
    )
}
