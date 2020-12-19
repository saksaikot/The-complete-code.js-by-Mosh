const users = [
    {
        name: "saikot",
        email: "saksaikot@gmail.com",
        isGold: true
    }
];
const topMovies = [
    {
        name: "movie1"
    },
    {
        name: "movie2"
    }
    ,
    {
        name: "movie3"
    }
    ,
    {
        name: "movie4"
    }

];
function getUser(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(`Getting user ${id} from db ...`);
            res(users[id]);
        }, 2000)
    });
}

function getTopMovies() {
    return new Promise((res, rej) => {

        setTimeout(() => {
            console.log(`Getting top from db ...`);
            res(topMovies);
            // rej(new Error("getting movie list failed"));
        }, 2000)
    });
}

function sendEmail(email, movieList) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(`sending the list ${JSON.stringify(movieList)} to email ${email}`);
            res(true);
        }, 2000)
    });

}

async function topMoviesForGoldUser() {
    try {
        const user = await getUser(0);
        if (user.isGold) {
            const topMovieList = await getTopMovies();
            await sendEmail(user.email, topMovieList);
        }
    }
    catch (err) {
        console.log(`there was an error`, err);
    }

}
topMoviesForGoldUser();