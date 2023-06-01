function groupByKey(input) {
    let grouped = {};
  
    input.map(({ key, value }) => {
      grouped[key] = (grouped[key] || 0) + value;
      console.log(grouped[key])
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