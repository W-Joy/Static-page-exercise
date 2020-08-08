window.addEventListener('load', function() {
    var search = document.querySelector('.search-title');
    search.addEventListener('focus', function() {
        this.style.border = 'none';
    })
    var arrow1 = document.querySelector('.arrow-1');
    var arrow2 = document.querySelector('.arrow-2');
    var nav = document.querySelector('.mv-nav');
    var pic = document.querySelector('.pic');
    var num = 0;
    arrow2.addEventListener('click', function() {
        num++;
        if (num == nav.children.length - 1) {
            arrow2.style.display = 'none';
            arrow1.style.display = 'block';
        } else if (!num == 0 || !numnav.children.length - 1) {
            arrow1.style.display = 'block';
            arrow2.style.display = 'block';
        }
        animate(nav, -num * pic.offsetWidth)
    });
    arrow1.addEventListener('click', function() {
        num--;
        if (num == 0) {
            arrow1.style.display = 'none';
            arrow2.style.display = 'block';
        } else if (!num == 0 || !numnav.children.length - 1) {
            arrow1.style.display = 'block';
            arrow2.style.display = 'block';
        }
        animate(nav, -num * pic.offsetWidth)
    });
    var links = document.querySelector('.links');
    for (var i = 0; i < links.children.length; i++) {
        links.children[i].addEventListener('mouseover', function() {

        })
    }
})