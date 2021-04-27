class PostIt {

    x;
    y;
    couleur;
    largeur;
    longueur;
    id;
    text = {contenu:"",couleur:"",police:"",style:""};
    hauteurInit
    largeurInit
    sourisXInit
    sourisYInit
    

    constructor(id){
        this.x=250
        this.y=100
        this.couleur="yellow"
        this.largeur=150
        this.longueur=150
        this.id=id
        this.text["contenu"]=""

        // Ecriture version Js ( this.text.contenu="" )

        this.text["couleur"]=""
        this.text["police"]=""
        this.text["style"]=""
    }
   
    AfficherPt(){
        //* On vérifie si l'élement existe sinon on le crée
        let Pt = document.getElementById(this.id)

        if(Pt ===null){

            //* On crée la div du PostIt et on lui assigne un nouvel ID
            Pt =document.createElement('div')
            Pt.id=this.id

            //* on ajoute l'élement dans le body
            document.body.appendChild(Pt)
            //deplacement du drag
          /*  Pt.addEventListener('dragend' , (e) =>{
                this.x=e.screenX - Math.floor(this.largeur/2)
                this.y=e.screenY - this.longueur
                this.AfficherPt() 
            }) */
        }
//* On passe à la partie css du postit

Pt.style.position = "fixed"
Pt.style.backgroundColor = this.couleur
Pt.style.width = this.largeur + "px"
Pt.style.height = this.longueur + "px"
Pt.style.top = this.y + "px"
Pt.style.left = this.x + "px"
Pt.draggable = true


//* on passe l'élement en html
Pt.innerHTML=this.text["contenu"]
//* Css du contenu
Pt.style.color=this.text["couleur"]
Pt.style.fontSize=this.text["police"] + "px" 
Pt.style.fontFamily=this.text["style"]

//* MENU

let menu = document.createElement('div')

menu.style.height = "20px"
menu.style.width = (this.largeur-5) + "px"
menu.style.border ='1px solid black'
menu.style.borderRadius = "15px"
menu.style.position = "absolute"
menu.style.bottom ="0"
menu.style.right ="0"
Pt.appendChild(menu)

//* Boutons 

//move
let bout1 = document.createElement("i")
bout1.classList.add('fas')
bout1.classList.add('fa-arrows-alt')

bout1.addEventListener('click', (e)=>{
    move = true
    e.stopPropagation()
})

menu.appendChild(bout1)

//edition
let bout2=document.createElement("i")
bout2.classList.add('fas')
bout2.classList.add('fa-edit')

bout2.addEventListener('click',(e)=>{
    edit =true
    e.stopPropagation()
})

menu.appendChild(bout2)


//resize
let bout3=document.createElement("i")
bout3.classList.add('fas')
bout3.classList.add('fa-ruler-horizontal')

bout3.addEventListener('click', (e)=>{
    resize = true

    this.hauteurInit=this.largeur
    this.largeurInit=this.longueur
    this.sourisXInit=sourisX
    this.sourisYInit=sourisY

    e.stopPropagation()
})

menu.appendChild(bout3)
}
   
    PositionPt(x,y){
        this.x=x
        this.y=y
    }


    TaillePt(largeur,longueur){
this.largeur=largeur
this.longueur=longueur
    }

    newcouleur(couleur){
this.couleur=couleur
    }
    
    modifcontenu(text,couleur,police,style){
this.text["contenu"]=text
this.text["couleur"]=couleur
this.text["police"]=police
this.text["style"]=style

    }

    redim(larg,haut){
    this.largeur=larg
    this.longueur=haut
    }
   
    
}

