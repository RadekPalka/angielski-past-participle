const word= document.querySelector("#word")
const input= document.querySelector("input")
const btn= document.querySelector("button")
const score= document.querySelector("#score")
let flag= "check"
let index
const wordsInPresent= ["be", "become", "begin", "break", "bring", "build", "buy", "catch", "choose", "come", "cost", "cut", "do", "drink", "drive", "eat"]
const wordsInParticiple= ["been", "become", "begun", "broken", "brought", "built", "bought",  "caught", "chosen", "come", "cost", "cut", "done", "drunk", "driven", "eaten"]

const drawWord= ()=>{
index= Math.floor(Math.random() *wordsInParticiple.length)
word.textContent= wordsInPresent[index]
input.focus()
}
const confirm= ()=>{
    if (flag=== "check"){
        if (input.value.toLowerCase()=== wordsInParticiple[index]){
            score.textContent= "Brawo"
            wordsInParticiple.splice(index, 1)
            wordsInPresent.splice(index, 1)
            if (wordsInParticiple.length===0){
                
                document.body.textContent= "Brawo, odgadłeś wszystkie wyrazy"
                return
            }
        }
        else{
            score.textContent= "Błąd. Prawidłowa odpowiedź to: "+ wordsInParticiple[index]
        }
        btn.textContent="Następny"
        flag= "next"
    }
    else{
        if (wordsInPresent.length>0){
        drawWord()
        flag= "check"
        btn.textContent= "Sprawdź"
        input.value= ""
        score.textContent= ""}
        else{
            score.textContent= ""
        }
    }
    
}

if (wordsInParticiple.length>0) drawWord()

btn.addEventListener("click", confirm)
input.addEventListener("keydown", e=>{
    if (e.key==="Enter") confirm()
})