window.addEventListener('load', function() {
    var btns = document.querySelector('.nav');
    var item = document.querySelectorAll('.items');
    console.log(btns);
    console.log(item);
    for (var i = 0; i < btns.children.length; i++) {
        console.log(item[i]);
        btns.children[i].addEventListener('mouseenter', function() {
            item[i].style.display = 'block';
        })
        btns.children[i].addEventListener('mouseleave', function() {
            item[i].style.display = 'none';
        })
    }
})