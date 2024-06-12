
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual você prefere para uma corrida?",
        alternativas: [
            {
                texto: "Esteira elétrica",
                afirmacao: "Confortável e prática, a esteira elétrica permite ajustar a velocidade e inclinação ao seu gosto, além de estar em um ambiente controlado, sem sol ou chuva."
            },
            {
                texto: "Trilha na montanha",
                afirmacao: "Desafiadora e recompensadora, a trilha na montanha oferece terrenos variados, contato direto com a natureza e paisagens deslumbrantes, tornando a corrida uma verdadeira aventura.."
            }
        ]
    },
    {
        enunciado: "Qual você prefere para um jogo de futebol?",
        alternativas: [
            {
                texto: "Campo com grama sintética ",
                afirmacao: " Com superfície uniforme e macia, o campo de grama sintética proporciona uma experiência de jogo confortável, com menos risco de lesões e sem lama em dias de chuva."
            },
            {
                texto: "Campinho de terra",
                afirmacao: "Simples e tradicional, o campinho de terra lembra as peladas de infância, com um jogo mais físico e autêntico, onde a habilidade de driblar buracos e desníveis faz parte da diversão. "
            }
        ]
    },
    {
        enunciado: "Qual você prefere para um treino de musculação?",
        alternativas: [
            {
                texto: "Academia moderna com ar condicionado",
                afirmacao: " Equipamentos de última geração, ambiente climatizado e música motivacional criam um espaço ideal para treinos eficientes e confortáveis, com todos os recursos à disposição."
            },
            {
                texto: "Barras e pesos no quintal ",
                afirmacao: "Treinamento ao ar livre, com equipamentos improvisados e o som da natureza como trilha sonora, proporciona uma sensação de liberdade e um desafio mais intenso e autêntico.."
            }
        ]
    },
    {
        enunciado: "Qual você prefere para uma partida de basquete?",
        alternativas: [
            {
                texto: "Ginásio com piso de madeira polida",
                afirmacao: " Ambiente fechado e protegido das intempéries, com piso de madeira que proporciona um quique perfeito da bola, garantindo um jogo mais técnico e preciso.."
            },
            {
                texto: "Quadra de concreto ao ar livre",
                afirmacao: "A tradicional quadra de bairro, com o chão de concreto, exposta ao sol e ao vento, oferece um jogo mais dinâmico e desafiador, com uma atmosfera comunitária e autêntica. Qual você prefere para um treino de ciclismo?"
            }
        ]
    },
    {
        enunciado: "Qual você prefere para um treino de ciclismo?",
        alternativas: [
            {
                texto: "Bicicleta ergométrica em casa ",
                afirmacao: "Prática e conveniente, permite pedalar no conforto de casa, acompanhando séries na TV ou monitorando o desempenho em um painel digital, sem se preocupar com o clima ou o trânsito. "
            },
            {
                texto: "Pedalar em uma estrada de terra ?",
                afirmacao: " Enfrentar terrenos acidentados, ladeiras e buracos em meio à natureza, sentindo o vento no rosto e a adrenalina de cada pedalada, oferece uma experiência de ciclismo mais verdadeira e emocionante."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();