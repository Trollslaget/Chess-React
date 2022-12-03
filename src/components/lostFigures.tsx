import React, { FC, useState } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
	title: string;
	figures: Figure[];
}
export const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
	return (
		<div className={'lost'}>
			<h3>{title}</h3>
			{figures.map((figure) => (
				<div key={figure.id}>
					{figure.name}{" "}
					{figure.logo && (
						<img width="20px" height="20px" src={figure.logo} alt="" />
					)}
				</div>
			))}
		</div>
	);
};
