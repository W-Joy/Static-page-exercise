window.addEventListener('load', function() {
    var prve = document.querySelector('.prve');
    var next = document.querySelector('.next');
    var pic = document.querySelector('.pic');
    var banner = document.querySelector('.banner');
    var num = 0;
    next.addEventListener('click', function() {
        for (i = 0; i < pic.children.length; i++) {
            pic.children[i].className = '';
        }
        num++;
        if (num == pic.children.length) {
            num = 0;
        }
        pic.children[num].className = 'current';
    });
    prve.addEventListener('click', function() {
        if (num == 0) {
            num = pic.children.length;
        }
        num--;
        for (i = 0; i < pic.children.length; i++) {
            pic.children[i].className = '';
        }
        pic.children[num].className = 'current';
    })
    var timer = setInterval(function() {
        next.click();
    }, 5000)
    banner.addEventListener('mouseenter', function() {
        clearInterval(timer);
        timer = null;
    });
    banner.addEventListener('mouseleave', function() {
        timer = setInterval(function() {
            next.click();
        }, 5000)
    })
})