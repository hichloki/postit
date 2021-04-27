let mouseX
let mouseY

 document.body.addEventListener('mousemove', deplace);
 function deplace(e){
     mouseX=e.clientX;
     mouseY=e.clientY;
 }



let monPostIt = new PostIt("pt1")
let monPostIt2 = new PostIt("pt2")


monPostIt.newcouleur("gold")
monPostIt.PositionPt(25,350)
monPostIt.AfficherPt()

monPostIt2.PositionPt(25,150)

monPostIt2.TaillePt(150,150)

monPostIt2.newcouleur("pink")
monPostIt2.modifcontenu("textbonjour","Red","20","cursive")

monPostIt2.AfficherPt()

function MovePt(){
    document.body.addEventListener('mousemove',  e=>{
        mouseX=e.clientX;
        mouseY=e.clientY;
    })
}