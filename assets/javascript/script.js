
let addTodo = document.querySelector(".addTodo")
const userTache = document.querySelector("#comment")
const titre = document.querySelector('.titreText')


function rajouter() {

    document.querySelector('.bouton').addEventListener("click", () => {
        const boiteTache = document.createElement('div')
        const boiteText = document.createElement('div')
        const boiteTitre = document.createElement('h3')
        const tache = document.createElement('p')

        const corbeille = document.createElement('img')
        corbeille.src = "/assets/image/corbeille.jpg"
        corbeille.alt = "corbeille"
        boiteTitre.textContent = titre.value
        tache.textContent = userTache.value
        boiteTache.appendChild(boiteText)
        addTodo.appendChild(boiteTache)
        boiteText.appendChild(tache)
        boiteText.appendChild(boiteTitre)
        boiteTache.appendChild(corbeille)
        boiteText.classList.add('boiteText')
        boiteTache.classList.add('boiteTache')

        tache.classList.add('overflowh')
        corbeille.classList.add('corbeille')
        boiteTitre.classList.add('boiteTitre')
        corbeille.addEventListener("click", () => {
            supprimer(boiteTache)
        })
        boiteTache.addEventListener('click', () => {
            hideTache(tache)
        })
        userTache.value = ""
        titre.value = ""
    })

}

function supprimer(value) {
    value.remove()
}

function hideTache(tache) {
    if (tache.classList.contains('anim')) {
        tache.classList.add("anim-reverse")
        tache.classList.remove("anim")
        tache.style.height = "0";
    }else{
        tache.classList.remove("anim-reverse")
        tache.classList.add("anim")
        tache.style.height = "100px";
    }
}




rajouter()
