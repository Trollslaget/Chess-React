import React, { FC, useEffect, useRef, useState } from "react";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";

interface TimerProps {
	currentPlayer: Player | null;
	restart: () => void;
	DeadKing: Colors | null
}
export const Timer: FC<TimerProps> = ({ currentPlayer, restart,DeadKing }) => {
	const defaultTime = 3000;
	const [blackTime, setBlackTime] = useState(defaultTime);
	const [whiteTime, setWhiteTime] = useState(defaultTime);
	const timer = useRef<null | ReturnType<typeof setInterval>>(null);
	const [winner, setWinner] = useState<null  | Colors>(null);
	useEffect(() => {
		if (whiteTime <= 0) {
			console.log("winner black");
			setWinner(Colors.BLACK);
		}
		if (blackTime === 0) {
			setWinner(Colors.WHITE);
		}
		if( DeadKing === Colors.BLACK) {
			setWinner(Colors.WHITE);
		}
		if( DeadKing === Colors.WHITE) {
			setWinner(Colors.BLACK);
		}
	}, [blackTime, whiteTime]);
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
		setWhiteTime(defaultTime);
		setBlackTime(defaultTime);
		setWinner(null);
	}
	function decrementBlackTimer() {
		setBlackTime((prev) => prev - 1);
		
		
	}
	function decrementWhiteTimer() {
	

		setWhiteTime((prev) => prev - 1);

	}
	return (
		<>
			<div className="timer-btn-container">
				<button className="timer-btn" onClick={restartHandler}>
					Restart game
				</button>
			</div>
			{winner === Colors.BLACK || winner === Colors.WHITE  ? (
				<h1 style={{ marginLeft: "-18px" }}> Победитель - {winner}</h1>
			) : (
				<div>
					<h2 style={{ marginLeft: "18px" }}>Черные - {blackTime} сек.</h2>
					<h2 style={{ marginLeft: "18px" }}>Белые - {whiteTime} сек.</h2>
				</div>
			)}
		</>
	);
};
