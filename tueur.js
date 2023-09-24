"user strict"
// un etudiant de mon groupe ma clairement aider a achever ce devoir 
let survivantactuelles;
let caracteristique;
let nom;
let attaque = 2
let e= 0;

let tueur =["jason"=100];
let tabnoms=["justine","adria","manon","quentin","julie"];
let tabcaracteristique=["nerd","blonde","sportif","rebelle","brune"]

class survivants{
    constructor (probmort,probdegats,probmortetdegat,nom,caracteristique){
        this.nom=nom;
        this.probmort=probmort;
        this.caracteristique=caracteristique;
        this.probdegats=probdegats;
        this.probmortetdegat=probmortetdegat;
    }

}
function newsurvivants(survivants) {
    let mort,deg,mortdeg,tot,mul;
    mort= Math.random();
    mortdeg=Math.random();
    deg=Math.rabdom();
    tot= mort + deg + mortdeg;
    mul = 1/tot;
    survivants.nom = tabnoms[random(5)];
    survivants.caracteristique = tabcaracteristique[random(5)];
    survivants.probmort = mort*mul;
    survivants.probdegats = deg*mul;
    survivants.probmortetdegat = mortdeg*mul;
    return survivants;
}

function random(nbr){
    return Math.floor(math.random()*nbr);
}
function dammage(mort,mortdeg,deg) {
    let x;
    let y;
    x= Math.random();
    if(x<mort){
        y=1;
    }
    else if (x<mort+deg){
        y=2;
    } else{
        y=3;
    }
    return y;
}

while (tueur[1] > 0 && i < 5) {
    survivantactuelles = new survivants;
    survivantactuelles = newsurvivants(survivantactuelles);
    console.log("le survivant", survivantactuelles.nom, "intervient c'est un", survivantactuelles.caracteristique);

    while (attaque == 2 && tueur[1] > 0) {
        attaque = dammage(survivantactuelles.probmort, survivantactuelles.probdegats, survivantactuelles.probmortetdegat);
        console.log(survivantactuelles.nom, "attaque");

        switch (attaque) {
            case 1:
                console.log(survivantactuelles.nom, "mort les points de vie de", tueur[0], "restent de", +tueur[1]);
                break;
            case 2:
                tueur[1]= tueur[1]-10;
                console.log(survivantactuelles.nom,"a inflige des degats a",tueur[0],",il lui reste alors", +tueur[1],"points de vie");
                break

            case 3:
                tueur[1]=tueur[1]-15;
                console.log(survivantactuelles.nom,"est mort mais a inflige des degat a",tueur[0],"il lui reste",+tueur[1])
                break; } 
             }
        
attaque=2;
i++;
if(tueur [1] <1){
console.log(tueur[0],"est mort fin de partie les survivant ont gagnes");
}
else if(i==5){
    console.log("les survivants n'ont pas reussi a tuer", tueur[0],"il a gagner ");
}
}