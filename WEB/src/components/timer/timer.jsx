import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth.context";

function Timer() {
    const [timeLeft, setTimeLeft] = useState(30); // 20 minutos en segundos son 1200
    const navigate = useNavigate();
    // const { user } = useContext(AuthContext);
    

    useEffect(() => {
        // if (!user) {
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
        // }
    // }, [navigate, user]);
}, [navigate]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // if (user) {
    //     return null;
    // }

    return <div>{formatTime(timeLeft)}</div>;
}

export default Timer;
