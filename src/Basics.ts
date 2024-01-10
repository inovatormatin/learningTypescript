// some data types
let name: string;
let age: number;
let phoneNumber: number;
//  | this sign called union and
//  ? use to make optional data type
let employeeId: string | number;
let hobbies: string[];
let animal: number[];
// A tuple is a typed array with a pre-defined
// length and types for each index
let role: [number, string];
let x: any; // not recommended while dont know the type
let y: unknown; // recommended while dont know the type

// declaring function
let printName: (name: string) => void;

printName = (name) => {
  console.log(name);
};

printName("2");

// difference between void and never
// never return nothing
// void return undefine

// there are two type of alias in typescript
// 1. interface
// 2. type

// interface
export interface Prop1 {
  a: string;
  b?: number;
}

// type
export type Prop2 = {
  c: string;
  d?: number;
};

// combining the properties of alias in interface
export interface Prop3 extends Prop1 {
  e: string;
  f: number;
}

// combining the properties of alias in type
export type Prop4 = Prop2 & {
  g: string;
  h: number;
};

// for todo app
export type TodoTask = {
  id: string;
  title: string;
  isDone: boolean;
};
