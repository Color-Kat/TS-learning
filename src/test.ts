let str: string = "hellow World";
let isFetching: boolean = true;
let age: number = 14;
let userName: string = "Gustov";
let friends: string[] = [ "Maria", "Matilda", "Rosilde" ];
let enemies: Array<string> = [ "Valera", "Fillip", "Rosilde" ];

// let contacts: Array[][string, number] = [['name', 21312421],['Alex', 312312]];

function sayName (name: string): void {
	console.log(name);
}

type Login = string;
type ID = string | number;
const id: ID = 312;

interface Rect {
	readonly id: string;
	color?: string;
	size: {
		width: number;
		height: number;
	};
}

const square: Rect = {
	id: "trata",
	size: {
		width: 200,
		height: 200
	},
	color: "red"
};
const rectangle: Rect = {
	id: "90angel4x",
	size: {
		width: 80,
		height: 700
	},
	color: "black"
};

const myRect = {} as Rect;

interface RectAndArea extends Rect {
	getArea: () => number;
}
const rectWithArea: RectAndArea = {
	id: "cocos",
	size: {
		width: 250,
		height: 300
	},
	getArea (): number {
		return this.size.width * this.size.height;
	}
};
interface ICLock {
	time: Date;
	setTime(date: Date): void;
}

class Clock implements ICLock {
	time: Date = new Date();

	setTime (date: Date): void {
		this.time = date;
	}
}

interface Styles {
	[key: string]: string;
	color: string;
}

let css: Styles = {
	border: "1px solid black",
	margin: "15px",
	background: "#fff",
	color: "black"
};

enum Memberchip {
	Simple,
	Standart,
	Premium
}

const memberchip = Memberchip.Standart;

function sum (a: number, b: number): number {
	return a + b;
}

function ladder (str: string): string {
	str = str.trim();
	let ladderStr: string = "";
	for (let i = 0; i < str.length; i++) {
		if (i % 2 == 0) ladderStr += str[i].toUpperCase();
		else ladderStr += str[i];
	}
	return ladderStr;
}

interface IPosition {
	x: number | undefined;
	y: number | undefined;
}
interface IMyPositionWithDefault extends IPosition {
	default: null;
}
function position (): IPosition;
function position (a: number): IMyPositionWithDefault;
function position (a: number, b: number): IPosition;

function position (a?: number, b?: number) {
	if (!a && !b) return { x: undefined, y: undefined };
	if (a && !b) return { x: a, y: undefined, default: null };
	if (a && b) return { x: a, y: b };
}

class Typescript {
	version: string;

	constructor (version: string) {
		this.version = version;
	}
	v (): string {
		return "TS version is " + this.version;
	}
}

const ts = new Typescript("1.0.8");

type Engine = {
	"maxSpeed": number;
	"engineVolume": string;
};

abstract class Component {
	abstract render (): void;
	abstract info (): string;
	pagePattern (): string {
		return "abc";
	}
}
class AppComponent extends Component {
	render (): void {
		console.log("rendered");
	}
	info (): string {
		return "empty info";
	}
}
const app = new AppComponent();

class Car {
	readonly model: string;
	readonly numberOfWheels: number;
	// engine: Engine;
	// color: string;
	constructor (model: string, wheels: number, public engine: Engine, public color: string) {
		this.model = model;
		this.numberOfWheels = wheels;
		this.engine = engine;
		this.color = color;
	}
	go (distance: number): number {
		return distance / this.engine.maxSpeed;
	}
}

const myCar = new Car("Ford focus", 4, { maxSpeed: 159, engineVolume: "3l" }, "red");

function trip (x: string | number): string | number {
	if (typeof x === "number") return myCar.go(x);
	else if (typeof x === "string") return "идите к черту, с вашим текстом!";
}

abstract class Page {
	name: string;
	content: string;
}
class Home extends Page {
	name = "home";
	content = "Это главная, мать твою, страница!";
}
class Profile extends Page {
	name = "profile";
	content = "Это не главная, мать твою, страница! Это профиль!";
}
function render (page: Home | Profile): void {
	if (page instanceof Home) console.log("home: " + page.content);
	if (page instanceof Profile) {
		console.clear();
		console.log("profile: " + page.content);
	}
}
let homePage = new Home();
let profilePage = new Profile();

const stringArray: Array<string> = [ "a", "b", "c" ];
const numberArray: Array<number> = [ 1, 2, 3 ];

function reverse<T> (array: T[]): T[] {
	return array.reverse();
}

interface Person {
	name: string;
	age: number;
}
type PersonKeys = keyof Person;
let myName: PersonKeys = "name";

type User = {
	id: number;
	name: string;
	email: string;
	createdAt: Date;
};

let us: User = { id: 213, name: "fd", email: "fds", createdAt: new Date() };

type UserNoMeta1 = Exclude<keyof User, "id" | "createdAt">;
type UserNoMeta2 = Pick<User, "name" | "id">;

let user1: UserNoMeta1 = "name";
console.log(user1);

class Priva {
	private name: string = "gurman";
	content: string = "her";
}
let privet = new Priva();
console.log(privet.content);
