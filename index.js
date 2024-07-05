const questions = [
    {
        id: "1",
        question: "Em uma reação o ferro reage com oxigênio para produzir óxido de ferro (II). Calcule a massa deste produto formada na reação de 112 g de ferro com 32 g de oxigênio.",
        image: "",
        options: [
            {isCorrect:true, answer:"144 g de óxido de ferro (II)"},
            {isCorrect: false, answer:"134 g de óxido de ferro (II)"},
            {isCorrect:false, answer:"112 g de óxido de ferro (II)"},
            {isCorrect:false, answer:"11,2 g de óxido de ferro (II)"},
        ]
    },
    {
        id: "2",
        question: "No processo de eletrólise da água formam-se gás hidrogênio e gás oxigênio. Recordando a Lei de Conservação de Massas de Lavoisier. Determine a massa de oxigênio formada.",
        image: "./public/images/fig2.png",
        options: [
            {isCorrect:true, answer:"64 g de oxigênio"},
            {isCorrect: false, answer:"18 g de oxigênio"},
            {isCorrect:false, answer:"32 g de oxigênio"},
            {isCorrect:false, answer:"16 g de oxigênio"},
        ]
    },
    {
        id: "3",
        question: "Na combustão completa do metano são gerados gás carbônico e água. A tabela abaixo mostra resultados de dois experimentos. Recordando as Leis de Lavoisier e de Proust (Proporções fixas), calcule os valores faltantes.",
        image: "./public/images/fig3.png",
        options: [
            {isCorrect:true, answer:"x = 44 g, y = 16 g, w = 11 g, z = 9 g"},
            {isCorrect: false, answer:"x = 11 g, y = 4 g, w = 2,75 g, z = 2,25 g"},
            {isCorrect:false, answer:"x = 88 g, y = 64 g, w = 44 g, z = 16 g"},
            {isCorrect:false, answer:"x = 22 g, y = 8 g, w = 5,5 g, z = 4,5 g"},
        ]
    },
    {
        id: "4",
        question: "Cálcio reage com oxigênio para formar óxido de cálcio. Aplicando as leis de Lavoisier e de Proust, preencha a tabela abaixo para os resultados de dois experimentos. ",
        image: "./public/images/fig4.png",
        options: [
            {isCorrect:true, answer:"t = 8 g, w = 8 g, r = 11,2 g"},
            {isCorrect: false, answer:"t = 4 g, w = 4 g, r = 5,6 g"},
            {isCorrect:false, answer:"t = 16 g, w = 16 g, r = 22,4 g"},
            {isCorrect:false, answer:"t = 8 g, w = 16 g, r = 50 g"},
        ]
    },
    {
        id: "5",
        question: "Carbonato de cálcio quando aquecido se decompõe formando gás carbônico e óxido de cálcio. A decomposição completa de 10 g de cabonato de cálcio produziu 4,4 g de gás carbônico. Determine a massa de óxido de cálcio formada nesta reação.",
        image: "",
        options: [
            {isCorrect:true, answer:"5,6 g de óxido de cálcio"},
            {isCorrect: false, answer:"8,8 g de óxido de cálcio"},
            {isCorrect:false, answer:"10,0 g de óxido de cálcio"},
            {isCorrect:false, answer:"3,2 g de óxido de cálcio"},
        ]
    },
    {
        id: "6",
        question: "Uma das alternativas para diminuir a quantidade de dióxido de carbono liberada para a atmosfera consiste em borbulhar esse gás em solução aquosa de hidróxido de sódio. A reação que ocorre está representada na equação química abaixo. Em uma reação 44 g de dióxido de carbono reagem com hidróxido de sódio formando 106 g de carbonato de sódio e 18 g de água. Nesta reação determine a massa de hidróxido sódio consumida.",
        image: "./public/images/fig6.png",
        options: [
            {isCorrect:true, answer:"80 g de hidróxido de sódio"},
            {isCorrect: false, answer:"40 g de hidróxido de sódio"},
            {isCorrect:false, answer:"8,0 g de hidróxido de sódio"},
            {isCorrect:false, answer:"20,0 g de hidróxido de sódio"},
        ]
    },
]

function shuffle(arr){
    const length = arr.length;
    const newArr = []
    const storedIdx = []
    for (let i = 0; i < length; i++){
        let randomIdx = Math.floor(Math.random() * length);
        while(storedIdx.includes(randomIdx)){
           randomIdx = Math.floor(Math.random() * length);
        }
        newArr.push(arr[randomIdx]); 
        storedIdx.push(randomIdx);
    }
    return newArr;
}

function checkResult(inputs){
    let selectedInput = false;
    const questionId = inputs[0].id
    inputs.forEach(input => {
        if (input.checked === true){
            selectedInput = input;
        }
    })
    if (selectedInput){
        if (selectedInput.value === "true"){
            alert(`Q${questionId} - Parabéns, Você Acertou!`)
        } else {
            alert(`Q${questionId} - Errado. Resolva o exercício novamente.`)
        }
    } else {
        alert(`Você deve selecionar uma resposta para Q${questionId}!`);
    }
}

function createQuestion(obj){
    let template = document.getElementsByTagName("template")[0];
    let card = template.content.cloneNode("true");
    card.querySelector("p").innerHTML = `<span><em>${obj.id} - </em></span>${obj.question}`
    card.querySelector("img").setAttribute("src", obj.image);
    const inputs = card.querySelectorAll("input");
    const labels = card.querySelectorAll("label");
    const shuffledOptions = shuffle(obj.options)
    const button = card.querySelector("button")
    button.addEventListener("click", (event) => {
        checkResult(inputs);
        event.preventDefault();
    });
    for (let i = 0; i < 4; i++){
        inputs[i].value = shuffledOptions[i].isCorrect
        inputs[i].id = obj.id;
        labels[i].textContent =  shuffledOptions[i].answer
    }
    
    let container = document.createElement("div");
    container.setAttribute("class", "card");
    container.appendChild(card);
    const main = document.querySelector("#main");
    main.append(container);
}

function listAllQuestions(){
    questions.forEach(createQuestion);
}

document.querySelector("footer").innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`

listAllQuestions();