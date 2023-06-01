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


document.querySelector('code').innerHTML=`function groupByKey(input) {
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