import { useState } from "react";

export function Button() {
    //let counter = 0;

    const [counter, setCounter] = useState(0);

    function increment() {
        //counter++;
        setCounter(counter + 1);
        //ver video do maikao sobre closer no javascript para entender pq o valor de counter só aparece atualizado no próximo clique
        console.log(counter);
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}