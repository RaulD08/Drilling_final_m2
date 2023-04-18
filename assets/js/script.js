var url = "https://digimon-api.vercel.app/api/digimon"

fetch(url)
.then(response => response.json())
.then(datos => {
    console.log(datos)
    console.log(datos[1].name)
    
    var contenido = document.querySelector("#contenido")
    for (let item of datos) {
        contenido.innerHTML+=`
        
                <div class="col">
                  <div class="card h-100">
                    <img src="${item.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">Nivel: ${item.level}</p>
                    </div>
                  </div>
                </div>

        `
    }
    $(".card").click(function(){
        $(this).addClass("activa")
        $("#overlay").fadeIn(300)
        $("#overlay").css("display","block")
    })
    $("#overlay").click(function(){
        $(this).css("display","none")
        $(".card").removeClass("activa")
        $("#cardRnd").css("display","none")
    })
    /*$("#oscuro").Select(function(){
        $("#fondo").css("background", "linear-gradient(#FECC3D, #000000)")
    })*/

    $("#aleatorio").click(function(){
        var cardRnd = document.querySelector("#cardRnd")
        numRnd=(parseInt(Math.random() * 209))
        cardRnd.innerHTML=`
        
                <div class="col">
                  <div class="card activa h-100">
                    <img src="${datos[numRnd].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${datos[numRnd].name}</h5>
                      <p class="card-text">Nivel: ${datos[numRnd].level}</p>
                    </div>
                  </div>
                </div>

        `
        $("#cardRnd").css("display","block")
        $("#overlay").fadeIn(300)
        $("#overlay").css("display","block")
        console.log(datos.length)
        console.log(parseInt(Math.random() * 209))
    })

    $('#oscuro').change(function() {
        $('#fondo').toggleClass('dark-mode');
    });
    
    

    
})

/*
document.querySelector("#img-poster").src=datos.poster
    document.querySelector("#titulo").innerHTML+=`
            ${datos.title}
        `
    document.querySelector("#sinopsis").innerHTML+=`
            ${datos.synopsis}
        `
    document.querySelector("#tituloRoman").innerHTML+=`
            <p class="subTitulo">Título romanizado:</p> ${datos.hepburn}
        `
    document.querySelector("#estreno").innerHTML+=`
            <p class="subTitulo">Fecha de estreno:</p> ${datos.release}
        `
    document.querySelector("#director").innerHTML+=`
        <p class="subTitulo">Director:</p> ${datos.director}
    `
    
*/