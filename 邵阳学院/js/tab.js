window.addEventListener('load', function() {
    var title = document.querySelector('.title');
    var tab = document.querySelector('.tab');
    for (var i = 0; i < title.children.length; i++) {
        title.children[i].index = i;
        title.children[i].addEventListener('click', function() {
            console.log(this);
            this.style.background = 'url(./img/nav_title_' + i + '.gif)';
            for (i = 0; i < tab.children.length; i++) {
                tab.children[i].className = 'hide';
            }
            tab.children[this.index].className = 'show';
        })
    }
})