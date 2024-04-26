const obj = {
	round1: {
		me: 10,
		spouse: 5,
	},
	round2: {
		me: 5,
		spouse: 10,
	},
	round3: {
		me: 10,
		spouse: 10,
	},
};

function determineWhoCursedTheMost(obj) {
    let me = 0, spouse = 0;
    Object.values(obj).forEach((e) => {
        me += e.me;
        spouse += e.spouse;
    });
    return (me > spouse ? "ME" : me === spouse ? "DRAW" : "SPOUSE") + "!";
}
console.log(determineWhoCursedTheMost(obj));