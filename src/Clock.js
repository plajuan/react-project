import React, {useState, useEffect} from 'react'

export function Clock() {
    const [date, setDate] = useState(new Date())
    

    //trata todos os efeitos colaterais: alteração de propriedade, alteração no estado, 
    //alteração de valores dentro das propriedades, alteração no state
    useEffect(()=>{
        let timerId = setInterval(()=>{ setDate(new Date()) }, 1000)
         return () => {
            clearInterval(timerId)
         }
    })

    
    return(
        <h1>{date.toLocaleTimeString()}</h1>            
    )
}
