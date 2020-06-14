const navBar = {
    navContent: function (evt, ids) {
        var i, content, links;
        content = document.getElementsByClassName("navcontent");
        for (i = 0; i < content.length; i++) {
          content[i].style.display = "none";
        }
        links = document.getElementsByClassName("navlinks");
        for (i = 0; i < links.length; i++) {
          links[i].className = links[i].className.replace(" navactive", "");
        }
        document.getElementById(ids).style.display = "block";
        console.log(evt);
        console.log(evt.currentTarget);
        evt.currentTarget.className += " navactive";
    }
}