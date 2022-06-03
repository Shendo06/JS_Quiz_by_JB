
function topDepart(nb) {
    for(let i=nb; i>=1; i--){
        console.log(i);
    }
    console.log('Feu !');
};

let questions = [
    `Quel est l'age du capitaine ?
    1 - 42 
    2 - 101
    3 -10`,
    
    `Quelle est la différence entre un pigeon ?
    1 - Glouuu 
    2 - Uh ?
    3 - La longueur des pattes`,
    
    `Qu'est ce qui est jaune et qui attend ?
    1 - Jonathan 
    2 - Hommer Simpson
    3 - Un citron pressé`,

    `Ca fait quoi 1 + 1?
    1 - 2 
    2 - 11, et ça c'est beau
    3 - 3`
    ]

let reponses = [1,3,1,2]

//alert('Bienvenu sur ce quiz !' + "\n" + questions.length + 'questions seront posés' );

topDepart(10);

let compteurBonnesReponses = 0

for (let i = 0; i < questions.length; i++){
    let intituleQuestion = "Question "+ (i+1) + "/" + questions.length+ "\n";
    let reponseUtilisateur = prompt(intituleQuestion + questions[i]);
    let bonneRéponse = reponses[i];

    console.log(reponseUtilisateur);
    if(reponseUtilisateur == bonneRéponse){
        console.log("t'as gagné !");
        compteurBonnesReponses = compteurBonnesReponses+1;
    }
    else{
        console.log("Bruuh t'es nul");
    };
}

alert(compteurBonnesReponses+"réponses sur " +questions.length +" correctes");