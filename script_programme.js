let resize = false 
let move = false
let edit = false

let sourisX
let sourisY


let monPostIt = new PostIt("pt1")
let monPostIt2 = new PostIt("pt2")

monPostIt.AfficherPt()

document.body.addEventListener('click',()=>{
    resize=false
    move=false
    edit=false
})


document.body.addEventListener('mousemove',(e)=>{
    console.log(e)
    sourisX=e.clientX
    sourisY=e.clientY
    if(move==true){
    monPostIt.PositionPt(e.clientX -20, e.clientY-20)
    monPostIt.AfficherPt()}
    else if (resize == true){

        monPostIt.redim(monPostIt.largeurInit+(e.clientX-monPostIt.sourisXInit),
                        monPostIt.hauteurInit+(e.clientY-monPostIt.sourisYInit))
        monPostIt.AfficherPt()
    }
})
/*
monPostIt.newcouleur("gold")
monPostIt.PositionPt(25,350)
monPostIt.AfficherPt()

monPostIt2.PositionPt(25,150)

monPostIt2.TaillePt(150,150)

monPostIt2.newcouleur("pink")
monPostIt2.modifcontenu("textbonjour","Red","20","cursive")

monPostIt2.AfficherPt()
 
*/