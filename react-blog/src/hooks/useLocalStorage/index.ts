


export default class useLocalStorage {
    key: string;
    val: any
    constructor(key: string, val: any) {
        this.key = key
        this.val = val
        this.init()
    }

    init() {
        const val = useLocalStorage.getItem(this.key)
        if (!val) {
            useLocalStorage.setItem(this.key, this.val)
        }
    }

    static getItem(key: string) {
        const val = localStorage.getItem(key);
        return val && JSON.parse(val || '')
    }

    static setItem(key: string, val: any) {
        localStorage.setItem(key, JSON.stringify(val || ''))
    }

    static removeItem(key: string) {
        localStorage.removeItem(key)
    }

    static clearItem() {
        localStorage.clear()
    }
}