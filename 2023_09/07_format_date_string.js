// https://edabit.com/challenge/mti3rGTDLyk4woxCi

// YYYYMMDDHHmmS
const formatDate = d => '' + d.getFullYear()
	+ (d.getMonth() + 1).pS()
	+ d.getDate().pS()
	+ d.getHours().pS()
	+ d.getMinutes().pS()
	+ d.getSeconds().pS();

Number.prototype.pS = function() { 
	return this.toString().padStart(2, '0');
}

console.log(formatDate(new Date(2020, 6, 4, 8, 0, 0)));
console.log(formatDate(new Date(2020, 6, 4, 8, 0, 0)) == "20200704080000");
