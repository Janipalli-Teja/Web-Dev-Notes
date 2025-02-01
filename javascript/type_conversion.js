// String conversion happens when we need the string form of a value.  String()
let val=true
alert(typeof(val)) //--> boolean --true

val=String(val)
alert(typeof(val))  //--> string --true

// Numeric conversion in mathematical functions and expressions happens automatically.  Number()

let str="123"
let num=Number(str)
alert(typeof num)

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

// Boolean conversion   Boolean()

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false