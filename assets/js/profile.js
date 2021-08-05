// user
const userStr = localStorage.getItem('user');
const user    = JSON.parse( userStr );
// DOM els
const fullname           = document.getElementById('fullname');
const email              = document.getElementById('email');
const calificationsCount = document.getElementById('calificationsCount');
const califications      = document.getElementById('califications');
// set email and fullname
fullname.innerHTML = `${user.name} ${user.lastname}`;
email.innerHTML = user.email;
// get all califications from localstorage
const calsStr = localStorage.getItem('califications');
const calObj  = JSON.parse( calsStr );
const cals    = calObj.califications;

cals.forEach( (cal) => {
    const div = document.createElement('div');
    div.className = "alert alert-success";
    div.setAttribute('role', 'alert');

    const i = document.createElement('i');
    i.className = "fa fa-graduation-cap";

    const span = document.createElement('span');
    span.setAttribute('style', 'margin-left: 2rem;')
    span.innerHTML = cal.name;

    div.append(i);
    div.append(span);

    califications.append(div);
});

calificationsCount.innerHTML = cals.length;
