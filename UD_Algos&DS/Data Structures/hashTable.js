class hashTable {

    // Accept a hash size with a default val of 53
    constructor(size = 53) {
        // Make a new arr of the given size and store it in 'keyMap'
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;

        for(let i = 0; i < Math.min(key.length, 100); i++) {

            let char = key[i];
            let value = char.charCOdeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length; rm
        }
        return total;
    }
}