let resize = false 
let move = false
let edit = false

let sourisX
let sourisY

let tabPostIt= []
let numCase = 0

let boutAjout=document.getElementById('AjBout')

function nbAleat(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

boutAjout.addEventListener('click' ,()=>{
    numCase=tabPostIt.length
    tabPostIt.push(new PostIt(numCase))
    let col = nbAleat(0, 5);
    if(col == 0){coule = "Gold"}
    if(col == 1){coule = "green"}
    if(col == 2){coule = "crimson"}
    if(col == 3){coule = "coral"}
    if(col == 4){coule = "grey"}
    if(col == 5){coule = "Pink"}

    tabPostIt[numCase].newcouleur(coule)
    tabPostIt[numCase].AfficherPt()
})







document.body.addEventListener('click',()=>{
    resize=false
    move=false
    edit=false
})


document.body.addEventListener('mousemove',(e)=>{
    
    sourisX=e.clientX
    sourisY=e.clientY

    if(move==true){
    tabPostIt[numCase].PositionPt(e.clientX - 25, e.clientY-25)
    tabPostIt[numCase].AfficherPt()
}

    else if (resize == true){

        tabPostIt[numCase].redim(tabPostIt[numCase].largeurInit+(e.clientX-tabPostIt[numCase].sourisXInit),
                        tabPostIt[numCase].hauteurInit+(e.clientY-tabPostIt[numCase].sourisYInit))
        tabPostIt[numCase].AfficherPt()
    }

})
                
                //* Version Alexis
                //*tabPostIt[0].modifcontenu(tabPostIt[0].text["contenu"].slice(0,tabPostIt[0].text["contenu"].length-1)+(tabPostIt[0].text["contenu"].slice(tabPostIt[0].text["contenu"].length)))

                //*Version Prof
                //*tabPostIt[0].modifcontenu(tabPostIt[0].text["contenu"].substr(0,tabPostIt[0].text['contenu'].length-1))
                //*tabPostIt[0].AfficherPt()
            

    
            document.body.addEventListener('keypress', (e)=>{
                if(edit == true){
                    if(e.key=='Enter'){
                        tabPostIt[numCase].modifcontenu(tabPostIt[numCase].text["contenu"] + "</br>")
                        tabPostIt[numCase].AfficherPt()
                    }else if(e.key == " "){
                        tabPostIt[numCase].modifcontenu(tabPostIt[numCase].text['contenu'] + "&nbsp;")
                        tabPostIt[numCase].AfficherPt()
                    }else{
                        tabPostIt[numCase].modifcontenu(tabPostIt[numCase].text['contenu'] +e.key)
                        tabPostIt[numCase].AfficherPt()
                        
                    }
                }
            })
           
            document.body.addEventListener('keydown', (e)=>{
                if(e.key == 'Backspace'){
                    // str.slice(0, str.length-1)
                    tabPostIt[numCase].modifcontenu(tabPostIt[numCase].text['contenu'].slice(0, tabPostIt[numCase].text["contenu"].length-1))
                    tabPostIt[numCase].AfficherPt()
                } 
           
            })

setInterval(inter, 50)



function inter() {

    document.querySelector('#etaVar').innerHTML = "Move : " + move.toString() + "| Resize : " + resize.toString() + "| Edit : " + edit.toString() + "| SourisX : " + sourisX + "px | SourisY : " + sourisY + "px"

}
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