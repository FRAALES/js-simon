
// Visualizzare in pagina 5 numeri casuali:
// 1. Devo creare un array con 5 numeri;
// 2. Con un ciclo for gli dico di generare numeri casuali (tra 1 e 100) finchè non ne genera 5;

let randomNumbers = ["1", "2", "3", "4", "5"];
for (let i = 1; i < randomNumbers.length; i++){
    console.log(randomNumbers[i]);
};


let x = Math.floor((Math.random() * 10) + 1);





// Da lì parte un timer di 30 secondi:
//Quando il ciclo for ha finito di generare i 5 numeri parte un countdown.





// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().



// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
