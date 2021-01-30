import React from 'react'
import "font-awesome/css/font-awesome.min.css"
function Workers() { 
    const workers=[{name:'Иван', age:23}, {name:'Петя', age:30}, {name:'Коля', age:30}]
    var str=[]
    for (let i = 0; i < workers.length; i++) {
        str.push("Имя: "+workers[i].name+" Возраст: "+workers[i].age)
    }
    return (
        <div>
        Заданный Массив:(
        {workers.map(o=><>{"{"}name:{o.name}, age:{o.age}{"}"},</>)})
                <h6 className="m-2 ">
                    Работники:</h6> 
               <div className="row m-3">

           {str.map(o=>
            <div className="card p-3 m-3 col-3">
                <i className="card-img-top text-center fa fa-address-card fa-5x text-warning" />{o}</div>)} 
            </div>
        </div>
    )
}

export default Workers
