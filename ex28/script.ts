// Type Assertion
// video02 será apenas um HTMLVideoElement e não pode ser null, perdendo a segurança em alguns casos. Type Assertion é útil em casos de definir um tipo para um any
const video02 = document.querySelector(".player") as HTMLVideoElement

interface Produto {
    nome: string;
    preco:number;
}

async function handleProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    return response.json() as Promise<Produto>
}

// Non null operator, uso indevido causa erro no runtime como type assertion
const video03 = document.querySelector("video")!;

video03?.volume;

// Caso de uso é quando a variavel vai receber um valor apos a verificação, e se há possibilidade de ser null então a atribuição não pode acontecer
// document.querySelector("a")?.href = "https://api.origamid.dev/json/notebook.json";

document.querySelector("a")!.href = "https://api.origamid.dev/json/notebook.json";

const video04 = <HTMLVideoElement>document.querySelector(".player");
// Forma mais segura
const video05 = document.querySelector<HTMLVideoElement>(".player");

(video05 as HTMLVideoElement).volume;