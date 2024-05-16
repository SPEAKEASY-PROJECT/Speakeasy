import { useEffect, useState } from "react";

function Timer() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const i = window.setInterval(() => {
            setDate(new Date());
        }, 1_000);

        return () => {
            window.clearInterval(i);
        };

    }, []);


    return <div>{date.toLocaleString()}</div>;
}

export default Timer;