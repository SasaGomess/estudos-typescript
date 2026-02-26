interface Window {
    //como estou preenchendo esses valores não tem problema dizer que recebe any
    UserData: any;
}

window.UserData = {};


function isUserData(value:unknown): value is UserData {
    if(value && 
        typeof value === "object" 
        && ("nome" in value || "email" in value || "cpf" in value )){
            return true;    
    }
    return false;
}

function isValidJson(str: string) {
    try {
        JSON.parse(str);
    }catch (e) {
        return false;
    }
    return true;
}

interface UserData {
    nome?: string;
    email?:string;
    cpf?: string;
}

function loadLocalStorageInput() {
    const storagedData = localStorage.getItem("UserData");
    if(storagedData && isValidJson(storagedData)) {
        const userData = JSON.parse(storagedData);

        if(isUserData(userData)) {
            //Percorrendo chave e valor do objeto. O metodo entries me retorna um array de arrays com chave e valor do objeto
            Object.entries(userData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if(input instanceof HTMLInputElement){
                    input.value = value;
                    window.UserData[key] = value;
                }
            })
        }
    }   
}

loadLocalStorageInput();

function handleInput({ target }: KeyboardEvent) {
    if(target instanceof HTMLInputElement) {
        //seta que no campo nome por exemplo do UserData que é referenciado pelo id do input "target.id" eu preciso adicionar o valor correspondente
        window.UserData[target.id] = target.value;
        localStorage.setItem("UserData", JSON.stringify(window.UserData));
    }
}


const form = document.querySelector<HTMLElement>("#form");
form?.addEventListener("keyup", handleInput);