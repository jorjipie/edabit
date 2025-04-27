// https://edabit.com/challenge/MDixWSYxH5JZX3xo3

const birdCode = arr => arr.map(birdCodeSingle);
const birdCodeSingle = str => {
    let words = str.split(/[-\s]/);
    switch (words.length) {
        case 1:
            return words[0].substring(0, 4).toUpperCase();
        case 2:
            return words[0].substring(0, 2).toUpperCase() 
                + words[1].substring(0, 2).toUpperCase();
        case 3:
            return words[0].substring(0, 1) 
                + words[1].substring(0, 1) 
                + words[2].substring(0, 2).toUpperCase();
        case 4:
            return words.map(c => c.substring(0, 1)).join('');
    }
}

const Test = require('../../test.js');
Test.assertSimilar(birdCode(["Common Tern", "Black-Capped Chickadee"]), ["COTE","BCCH"])
Test.assertSimilar(birdCode(["American Redstart", "Northern Cardinal", "Pine Grosbeak", "Barred Owl", "Starling", "Cooper's Hawk", "Pigeon"]), ["AMRE","NOCA","PIGR","BAOW","STAR","COHA","PIGE"])
Test.assertSimilar(birdCode(["Great Crested Flycatcher", "Bobolink", "American White Pelican", "Red-Tailed Hawk", "Eastern Screech Owl", "Blue Jay"]), ["GCFL","BOBO","AWPE","RTHA","ESOW","BLJA"])
Test.assertSimilar(birdCode(["Black-Crowned Night Heron", "Northern Mockingbird", "Eastern Meadowlark", "Dark-Eyed Junco", "Red-Bellied Woodpecker"]), ["BCNH","NOMO","EAME","DEJU","RBWO"])
Test.assertSimilar(birdCode(["Scarlet Tanager", "Great Blue Heron", "Eastern Phoebe", "American Black Duck", "Mallard", "Canvasback", "Merlin", "Ovenbird"]), ["SCTA","GBHE","EAPH","ABDU","MALL","CANV","MERL","OVEN"])
Test.assertSimilar(birdCode(["Fox Sparrow", "White-Winged Crossbill", "Veery", "American Coot", "Sora", "Northern Rough-Winged Swallow", "Purple Martin"]), ["FOSP","WWCR","VEER","AMCO","SORA","NRWS","PUMA"])