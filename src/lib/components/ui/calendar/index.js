import { Calendar as CalendarPrimitive } from "bits-ui";
import Root from "./calendar.svelte";

const Header = CalendarPrimitive.Header;
const Grid = CalendarPrimitive.Grid;
const GridHead = CalendarPrimitive.GridHead;
const GridBody = CalendarPrimitive.GridBody;
const GridRow = CalendarPrimitive.GridRow;
const HeadCell = CalendarPrimitive.HeadCell;
const Cell = CalendarPrimitive.Cell;
const Day = CalendarPrimitive.Day;
const PrevButton = CalendarPrimitive.PrevButton;
const NextButton = CalendarPrimitive.NextButton;
const Heading = CalendarPrimitive.Heading;
const MonthSelect = CalendarPrimitive.MonthSelect;
const YearSelect = CalendarPrimitive.YearSelect;

// Create composite components for easier usage
const Months = "div";
const Month = "div";
const Caption = "div";
const Nav = "div";

export {
	Root,
	Months,
	Month,
	Header,
	Caption,
	Grid,
	GridHead,
	GridBody,
	GridRow,
	HeadCell,
	Cell,
	Day,
	Nav,
	PrevButton,
	NextButton,
	Heading,
	MonthSelect,
	YearSelect,
	//
	Root as Calendar,
};