function validerFormulaire() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var age = document.getElementById('age').value;

    if (nom === '' || prenom === '' || age === '') {
        document.getElementById('messageErreur').innerText = "Veuillez remplir tous les champs.";
        document.getElementById('messageErreur').style.display = "block";
        return;
    }

    if (parseInt(age) < 18) {
        document.getElementById('messageErreur').innerText = "Vous devez être majeur pour remplir ce formulaire.";
        document.getElementById('messageErreur').style.display = "block";
        return;
    }
    document.getElementById("myForm").submit();
}
