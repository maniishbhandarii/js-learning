// let owl = document.querySelector('#owl');
// let image = document.querySelector('#images');
// let google = document.querySelector('#google')

// owl.addEventListener('click', function (e) {
//     console.log(`clicked on owl`);
//     // e.stopPropagation();
// }, true)

// image.addEventListener('click', function (e) {
//     console.log(`clicked on image`);
//     // e.stopPropagation();
// }, true)
// google.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('google clicked')
// })

const image = document.querySelector('#images');
image.addEventListener('click', function (e) {
    // console.log(e.target.parentNode)
    // console.log(e.target.tagName)
    if (e.target.tagName === 'IMG') {
        e.target.parentNode.remove();
    }
    if (e.target.id === 'google') {
        e.preventDefault();
    }

}, false)