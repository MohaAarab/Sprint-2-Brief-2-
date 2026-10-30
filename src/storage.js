// Reads and writes in LocalStorage.


export function readFromStorage(key, fallback = []) {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
}


export function writeToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

