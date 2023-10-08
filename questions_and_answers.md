<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Ans: B: ReferenceError: greetign is not defined

Explanation:there is a typo in the variable name. Instead of "greeting," "greetign" is used. As a result, JavaScript will throw a ReferenceError because "greetign" is not defined as a variable. The correct variable name should be "greeting" to assign an empty object to it and log it as "{}".
</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>C: "12"

Explanation: The sum function takes two parameters a and b and attempts to add them together. When i call sum(1, "2"), JavaScript will automatically perform type coercion and convert the number 1 to a string to match the data type of "2". As a result, it concatenates the two strings, resulting in the string "12" as the output.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>A: ['🍕', '🍫', '🥑', '🍔']

Explanation: The info.favoriteFood is initially assigned the value of food[0], which is "🍕". Later, it is reassigned to "🍝". However, this reassignment does not affect the food array. So, when you log food, it remains unchanged and prints ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>B: Hi there, undefined

Explanation: The sayHi function expects a name parameter, but when you call it with sayHi(), you do not provide any argument. In JavaScript, when a function is called without the expected argument(s), the missing parameters are assigned the value undefined. So, the function returns "Hi there, undefined" because name inside the function is undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>C: 3

Explanation: The code iterates through the nums array, and for each non-zero element, it increments the count variable and replaces the non-zero element with 3. Since there are three non-zero elements (1, 2, and 3) in the nums array, the final value of count is 3.</i>

</p>
</details>
