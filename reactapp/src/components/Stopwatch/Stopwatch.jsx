import { useState } from 'react';
function Stopwatch() {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [showStart, setShowStart] = useState(true);

	return (
		<div>
			<p data-testId="time">
				{hours}:{minutes}:{seconds}
			</p>
			{showStart ? (
				<button data-testId="start">Start</button>
			) : (
				<button data-testId="pause">Pause</button>
			)}
			<button data-testId="reset">Reset</button>
		</div>
	);
}

export default Stopwatch;
