import React, { FC, useEffect, useState } from "react";
import "./App.css";
import { BoardComponent } from "./components/BoardComponent";
import { LostFigures } from "./components/lostFigures";
import { Timer } from "./components/Timer";
import { Board } from "./models/Board";
import { Colors } from "./models/Colors";
import { Player } from "./models/Player";
const App: FC = () => {
	const [board, setBoard] = useState(new Board());
	const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
	const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
	//начинаем новую партию при монтировании компонента
	useEffect(() => {
		restart();
		setCurrentPlayer(whitePlayer);
	}, []);
	function swapPlayer() {
		setCurrentPlayer(
			currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
		);
	}
	function restart() {
		// начинаем новую партию и создаем новую доску
		const newBoard = new Board();
		// инициализируем столбцы этой доски
		newBoard.initCells();
		// сохраняем ее в состоянии
		newBoard.addFigures();
		setBoard(newBoard);
	}
     function  restartHandlerApp () {
		restart();
		setCurrentPlayer(whitePlayer);
	 }
	return (
		<div className="app">
			<BoardComponent board={board} setBoard={setBoard} 
           currentPlayer ={currentPlayer}
           swapPlayer = {swapPlayer} />
		   <div className="lost-figures">
			<LostFigures  title="Черные фигуры" figures={board.lostBlackFigures}/>
			<LostFigures title="Белые фигуры" figures={board.lostWhiteFigures}/>
		   </div>
		   <Timer currentPlayer={currentPlayer}restart={restartHandlerApp}/>
		</div>
	);
};

export default App;
