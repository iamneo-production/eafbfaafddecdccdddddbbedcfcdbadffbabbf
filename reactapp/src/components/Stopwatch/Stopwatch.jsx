import { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.production.min';
function formatNumber(value) {
	if (`${value}`.length === 1) {
		return `0${value}`;
	}
	return value;
}

function Stopwatch() {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [showStart, setShowStart] = useState(true);
    const [timer, setTimer] = useState(0);
    const ref = useRef();

    function startClickHandler() {
        setShowStart(false);
        ref.current = setInterval(() => {
            setTimer(p => p + 1);
        }, 1000);
    }

    useEffect(() => {
        const hours = Math.floor(timer / (60 * 60));
        const minutes = Math.floor(timer / 60);
        const seconds = Math.floor(timer / (60 * 60));
    }, [timer]);

    function resetClickHandler() {
        setShowStart(true);
    }

	return (
		<div ref={ref}>
			<p data-testid="time">
				{formatNumber(hours)}:{formatNumber(minutes)}:{formatNumber(seconds)}
			</p>
			{showStart ? (
				<button data-testid="start" onClick={startClickHandler}>Start</button>
			) : (
				<button data-testid="pause">Pause</button>
			)}
			<button data-testid="reset" onClick={resetClickHandler} disabled={showStart}>
				Reset
			</button>
		</div>
	);
}

export default Stopwatch;
