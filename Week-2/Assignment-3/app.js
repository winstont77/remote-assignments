function count(input) {
  let obj = {};
  input.map(index=>{
    obj[index] = (obj[index]||0) + 1;
  })
  return obj
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}



function groupByKey(input) {
  let grouped = {};

  input.map(({ key, value }) => {
    grouped[key] = (grouped[key] || 0) + value;
    // console.log(grouped[key])
  });

  return grouped;
}
  
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(groupByKey(input2));


document.querySelector('code').innerHTML=`
function count(input) {
  let obj = {};
  input.map(index=&gt{
    obj[index] = (obj[index]||0) + 1;
  })
  return obj
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}




function groupByKey(input) {
  let grouped = {};

  input.map(({ key, value }) =&gt {
    grouped[key] = (grouped[key] || 0) + value;
    //console.log(grouped[key])
  });

  return grouped;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
`

document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
});