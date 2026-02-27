interface Produto {
    nome: string;
    preco: number;
    novo: boolean;
}

let chave: keyof Produto;

chave = "nome"

interface Elementos {
    a: HTMLAnchorElement;
    video: HTMLVideoElement;
    div: HTMLElement;
    body: HTMLBodyElement;
    audio: HTMLAudioElement;
}

let chave2: keyof Elementos;

chave2 = "a"

//Acessar o elemento da chave de um objeto ou interface eu utilizo o []
function selecionar<K extends keyof Elementos>(seletor: K): Elementos[K] | null {
    return document.querySelector(seletor)
}

selecionar('a')?.href;
selecionar('video')?.volume;