// let node = document.querySelectorAll(".sc-fzoWqW");
// console.log(node[1])
// node[1].style.display = "flex"

// document.querySelector('.action-button').addEventListener('click',()=>{
//     let node = document.querySelectorAll(".sc-fzoWqW");
//     if(node[1].style.display === "none"){
//         node[1].style.display = "flex"
//     }else{
//         node[1].style.display = "none"
//     }
// })

// document.querySelector(".welcome-message-h1").addEventListener("click", e=>{
//     if(e.target.innerText!=="Have a Good Time!"){
//         e.target.innerText="Have a Good Time!"
//     }else{
//         e.target.innerText="Welcome Message"
//     }
// })

console.log($(".welcome-message-h1").css("color"))

$(".action-button").click(()=>{
    if($(".sc-fzoWqW:eq(1)").css("display")!=="flex"){
        $(".sc-fzoWqW:eq(1)").css("display","flex")
    }else{
        $(".sc-fzoWqW:eq(1)").css("display","none")
    }
})

$(".welcome-message-h1").click(e=>{
    // console.log($(".welcome-message-h1").text())
    // console.log(e.target.innerText)
    if(e.target.innerText==="Welcome Message"){
        $(".welcome-message-h1").text('Have a Good Time!')
    }else{
        $(".welcome-message-h1").text("Welcome Message")
    }
})