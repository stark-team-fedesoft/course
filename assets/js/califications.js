// calification local storage
const calificationsStr = localStorage.getItem('califications');
let calsObj = {};

if(!calificationsStr) {
    const calificacationsObj = {
        califications: [],
    };

    localStorage.setItem('califications', JSON.stringify(calificacationsObj) );

    calsObj = calificacationsObj;

} else {
    calsObj = JSON.parse( calificationsStr );

}
