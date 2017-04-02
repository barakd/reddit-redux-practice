import { guidGenerator } from '../utils';

const users = [{
    userName: 'TheWizard'
}, {
    userName: 'AutoDeskAddict'
}, {
    userName: 'MightTroll',
}, {
    userName: 'TheRealDonaldTrump',
}
];

const urls = [
    'https://www.google.com/doodles/about',
]
const images = [
    'http://globalgamejam.org/sites/default/files/styles/game_sidebar__normal/public/game/featured_image/promo_5.png?itok=9dymM8JD',
    'https://img.clipartfest.com/2250cf8eef55fdff71de2623dd76a548_randomwebsitecomjpg-random-website_293-253.jpeg',
    'http://vignette1.wikia.nocookie.net/blogclan-2/images/4/45/Random-turtle.gif/revision/latest?cb=20160706220110',
    'https://fishofgold.files.wordpress.com/2016/04/jetbear-mnrart.gif?w=376',
];
const titles = ['The Missing Stream', 'My First 3d model!', 'The Touch Rainbow', 'Serpent in the Stone', 'Oops I am President']

const commentsTexts = ['I am going to build a wall! and make Mexico pay for it!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mi eu nulla auctor aliquam. Aliquam consectetur magna est, nec pharetra augue tempor in. In in auctor dolor. Nullam sagittis ac tortor nec iaculis. Aliquam commodo eros non massa euismod, id condimentum arcu sollicitudin. In rhoncus libero ut justo efficitur luctus. Aenean semper nunc non ultricies placerat.']
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomOfArray(arr) {
    return arr[getRandomArbitrary(0, arr.length)];
}

const links = titles.reduce((obj, currTitle, index) => {
    const id = guidGenerator();
    obj[id] = {
        id,
        title: currTitle,
        createdAt: Date.now(),
        url: getRandomOfArray(urls),
        img: getRandomOfArray(images),
        author: getRandomOfArray(users),
        score: getRandomArbitrary(0, 999),
        comments: [],
    }
    return obj; 
}, {});


const comments = Object.keys(links).reduce((obj, linkId, index) => {
    const commentId = guidGenerator();
    obj[commentId] = {
        id: commentId,
        createdAt: Date.now(),
        for: linkId,
        text: getRandomOfArray(commentsTexts),
        author: getRandomOfArray(users),
        score: getRandomArbitrary(0, 999),
        comments: [],
    }
    links[linkId].comments.push(commentId);
    return obj; 
}, {});

const mocks = {
    links,
    comments,
};
export default mocks;