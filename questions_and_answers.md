###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>A</b></summary>
<p>

#### Answer: ?

<i>we declared a variable called greeting, but then we assign an empty object to  greetign. greeting remains undefined, and greetign becomes an empty object.</i>

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

<details><summary><b>C</b></summary>
<p>

#### Answer: ?

<i>in this case we'll get 12 as string , 
the result will be a string containing the number and the string concatenated together.</i>

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

<details><summary><b>A</b></summary>
<p>

#### Answer: ?

<i>In these operations, food array will be unchanged. It still contains the original food items ["🍕", "🍫", "🥑", "🍔"]. The change we made was in the info object.</i>

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

<details><summary><b>B</b></summary>
<p>

#### Answer: ?

<i>We have a function sayHi that takes one parameter - name, and returns a message with the provided name. when we call sayHi() in the console.log, we don't provide any argument. This will result undefined,</i>

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

<details><summary><b>C</b></summary>
<p>

#### Answer: ?

<i>The forEach loop will execute the callback for each element in the array. For the truthy values, it will increment count by 1 for each of them.</i>

</p>
</details>