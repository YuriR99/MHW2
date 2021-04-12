function main(){
    for(c in contenuti){
            let cont = document.createElement("div");
            cont.setAttribute("class","D");
            let cont2 = document.createElement("div");
            cont2.setAttribute("class","box");
            let cont3 = document.createElement("div");
            cont3.setAttribute("class","N");
            cont3.setAttribute("id","Det");
            const preferiti = document.createElement("a");
            let star = document.createElement("img");
            star.setAttribute("class","star");
            star.src="star black.png";
            preferiti.appendChild(star);
            let cit = document.createElement("h1");
            cit.textContent=contenuti[c].citta;
            let img = document.createElement("img");
            img.setAttribute("class","imgH");
            img.src=contenuti[c].immagine;
            const capo = document.createElement("br");
            const St = document.createElement("strong");
            St.textContent = "Piu Informazioni";
            let show = document.createElement("a");
            show.appendChild(St);
            let S = document.createElement("p");
            S.textContent=contenuti[c].stelle;
            let V = document.createElement("p");
            V.textContent = contenuti[c].voto;
            let nH = document.createElement("p");
            nH.textContent = contenuti[c].nHotel;
            cont2.appendChild(cit);
            cont2.appendChild(preferiti);
            cont3.appendChild(S);
            cont3.appendChild(V);
            cont3.appendChild(nH);
            cont.appendChild(cont2);
            cont.appendChild(img);
            cont.appendChild(capo);
            cont.appendChild(show);
            cont.appendChild(cont3);
            hotel.appendChild(cont);
            preferiti.addEventListener("click", AggPreferiti);
            show.addEventListener("click", Mostra);
        }
}
addEventListener('keyup',(e) => {
    console.log(e.target.value);
    const search = e.target.value.toUpperCase();
    let hotel2= document.querySelectorAll(".D");
    for(c of hotel2){
        console.log(c);
        let H = c.querySelector("h1").textContent;
        if (H.toUpperCase().indexOf(search) > -1){
            c.classList.remove("N");
            console.log(c.style);
        }else{
            c.classList.add("N");
        }
    }
})

function AggPreferiti(event){
        Pref.classList.remove("N");
        let Pref2 = document.querySelector("#ImgP");
        let P = document.createElement("div"); 
        let P2 = document.createElement("div");
        P2.setAttribute("class","box");
        const Preferito = document.createElement("a");
        const stella = document.createElement("img");
        stella.setAttribute("class","star");
        stella.src="star.png";
        Preferito.appendChild(stella);
        let C = document.createElement("h1");
        C.textContent = event.currentTarget.parentNode.parentNode.querySelector("h1").textContent;
        let img2 = document.createElement("img");
        img2.setAttribute("class","imgH");
        img2.src = event.currentTarget.parentNode.parentNode.querySelector(".imgH").src;
        console.log(event.currentTarget.parentNode.parentNode);
        P2.appendChild(C);
        P2.appendChild(Preferito);
        P.appendChild(P2);
        P.appendChild(img2);
        Pref2.appendChild(P);
        event.currentTarget.removeEventListener("click",AggPreferiti);
        Preferito.addEventListener("click", Remove);
}

function Remove(event){
        let hotel2 = document.querySelectorAll(".D");
        let Pref2 = document.querySelector("#ImgP");
        Pref2.removeChild(event.currentTarget.parentNode.parentNode);
        let contatore = Pref.querySelectorAll("#ImgP div").length;
        if(contatore == 0){
            Pref.classList.add("N");
        }
        for(c of hotel2)
        {
            let H = c.querySelector("h1").textContent;
            if(H.indexOf(event.currentTarget.parentNode.querySelector("h1").textContent) >-1){
                c.querySelector("a").addEventListener("click", AggPreferiti);
            }
        }
}

function Mostra(event){
    console.log(event.currentTarget.parentNode.querySelector("strong"));
    let pul = event.currentTarget;
    event.currentTarget.parentNode.querySelector("strong").textContent = "Meno Informazioni";
    event.currentTarget.parentNode.querySelector("#Det").classList.remove("N");
    console.log(event.currentTarget.parentNode);
    pul.addEventListener("click", Nascondi);
}
function Nascondi(event){
    event.currentTarget.parentNode.querySelector("#Det").classList.add("N");
    event.currentTarget.parentNode.querySelector("strong").textContent = "Piu Infomazioni";
    event.currentTarget.removeEventListener("click", Nascondi);
    event.currentTarget.addEventListener("click", Mostra);
}

const hotel = document.querySelector("#ImgS");
const Pref = document.querySelector("#Preferiti");
const searchBar = document.getElementById('Ricerca');
console.log(searchBar);

main();



