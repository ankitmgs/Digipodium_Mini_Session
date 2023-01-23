const nums = [1, 2, 3, 4, 5, 6];

let new_nums = [];
for (let i of nums) {
  // console.log(i * 2);
  new_nums.push(i * 2);
}

console.log(new_nums);

const new_nums2 = nums.map((n) => {
  return n * 5;
});

// const new_nums2 = nums.map((n) => n * 2);

console.log(new_nums2);

const filtered_nums = nums.filter((i) => {
  return i % 2 == 0;
})

console.log(filtered_nums);
