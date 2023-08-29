// https://edabit.com/challenge/LvhSTYCbRDS4XTNmx

const threeDaysAgo = d => 
	new Date(d-259200000).toISOString().split('T')[0];

console.log(threeDaysAgo(new Date(2018, 0, 1))); //"2017-12-29"