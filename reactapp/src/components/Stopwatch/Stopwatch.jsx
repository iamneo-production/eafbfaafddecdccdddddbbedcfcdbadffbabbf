import { useState, useRef } from 'react';

function formatNumber(value) {
	if (`${value}`.length === 1) {
		return `0${value}`;
	}
	return value;
}

function Stopwatch() {
	// const [hours, setHours] = useState(0);
	// const [minutes, setMinutes] = useState(0);
	// const [seconds, setSeconds] = useState(0);
	const [showStart, setShowStart] = useState(true);
	const [showResume, setshowResume] = useState(false);
	const [timer, setTimer] = useState(0);
	const ref = useRef();

	const hours = Math.floor(timer / (60 * 60));
	const minutes = Math.floor((timer - hours * 60 * 60) / 60);
	const seconds = Math.floor(timer - hours * 60 * 60 - minutes * 60);

	function startClickHandler() {
		setShowStart(false);
		setshowResume(false);
		ref.current = setInterval(() => {
			setTimer((p) => p + 1);
		}, 1000);
	}

	function pauseClickHandler() {
		setshowResume(true);
		clearInterval(ref.current);
	}

	function resetClickHandler() {
		setShowStart(true);
		setshowResume(false);
		setTimer(0);
		clearInterval(ref.current);
		ref.current = null;
	}

	function resumeClickHandler() {
		setshowResume(false);
		ref.current = setInterval(() => {
			setTimer((p) => p + 1);
		}, 1000);
	}

	return (
		<div>
			<p data-testid="time">
				{formatNumber(hours)}:{formatNumber(minutes)}:{formatNumber(seconds)}
			</p>
			{showStart ? (
				<button data-testid="start" onClick={startClickHandler}>
					Start
				</button>
			) : (
				<div>
					{showResume ? (
						<button data-testid="resume" onClick={resumeClickHandler}>
							Resume
						</button>
					) : (
						<button data-testid="pause" onClick={pauseClickHandler}>
							Pause
						</button>
					)}
				</div>
			)}
			<button
				data-testid="reset"
				onClick={resetClickHandler}
				disabled={showStart}
			>
				Reset
			</button>
		</div>
	);
}

export default Stopwatch;
