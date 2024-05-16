import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Timer() {
    const [timeLeft, setTimeLeft] = useState(30); // 20 minutos en segundos
    const navigate = useNavigate();
    

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(intervalId);
                    navigate("/intro");
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [navigate]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return <div>{formatTime(timeLeft)}</div>;
}

export default Timer;
