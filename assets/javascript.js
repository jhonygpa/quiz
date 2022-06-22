const perguntasData = [
    {
        pergunta:'Qual a capital do Brasil ? ',
        a: 'Mato Grosso',
        b: 'São Paulo',
        c: 'Rio de Janeiro',
        d: 'Brasilia',
        respostaCorrect: 'd'
    },
    {
        pergunta:'Qual a capital do Argentina ?',
        a: 'Buenos Aires',
        b: 'Bariloche',
        c: 'Córdova',
        d: 'Mendoza',
        respostaCorrect: 'a'
    },
    {
        pergunta:'Qual a capital da Alemanha ?',
        a: 'Hamburgo',
        b: 'Berlim',
        c: 'Frankfurt',
        d: 'Munique',
        respostaCorrect: 'b'
    },
    {
        pergunta:'Qual a capital da França ?',
        a: 'Marselha',
        b: 'Lyon',
        c: 'Paris',
        d: 'Toulouse',
        respostaCorrect: 'c'
    },
    {
        pergunta:'Qual a capital da Turquia ?',
        a: 'Ancara',
        b: 'Istambul',
        c: 'Esmirna',
        d: 'Bursa',
        respostaCorrect: 'a'
    }
];

const quiz = document.getElementById('quiz');
const grupoRespostas = document.querySelectorAll('.resposta');
const pergunta = document.getElementById('txtPergunta');

const txtAlternativa_a = document.getElementById('txt-A');
const txtAlternativa_b = document.getElementById('txt-B');
const txtAlternativa_c = document.getElementById('txt-C');
const txtAlternativa_d = document.getElementById('txt-D');
const btnResponder = document.getElementById('btnResposta');

let = perguntaAtual = 0 ;
let = pontos = 0;

carregaQuiz();

function carregaQuiz(){

    limpaResposta();

    const perguntaAtualData = perguntasData[perguntaAtual];

    pergunta.innerHTML = perguntaAtualData.pergunta
    txtAlternativa_a.innerHTML = perguntaAtualData.a;
    txtAlternativa_b.innerHTML = perguntaAtualData.b;
    txtAlternativa_c.innerHTML = perguntaAtualData.c;
    txtAlternativa_d.innerHTML = perguntaAtualData.d;
}

function selecionado(){
    let resposta = undefined;
    grupoRespostas.forEach((grupoRespostas1) => {
        if (grupoRespostas1.checked) {
            resposta = grupoRespostas1.id;
        }
    });
    return resposta;
}

function limpaResposta(){
    grupoRespostas.forEach((grupoRespostas1) => {
        grupoRespostas1.checked = false;
    });
}
btnResponder.addEventListener('click', () => {
    const resposta = selecionado();
    if(resposta){
        if(resposta === perguntasData[perguntaAtual].respostaCorrect){
            pontos++;
        }
    }
    perguntaAtual++;
    if(perguntaAtual < perguntasData.length){
        carregaQuiz();
    }else{
        quiz.innerHTML =`<h2>Voce Acertou  ${pontos}/${perguntasData.length} Perguntas.</h2>          
        <button onclick="location.reload()">Reiniciar</button>`
    }
});


