import React, {useState} from 'react'

export default function Week() {

    const[week, setWeek]=useState('');
    const handleSubmit=(ev)=>{
        ev.preventDefault();
        var newWeek="";
        switch (week) {
            case "2": newWeek="Понедельник";
            break;
            case "3": newWeek="Вторник";
            break;
            case "4": newWeek="Среда";
            break;
            case "5": newWeek="Четверг";
            break;
            case "6": newWeek="Пятница";
            break;
            case "7": newWeek="Суббота";
            break;
            case "1": newWeek="Воскресенье";
            break;
            default:
                newWeek="неверное число дня недели. Введите число от 1 до 7";
        };
        setWeek(newWeek);
    };
    const handleChange=(ev)=>{
        const {value}=ev.target;        
        setWeek(value)
    };
     
        return (
            <div>
                <form onSubmit={handleSubmit}>
                <input name="week" className="form-control" placeholder="Введите число от 1 до 7" value={week.value} onChange={handleChange}></input><br></br>
                <button className="btn  btn-outline-danger">Ok</button>
            </form>
            <p className="">Выбранный день недели: {week} </p>
            </div>
        )
    
}

