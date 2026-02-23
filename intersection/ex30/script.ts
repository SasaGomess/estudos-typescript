type Pessoa = {
    nome: string;
    cpf: string;
    idade?: number;
    endereco?: string;
}

type Funcionario = {
    cargo: string;
    salario: number;
    setor: string;
}

function salvaFuncionario(dados: Pessoa & Funcionario) {
    localStorage.setItem("Nome", dados.nome);
    localStorage.setItem("Idade", String(dados.idade));
    localStorage.setItem("Cargo", dados.cargo);
    localStorage.setItem("Setor", dados.setor);
    localStorage.setItem("Salario", String(dados.salario));
}

salvaFuncionario({nome: "Julia", cpf: "765.653.346-21", idade:21, cargo: "Analista de Dados Jr", setor: "TI", salario: 4000});

type TipoCarro = {
    rodas: string;
    portas: number;
}

// não posso usar o mesmo nomo "TipoCarro"

type TipoCarroComPreco = TipoCarro & {
    preco: number
}

interface InterfaceCarro {
    rodas: string;
    portas: number;
}

interface InterfaceCarro {
    preco: number;
}

function handleInterfaceCarro(carro: InterfaceCarro) {
    carro.portas;
    carro.preco;
    carro.rodas;
}

interface Window {
    userId: number;
}

window.userId = 200;



