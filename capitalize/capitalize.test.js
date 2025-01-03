import { capitalize } from './capitalize.js';

test('Capitalizing strings', () => {
	expect(capitalize('eh mom')).toBe('Eh mom');
});

