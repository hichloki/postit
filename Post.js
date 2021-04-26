class PostIt {

    x;
    y;
    couleur;
    largeur;
    longueur;
    id;

    constructor(id){
        this.x=250
        this.y=100
        this.couleur="yellow"
        this.largeur=150
        this.longueur=150
        this.id=id
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
        }
//* On passe à la partie css du postit

Pt.style.position = "fixed"
Pt.style.backgroundColor = this.couleur
Pt.style.width = this.largeur + "px"
Pt.style.height = this.longueur + "px"
Pt.style.top = this.y + "px"
Pt.style.left = this.x + "px"
        
    }
    PositionPt(){}
    TaillePt(){}
    RedimmensionPt(){}
    TextePt(){}
    ModifTextePt(){}
    DeplacePt(){}
}