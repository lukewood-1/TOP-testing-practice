export const reverseString = str => {
	let result = '';
	for(let char = str.length-1; char >= 0; char--){
		result = result.concat(str[char]);
	}
	return result
};
