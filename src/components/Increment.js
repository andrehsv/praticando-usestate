import { useState } from "react";

const Increment = () => {
    const initialNumber = 5;
    const [number, setNumber] = useState(initialNumber);

    return (
        <>
            <p>Número: {number}</p>
            <button onClick={() => setNumber(number + 1)}>Incrementar</button>
        </>
    );
};

export default Increment;