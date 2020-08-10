window.addEventListener('load', function() {
    var chart = document.querySelector('.chart');
    var cloop = document.querySelector('.loop');
    var num = chart.children.length - 5;
    var num1 = num * chart.children[0].offsetWidth;
    console.log(chart.children[0].offsetWidth);
    var timer = setInterval(function() {
        if (chart.offsetLeft == -num1) {
            chart.style.left = 0;
        }
        chart.style.left = chart.offsetLeft - 2 + 'px';
    }, 30);
    chart.addEventListener('mouseenter', function() {
        clearInterval(timer);
    });
    chart.addEventListener('mouseleave', function() {
        timer = setInterval(function() {
            if (chart.offsetLeft == -num1) {
                chart.style.left = 0;
            }
            chart.style.left = chart.offsetLeft - 2 + 'px';
        }, 30);
    });
})