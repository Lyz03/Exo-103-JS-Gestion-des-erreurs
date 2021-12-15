const myDiv = document.getElementById('div');


try {
    myDiv.innerText = "tentative de mise a jour du texte de mon div";
}
catch (error) {
    alert("l'élément myDiv n'existe pas !");
}
