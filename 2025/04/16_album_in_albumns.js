// https://edabit.com/challenge/ebf4Loe3LfQuqYrr6

const releaseYear = title => {
    const albums = {
        "2015": ["Vulnicura", "Honeymoon", "Rebel Heart"],
        "2016": ["Lemonade", "Blackstar", "A Moon Shaped Pool"],
        "2017": ["Flower Boy", "Antisocialites"],
        "2018": ["El Mal Querer", "Someone Out There", "Cranberry", "Kamikaze"],
        "2019": ["thank u next", "Magdalene", "Ode to Joy"],
        "2020": ["Rough and Rowdy Ways", "folklore", "Future Nostalgia", "Colores"]
    };
    const found = Object.entries(albums).find(album => album[1].indexOf(title) != -1);
    return found == null ? 'Unknown' : +found[0];
}

const Test = require('../../test.js');
Test.assertEquals(releaseYear('Rebel Heart'), 2015, 'error')
Test.assertEquals(releaseYear('Someone Out There'), 2018, 'error')
Test.assertEquals(releaseYear('Where Wildness Grows'), 'Unknown', 'error')
Test.assertEquals(releaseYear('thank u next'), 2019, 'error')
Test.assertEquals(releaseYear(2017), 'Unknown', 'error')
Test.assertEquals(releaseYear('Flower Boy'), 2017, 'error')
Test.assertEquals(releaseYear('Kamikaze'), 2018, 'error')
Test.assertEquals(releaseYear('folklore'), 2020, 'error')
Test.assertEquals(releaseYear('Opal'), 'Unknown', 'error')
