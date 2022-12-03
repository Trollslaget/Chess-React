import { Cell } from "./../Cell";
import { Colors } from "./../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";
export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.KING;
	}
	canMove(target: Cell): boolean {
		// если родительский класс возвращает false, то мы тоже не ебемся
		if (!super.canMove(target)) return false;

		const dx = Math.abs(this.cell.x - target.x);
		const dy = Math.abs(this.cell.y - target.y);

		const dz = dx === 1 && dy === 1 ? Math.abs(dx - dy) : 5;

		if (dx === 1 && dy === 0) return true;
		if (dy === 1 && dx === 0) return true;
		if (dz === 0) return true;

		return false;
	}
}