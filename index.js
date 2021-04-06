

const myEmojis = ["👨‍💻", "⛷", "🍲"]

for(let i=0;i<myEmojis.length;i++){
    console.log(myEmojis[i])
}

// console.log(emojiContainer)
renderEmojiContainer()
function renderEmojiContainer(){
    let emojiContainer = document.getElementById("emojiContainer")
    emojiContainer.innerHTML = ""
    for(let i=0;i<myEmojis.length;i++){
        let spanTag = document.createElement("span")
        spanTag.textContent = myEmojis[i]
        emojiContainer.append(spanTag);
    }

}

// renderEmojiContainer()

let inputTag = document.getElementById("emoji")

let addToEndBtn = document.getElementById("push-btn")

addToEndBtn.addEventListener("click",function(){
    if(inputTag.value!=""){
    myEmojis.push(inputTag.value) 
    renderEmojiContainer()
    }
})


let addToBeginingBtn = document.getElementById("unshift-btn")

addToBeginingBtn.addEventListener("click",function(){
    if(inputTag.value!=""){
    myEmojis.unshift(inputTag.value)
    renderEmojiContainer()
    }
})


let popBtn = document.getElementById("pop-btn")

popBtn.addEventListener("click",function(){

    myEmojis.pop()
    renderEmojiContainer()

})


let shiftBtn = document.getElementById("shift-btn")

shiftBtn.addEventListener("click",function(){

    myEmojis.shift()
    renderEmojiContainer()

})
