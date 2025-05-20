const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('../src/stringUtils');

describe('reverseString', () => {
    test('dovrebbe invertire una stringa normale', () => {
        expect(reverseString('ciao')).toBe('oaic');
    });

    test('dovrebbe restituire una stringa vuota se input vuoto', () => {
        expect(reverseString('')).toBe('');
    });
});

describe('isPalindrome', () => {
    test('dovrebbe riconoscere una parola palindroma semplice', () => {
        expect(isPalindrome('anna')).toBe(true);
    });

    test('dovrebbe ignorare maiuscole e spazi', () => {
        expect(isPalindrome('I topi non avevano nipoti')).toBe(true);
    });

    test('dovrebbe restituire false per una stringa non palindroma', () => {
        expect(isPalindrome('ciao')).toBe(false);
    });
});

describe('truncateString', () => {
    test('dovrebbe troncare una stringa lunga e aggiungere "..."', () => {
        expect(truncateString('questa è una prova', 10)).toBe('questa è u...');
    });

    test('dovrebbe restituire la stringa intera se più corta del limite', () => {
        expect(truncateString('ciao', 10)).toBe('ciao');
    });

    test('dovrebbe restituire solo "..." se maxLength = 0', () => {
        expect(truncateString('test', 0)).toBe('...');
    });
});

describe('countCharacters', () => {
    test('dovrebbe contare correttamente i caratteri', () => {
        expect(countCharacters('test')).toEqual({ t: 2, e: 1, s: 1 });
    });

    test('dovrebbe gestire spazi e simboli', () => {
        expect(countCharacters('a a!')).toEqual({ a: 2, ' ': 1, '!': 1 });
    });

    test('dovrebbe restituire oggetto vuoto per stringa vuota', () => {
        expect(countCharacters('')).toEqual({});
    });
});
