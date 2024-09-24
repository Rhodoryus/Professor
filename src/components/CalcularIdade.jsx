import React, { useState } from "react";

export default function CalcularIdade() {
    const [anoNascimento, setAnoNascimento] = useState('');
    const [mesNascimento, setMesNascimento] = useState('');
    const [idade, setIdade] = useState('');

    const anoAtual = 2024;
    const mesAtual = 9;

    const calcularIdade = () => {
        const idadePronta = anoAtual - anoNascimento;
        const mesParaAniversario = mesNascimento - mesAtual;

        if (mesParaAniversario < 0) {
            setIdade(`Você completou ${idadePronta} anos`);
        } else if (mesParaAniversario === 0) {
            setIdade(`Parabéns pelo aniversário de ${idadePronta} anos`);
        } else {
            setIdade(`Você tem ${idadePronta - 1} anos e irá completar ${idadePronta} anos daqui a ${mesParaAniversario} mês(es)`);
        }
    }

    return (
        <div>
            <input
                type='text'
                placeholder='Ano de nascimento'
                value={anoNascimento}
                onChange={(e) => setAnoNascimento(e.target.value)}
            />
            <select onChange={(e) => setMesNascimento(e.target.value)}>
                <option value="">Selecione o mês</option>
                <option value="1">Janeiro</option>
                <option value="2">Fevereiro</option>
                <option value="3">Março</option>
                <option value="4">Abril</option>
                <option value="5">Maio</option>
                <option value="6">Junho</option>
                <option value="7">Julho</option>
                <option value="8">Agosto</option>
                <option value="9">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
            </select>
            <button onClick={calcularIdade}>Calcular Idade</button>
            <div>{idade}</div>
        </div>
    );
}