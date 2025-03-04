//  Ajouter un chiffre ou un opérateur à l'affichage
function appendNumber(number) {
    document.getElementById("result").value += number;
}

// Ajouter un opérateur
function appendOperator(operator) {
    document.getElementById("result").value += operator;
}

// Effacer tout l'affichage
function clearDisplay() {
    document.getElementById("result").value = '';
}

// Fonction pour supprimer le dernier caractère
function deleteLast() {
    let display = document.getElementById("result").value;
    document.getElementById("result").value = display.slice(0, -1);
}

// Fonction pour calculer le résultat
function calculateResult() {
    try {
        let display = document.getElementById("result").value;
        let result = eval(display);
        document.getElementById("result").value = result;
    } catch (error) {
        alert("Expression invalide !");
    }
}
