"use strict";
window.UserData = {};
function isUserData(value) {
    if (value &&
        typeof value === "object"
        && ("nome" in value || "email" in value || "cpf" in value)) {
        return true;
    }
    return false;
}
function isValidJson(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function loadLocalStorageInput() {
    const storagedData = localStorage.getItem("UserData");
    if (storagedData && isValidJson(storagedData)) {
        const userData = JSON.parse(storagedData);
        if (isUserData(userData)) {
            Object.entries(userData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
loadLocalStorageInput();
function handleInput({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem("UserData", JSON.stringify(window.UserData));
    }
}
const form = document.querySelector("#form");
form?.addEventListener("keyup", handleInput);
//# sourceMappingURL=script.js.map