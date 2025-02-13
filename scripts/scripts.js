document.addEventListener("DOMContentLoaded", function () {

    //oculta as tags section
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    //abertura
    let abertura = document.querySelector("#Abertura");
    if(abertura){
        abertura.style.display = "flex";
        abertura.style.flexDirection = "column";
        abertura.style.alignItems = "center";        
        };

        document.getElementById("botao_tela_inicial").addEventListener("click", function() {

            document.querySelectorAll("section").forEach(section => {
                section.style.display = "none";
            });

            if(abertura){
                abertura.style.display = "flex";
                abertura.style.flexDirection = "column";
                abertura.style.alignItems = "center";        
                };

        });
    
});

function mostrarSecao (id) {
    console.log("foi clicado")
    document.querySelectorAll("section").forEach(secao => {
        secao.style.display = "none";
    });

    let secao = document.querySelector(id);
    console.log(secao)
    if (secao) {
        secao.style.display = "flex";
        secao.style.flexDirection = "column";
        secao.style.alignItems = "center";
    }
};


//Interesses:

document.addEventListener("DOMContentLoaded", function () {    

    document.getElementById("botao-interesses").addEventListener("click", function() {        

        const cardsData = [
            { title: "Card 1", text: "Marcenaria", img: "assets/interesses/marcenaria" },
            { title: "Card 2", text: "Ciclismo", img: "assets/interesses/ciclismo.png" },
            { title: "Card 3", text: "Segurança da Informação", img: "assets/interesses/cyber_security.png" },
            { title: "Card 4", text: "Redes de Computadores", img: "assets/interesses/redes.png" },
            { title: "Card 5", text: "Desenvolvimento Desktop", img: "assets/interesses/dev_desktop.png" },
            { title: "Card 6", text: "Desenvolvimento Web", img: "assets/interesses/dev_web.png" },
            { title: "Card 7", text: "Estudar temas diversos", img: "assets/interesses/estudar.png" },
            { title: "Card 8", text: "Viajar", img: "assets/interesses/viajar.png" },
            { title: "Card 9", text: "Musculação", img: "assets/interesses/musculação.png" },
            { title: "Card 10", text: "Jogos", img: "assets/interesses/jogos.png" },
            { title: "Card 11", text: "Filmes e Séries", img: "assets/interesses/filmes_series.png" }
        ];
        
        const carossel = document.getElementById("carousel");
        let interessesCurrentIndex = 5;
        
        function renderCards() {
            carossel.innerHTML = "";
            cardsData.forEach((card, index) => {
                const cardElement = document.createElement("div");
                cardElement.classList.add("card");
                cardElement.innerHTML = `
                    <h2>${card.title}</h2>
                    <img src="${card.img}" alt="${card.title}">
                    <p>${card.text}</p>
                `;
                
                const distance = Math.abs(interessesCurrentIndex - index);
                let scale, opacity, translateX;
                if (distance === 0) {
                    scale = 1;
                    opacity = 1;
                    translateX = 0;

                } else if (distance === 1) {
                    scale = 0.8;
                    opacity = 0.3;
                    translateX = (index < interessesCurrentIndex ? -320 : 320);

                } else if (distance ===2){
                    scale = 0.6;
                    opacity = 0.2;
                    translateX = (index < interessesCurrentIndex ? -570 : 570);

                } else if (distance === 3){
                    scale = 0.4;
                    opacity = 0.1;
                    translateX = (index < interessesCurrentIndex ? -750 : 750);            


                } else {
                    scale = 0.2;
                    opacity = 0.05;
                    translateX = (index < interessesCurrentIndex ? -800 : 800);
                }
                
                cardElement.style.transform = `translateX(${translateX}px) scale(${scale})`;
                cardElement.style.opacity = opacity;
                carossel.appendChild(cardElement);
            });
        }
        
        window.addEventListener("wheel", (event) => {
            if (event.deltaY > 0 && interessesCurrentIndex < cardsData.length - 1) {
                interessesCurrentIndex++;
            } else if (event.deltaY < 0 && interessesCurrentIndex > 0) {
                interessesCurrentIndex--;
            }
            renderCards();
        });
        
        renderCards();


    });  

});


//Projetos:

document.addEventListener("DOMContentLoaded", function () {    

    document.getElementById("botao-projetos").addEventListener("click", function() {

        const cards = document.querySelectorAll(".projeto-card");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateX(0)";
        }, index * 300); // Atraso progressivo para cada card
    });

    // Tornar os cards clicáveis
    cards.forEach(card => {
        card.addEventListener("click", () => {
            window.open(card.getAttribute("data-url"), "_blank");
        });
    });

    });  

});


//Jornada profissional  (arrumar pois nao está funcionando corretamente) :
//Se der tempo, adicionar mais funcionalidades

document.addEventListener("DOMContentLoaded", function () {    

    document.getElementById("botao-jornadaAcademica").addEventListener("click", function() {

        let currentIndex = 0;
            const cards = document.querySelectorAll(".cardjp");
            function showCard(index) {
                cards.forEach((card, i) => {
                    card.classList.toggle("hidden", i !== index);
                });
            }
            function nextCard() {
                currentIndex = (currentIndex + 1) % cards.length;
                showCard(currentIndex);
            }
            function prevCard() {
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
                showCard(currentIndex);
            }
            setInterval(nextCard, 2000);
            document.addEventListener("keydown", (event) => {
                if (event.key === "ArrowRight") nextCard();
                if (event.key === "ArrowLeft") prevCard();
            });

    });  

});



//Jornada acadêmica:





