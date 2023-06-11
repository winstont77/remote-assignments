document.querySelector('button').addEventListener('click',e=>{
    let input = document.querySelector('input').value;

    $.get(`http://localhost:3000/data?number=${input}`, function(data, status){
        console.log(data);
    });
})