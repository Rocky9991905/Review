c1onst anyTypeString = [];
const anyTypeString2: any[] = [];

const stringArr = ["Hello", "how", "are", "you"];
const stringArr2: string[] = ["Hello", "how", "are", "you"];
// X - stringArr.push(34)

const strAndNum = ["Hi", 143];
const strAndNum2: (string | number)[] = ["Hi", 143];
// X - strAndNum2[0](boolean)

const mixedData = ["bye", true, 77];
const mixedData2: (string | boolean | number)[] = ["bye", true, 77];
