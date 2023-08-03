import { useState } from 'react';
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

    function startClickHandler() {
        setShowStart(false);
    }

    function resetClickHandler() {
        setShowStart(true);
    }

	return (
		<div>
			<p data-testid="time">
				{formatNumber(hours)}:{formatNumber(minutes)}:{formatNumber(seconds)}
			</p>
			{showStart ? (
				<button data-testid="start" onClick={startClickHandler}>Start</button>
			) : (
				<button data-testid="pause">Pause</button>
			)}
			<button data-testId="reset" onClick={resetClickHandler} disabled={showStart}>
				Reset
			</button>
		</div>
	);
}

export default Stopwatch;
