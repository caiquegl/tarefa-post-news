const apiKey = "f8600ee8504b461daaa7aa623d07f265";
const baseApi = "https://newsapi.org/v2/";
const reloNews = document.getElementById("reNews");
const reloTec = document.getElementById("reTec");


function getNoticias() {

    fetch(`${baseApi}top-headlines?country=br&apiKey=${apiKey}`)
    .then(function (resultado){
        return resultado.json()
    })
    .then(function (resultadoNews){
        let cardNews = document.getElementById("listaDeNoticias");


        cardNews.innerHTML="";



        resultadoNews.articles.forEach(noticia => {
            cardNews.innerHTML += `
            <div class="col-3" id="noticiasPrincipais">
            <div class="card" >
            <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${noticia.title}</h5>
              <p class="card-text">${noticia.description}</p>
              <a href="${noticia.url}" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>`

        }); 

    })
}

function reload(){
    let cardNews = document.getElementById("listaDeNoticias");

    cardNews.innerHTML="";

    

        fetch(`${baseApi}top-headlines?country=br&apiKey=${apiKey}`)
    .then(function (resultado){
        return resultado.json()
    })
    .then(function (resultadoNews){
        let cardNews = document.getElementById("listaDeNoticias");


        cardNews.innerHTML="";



        resultadoNews.articles.forEach(noticia => {
            cardNews.innerHTML += `
            <div class="col-3" id="noticiasPrincipais">
            <div class="card" >
            <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${noticia.title}</h5>
              <p class="card-text">${noticia.description}</p>
              <a href="${noticia.url}" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>`

        }); 

    })

    
}

function reloadTec(){

    let cardNews = document.getElementById("listaDeNoticias");

    cardNews.innerHTML="";

    

    fetch(`${baseApi}top-headlines?country=br&category=technology&apiKey=${apiKey}`)
    .then(function (resultado){
        return resultado.json()
    })
    .then(function (resultadoNews){
        let cardNews = document.getElementById("listaDeNoticias");


        resultadoNews.articles.forEach(noticia => {
            cardNews.innerHTML += `
            <div class="col-3" >
            <div class="card" >
            <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${noticia.title}</h5>
              <p class="card-text">${noticia.description}</p>
              <a href="${noticia.url}" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>`

        }); 
    })



}

function getTecnologia(){
    let cardNews = document.getElementById("listaDeNoticias");

    cardNews.innerHTML="";

    reloNews.style.display = "none";
    reloTec.style.display = "block";


    fetch(`${baseApi}top-headlines?country=br&category=technology&apiKey=${apiKey}`)
    .then(function (resultado){
        return resultado.json()
    })
    .then(function (resultadoNews){
        let cardNews = document.getElementById("listaDeNoticias");


        resultadoNews.articles.forEach(noticia => {
            cardNews.innerHTML += `
            <div class="col-3" >
            <div class="card" >
            <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${noticia.title}</h5>
              <p class="card-text">${noticia.description}</p>
              <a href="${noticia.url}" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>`

        }); 
    })

}





