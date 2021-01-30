import React from 'react'

export default function Massiv() {
    var arr=[1,2,5,12,15,21];
    var newArr=[]
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i]%5)){
            newArr.push(arr[i]);
        }        
    }
    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);        
    }
    return (
        <div>
            Заданный массив:{"{"} 
           {arr.map(o=><>{o},</>)}{"}"} <br/>
            Числа кратные 5: <br/>
           {newArr.map(o=><>число: {o} <br/></>)}
        </div>
    )
}

