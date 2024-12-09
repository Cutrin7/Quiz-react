import React, { useState } from "react"

const perguntas = [
    {
        pergunta: 'Em que país Cristiano Ronaldo nasceu?',
        opcoes: ['Espanha', 'Brasil', 'Portugal', 'Argentina'],
        resposta: 'Portugal'
    },
    {
        // pergunta: 'Em que clube Cristiano Ronaldo começou sua carreira profissional?',
        // opcoes: ['Machester United', 'Sporting CP', 'Real Madrid', 'Barcelona'],
        // resposta: 'Sporting Cp'

        pergunta: 'Em que país Cristiano Ronaldo nasceu?',
        opcoes: ['Espanha', 'Brasil', 'Portugal', 'Argentina'],
        resposta: 'Portugal'
    },
    {
        // pergunta: 'Quantos gols Cristiano Ronaldo marcou na Liga dos Campeões da UEFA até 2023?',
        // opcoes: ['130', '140', '150', '160'],
        // resposta: '140'

        pergunta: 'Em que país Cristiano Ronaldo nasceu?',
        opcoes: ['Espanha', 'Brasil', 'Portugal', 'Argentina'],
        resposta: 'Portugal'
    }
];

function Quiz() {
    const [indicePergunta, setIndicePergunta] = useState(0);
    const [respostas, setRespostas] = useState ([]);
    const [resultado, setResultado] = useState(null);

    const responder = (respostaSelecionada) => {
        const novasRespotas = ([...respostas, respostaSelecionada]);
        setRespostas(novasRespotas)
        if (indicePergunta + 1 < perguntas.length) {
            setIndicePergunta(indicePergunta + 1);
        } else {
            caucularResultado(novasRespotas)
        }
    };

    const caucularResultado = (todasRespotas) => {
        let pontuacao = 0;
        for (let i = 0; i < perguntas.length; i++) {
            if (todasRespotas[i] === perguntas [i].resposta) {
                pontuacao++;
            }
        }
        setResultado(pontuacao);
    };

    const reiniciarQuiz = () => {
        setIndicePergunta(0);
        setRespostas([]);
        setResultado(null);
    };

    return(
        <>
        {resultado !== null ? (
            <div>
                <h2>Resultado do Quiz</h2>
                <p>Você acertou {resultado} de {perguntas.length} perguntas!</p>
                <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
            </div>
        ) : (
            <div>
                <h2>Pergunta {indicePergunta + 1}</h2>
                <p>{perguntas[indicePergunta].pergunta}</p>
                <ul>
                    {perguntas[indicePergunta].opcoes.map((opcao, index) => (
                        <li key={index} onClick={() => responder(opcao)}>
                            {opcao}
                        </li>
                    ))}
                </ul>
            </div>
        )}
        </>
    );
}

export default Quiz
