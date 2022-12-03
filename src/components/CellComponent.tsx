import { click } from "@testing-library/user-event/dist/click";
import React, { FC, useState } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
	cell: Cell;
	selected: Boolean;
	click: (cell: Cell) => void;
}

export const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
	return (
		//  <div className={['cell',cell.color].join(' ')}></div>
		// <div className={'cell ' + cell.color}>
		<div
			className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
			onMouseDown={() => click(cell)}
			style={{ background: cell.available && cell.figure ? "green" : "" }}
		>
			{cell.available && !cell.figure && <div className="available"></div>}

			{cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
		</div>
	);
};

