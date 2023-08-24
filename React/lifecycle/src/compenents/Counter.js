import { useState, useEffect } from 'react'

function Counter() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log('compenent mount edildi!');

        const interval = setInterval(() => {
            setNumber((n) => n+1);
        },1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log('Number State guncellendi');//istedigimiz state
    }, [number]);

    



    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => (setNumber(number + 1))}>Increase</button>

            <hr />
            <br />

            
        </div>
    )
}

export default Counter