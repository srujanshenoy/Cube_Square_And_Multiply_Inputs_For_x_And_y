function square(_number) {
    _square = _number * _number;
    return _square;
}

function cube(_number) {
    _cube = _number * _number * _number;
    return _cube;
}

function multiply(Number_1, Number_2) {
    _Multiply = Number_1 * Number_2;
    return _Multiply;
}

function Return_all(Number_to_square_and_cube, Number_to_multiply_with_Number_to_square_and_cube) {
    console.log("Numbers you entered:");
    console.log("   Number to square and cube: " + Number_to_square_and_cube);
    console.log("   Number to multiply with Number to square and cube: " + Number_to_multiply_with_Number_to_square_and_cube);
    console.log("________________________________________________________________");
    console.log("Answers for the problems:");
    console.log("   Cube of \"Number to square and cube\": " + cube(Number_to_square_and_cube));
    console.log("   Square of \"Number to square and cube\": " + square(Number_to_square_and_cube));
    console.log("   Product of the two numbers you entered: " + multiply(Number_to_square_and_cube, Number_to_multiply_with_Number_to_square_and_cube));
}
x = /* Put a number here=>> */ 3;
y = /*Put a number here =>>*/ 3;

console.log(Return_all(x, y));
