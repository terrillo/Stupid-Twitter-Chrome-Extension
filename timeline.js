//document.getElementById('doc').style.display = 'none';

setInterval(function(){
    var showmore = document.querySelectorAll(".new-tweets-bar")[0];
    if(showmore) {
        showmore.click();
        document.querySelectorAll(".expand-stream-item").click();
    }
}, 200);
