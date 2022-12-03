import React, { FC, useEffect, useRef, useState } from "react";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";

interface TimerProps {
	currentPlayer: Player | null;
	restart: () => void;
}
export const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
	const [blackTime, setBlackTime] = useState(3000);
	const [whiteTime, setWhiteTime] = useState(3000);
	const timer = useRef<null | ReturnType<typeof setInterval>>(null);

	useEffect(() => {
		startTimer();
	}, [currentPlayer]);
	function startTimer() {
		if (timer.current) {
			clearInterval(timer.current);
		}

		const callback =
			currentPlayer?.color === Colors.WHITE
				? decrementWhiteTimer
				: decrementBlackTimer;
		timer.current = setInterval(callback, 1000);
	}
	function restartHandler() {
		restart();
		setWhiteTime(3000);
		setBlackTime(3000);
        
	}
	function decrementBlackTimer() {
		setBlackTime((prev) => prev - 1);
	}
	function decrementWhiteTimer() {
		setBlackTime((prev) => prev - 1);
	}
	return (
		<div>
			<div>
				<button className="timer-btn" onClick={restartHandler}>Restart game</button>
			</div>
			<h2 style={{marginLeft: '18px'}}>Черные - {blackTime}</h2>
			<h2 style={{marginLeft: '18px'}}>Белые - {whiteTime}</h2>
		</div>
	);
};
