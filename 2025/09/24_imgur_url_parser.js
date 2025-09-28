// https://edabit.com/challenge/iEDvqagg62roh5q3K

const imgurUrlParser = url => {
    const match = url.match(/(?:http:\/\/)?(?:www.)?(?:i.)?imgur.com(\/a\/|\/gallery\/|\/)?([\w]+)/);
    let res = { id: match[2], type: null };
    switch (match[1]) {
        case '/a/':
            res.type = 'album';
            break;
        case '/gallery/':
            res.type = 'gallery';
            break;
        case '/':
            res.type = 'image';
            break;
    }
    return res;
}

const Test = require('../../test.js');
const results = {
    album: { id: 'cjh4E', type: 'album' },
    gallery: { id: '59npG', type: 'gallery' },
    directImage: { id: 'altd8Ld', type: 'image' },
    image: { id: 'OzZUNMM', type: 'image' }
};

// Base tests
Test.assertSimilar(
    imgurUrlParser('http://imgur.com/a/cjh4E'),
    results.album,
    'Should work with an album'
);
Test.assertSimilar(
    imgurUrlParser('http://imgur.com/gallery/59npG'),
    results.gallery,
    'Should work with a gallery'
);
Test.assertSimilar(
    imgurUrlParser('http://imgur.com/OzZUNMM'),
    results.image,
    'Should work with a single image'
);
Test.assertSimilar(
    imgurUrlParser('http://i.imgur.com/altd8Ld.png'),
    results.directImage,
    'Should work with a single image (direct link)'
);

// Additional tests
Test.assertSimilar(
    imgurUrlParser('http://imgur.com/a/cjh4E/zip'),
    results.album,
    'Should work with /zip at the end (Yeah it\'s a real thing!)'
);
Test.assertSimilar(
    imgurUrlParser('http://imgur.com/gallery/59npG#g1UvPtF'),
    results.gallery,
    'Should work with a #hash at the end'
);
Test.assertSimilar(
    imgurUrlParser('www.i.imgur.com/altd8Ld.png'),
    results.directImage,
    'Should work with www. instead of http://'
);
Test.assertSimilar(
    imgurUrlParser('i.imgur.com/altd8Ld.png'),
    results.directImage,
    'Should work without http:// and www.'
);