import { useState, useRef } from 'react';
import './Stopwatch.css';

function formatNumber(value) {
	if (`${value}`.length === 1) {
		return `0${value}`;
	}
	return value;
}

function Stopwatch() {
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

	function initialButton() {
		if (showStart) {
			return (
				<button
					className="button"
					data-testid="start"
					onClick={startClickHandler}
				>
					Start
				</button>
			);
		}

		if (showResume) {
			return (
				<button
					className="button"
					data-testid="resume"
					onClick={resumeClickHandler}
				>
					Resume
				</button>
			);
		}

		return (
			<button
				className="button"
				data-testid="pause"
				onClick={pauseClickHandler}
			>
				Pause
			</button>
		);
	}

	return (
		<div className="stopwatch-wrapper">
			<div className="top-box" />
			<h1 className="header">React Stopwatch</h1>
			<p className="time" data-testid="time">
				{formatNumber(hours)}:{formatNumber(minutes)}:{formatNumber(seconds)}
			</p>
			{initialButton()}
			<button
				data-testid="reset"
				className="button"
				onClick={resetClickHandler}
				disabled={showStart}
			>
				Reset
			</button>
			<div className="bottom-box" />
		</div>
	);
}

export default Stopwatch;
