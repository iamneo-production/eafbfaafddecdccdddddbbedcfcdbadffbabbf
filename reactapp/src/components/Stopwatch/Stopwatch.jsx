import { useState } from 'react';
function Stopwatch() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [showStart, sets] = useState(false);

    return (
        <div>
            <p data-testId="time">{hours}:{minutes}:{seconds}</p>
            {<button data-testId="start">Start</button>
            <button data-testId="pause">Pause</button>
            <button data-testId="reset">Reset</button>
        </div>
    );
}

export default Stopwatch;
