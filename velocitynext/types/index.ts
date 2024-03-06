import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
	title: string,
	containerStyles?: string;
	handleClick?:
	MouseEventHandler<HTMLButtonElement>;
	btnType?: "button" | "submit";
}

export interface SearchMenuProps {
	manufacturer: string;
	setMenu: (menu: string) => void;
}