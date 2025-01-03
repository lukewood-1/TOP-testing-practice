import { caesarCipher } from './caesarCipher.js';

test("Caesar's Cipher: lowercase, uppercase and symbols at the same time", () => {
		expect(caesarCipher('xyzXYZ!@,.<>', 3)).toBe('abcABC!@,.<>');
});

