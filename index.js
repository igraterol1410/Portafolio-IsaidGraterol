var modalHtml     = document.querySelector('.html-course')
var modalCss      = document.querySelector('.css-course')
var modalFlex     = document.querySelector('.flexbox-course')
var modalVarcss   = document.querySelector('.variablescss-course')
var modalSass     = document.querySelector('.sass-course')
var modalJs       = document.querySelector('.js-course')
var modalJsdom    = document.querySelector('.jsdom-course')
var modalPoo      = document.querySelector('.poo-course')
var modalRsw      = document.querySelector('.rsw-course')
var modalGit      = document.querySelector('.git-course')
var modalBg       = document.querySelector('.modal-bg')
var modalClose    = document.querySelector('.jam-close-circle')
var modalPicture  = document.querySelector('.course-picture')

modalHtml.addEventListener('click', function () {
    modalBg.classList.add('bg-active')
    modalPicture.innerHTML = '<img src="/img/html.png" alt="course" class="modal-picture">'
})

modalCss.addEventListener('click', function () {
    modalBg.classList.add('bg-active')
    modalPicture.innerHTML = '<img src="/img/css.png" alt="course" class="modal-picture">'
})

modalFlex.addEventListener('click', function () {
    modalBg.classList.add('bg-active')
    modalPicture.innerHTML = '<img src="/img/flexbox.png" alt="course" class="modal-picture">'
})

modalVarcss.addEventListener('click', function () {
    modalBg.classList.add('bg-active')
    modalPicture.innerHTML = '<img src="/img/variablescss.png" alt="course" class="modal-picture">'
})

modalSass.addEventListener('click', function () {
    modalBg.classList.add('bg-active')
    modalPicture.innerHTML = '<img src="/img/sass.png" alt="course" class="modal-picture">'
})

modalJs.addEventListener('click', function () {
    modalBg.classList.add('bg-active')
})

modalJsdom.addEventListener('click', function () {
    modalBg.classList.add('bg-active')
    modalPicture.innerHTML = '<img src="/img/jsdom.png" alt="course" class="modal-picture">'
})

modalPoo.addEventListener('click', function () {
    modalBg.classList.add('bg-active')
    modalPicture.innerHTML = '<img src="/img/poo.png" alt="course" class="modal-picture">'
})

modalRsw.addEventListener('click', function () {
    modalBg.classList.add('bg-active')
    modalPicture.innerHTML = '<img src="/img/rsw.png" alt="course" class="modal-picture">'
})

modalGit.addEventListener('click', function () {
    modalBg.classList.add('bg-active')
    modalPicture.innerHTML = '<img src="/img/git.png" alt="course" class="modal-picture">'
})

modalClose.addEventListener('click', function() {
    modalBg.classList.remove('bg-active')
})