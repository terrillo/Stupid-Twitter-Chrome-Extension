//document.getElementById('doc').style.display = 'none';

setInterval(function(e){
    var showmore = document.querySelectorAll(".new-tweets-bar")[0];
    if(showmore) {
        showmore.click();
        document.querySelectorAll(".expand-stream-item").click();
        return false;
        e.preventDefault();
    }
}, 200);
