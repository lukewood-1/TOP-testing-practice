export const analyzeArray = arr => {
	const result = {
		average: -Infinity,
		min: Infinity,
		max: -Infinity,
		length: arr.length
	};

	for(let item of arr){
		result.min = Math.min(result.min, item);
		result.max = Math.max(result.max, item);
	};

	result.average = arr.reduce( (sum, cur) => sum + cur )/arr.length;

	return result;
};
