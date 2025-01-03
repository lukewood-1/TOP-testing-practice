export const caesarCipher = (str, factor) => {
	let result = '';
	let loLimit;
	let hiLimit;

	for(let char of str){
		let letter = char.charCodeAt() + factor;

		if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
			loLimit = 64;
			hiLimit = 90;
			if(letter > hiLimit){
				char = String.fromCharCode(letter - hiLimit + loLimit);
			} else if(letter < loLimit){
				char = String.fromCharCode(letter - factor - loLimit);
			}
		}

		if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
			loLimit = 96;
			hiLimit = 122;
			if(letter > hiLimit){
				char = String.fromCharCode(letter - hiLimit + loLimit);
			} else if(letter < loLimit){
				char = String.fromCharCode(letter - factor - loLimit);
			}
		}

		result = result.concat(char);
	}

	return result 
};
