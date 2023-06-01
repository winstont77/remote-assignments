// let node = document.querySelectorAll(".sc-fzoWqW");
// console.log(node[1])
// node[1].style.display = "flex"

document.querySelector('.action-button').addEventListener('click',()=>{
    let node = document.querySelectorAll(".sc-fzoWqW");
    if(node[1].style.display === "none"){
        node[1].style.display = "flex"
    }else{
        node[1].style.display = "none"
    }
})

document.querySelector(".welcome-message-h1").addEventListener("click", e=>{
    if(e.target.innerText!=="Have a Good Time!"){
        e.target.innerText="Have a Good Time!"
    }else{
        e.target.innerText="Welcome Message"
    }
})