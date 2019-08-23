var cookee_page_id;
var pages = [
        {id: 1, page: "index.php"},
		{id: 2, page: "index2.php"},
        {id: 3, page: "index2-2.php"},
        {id: 4, page: "index3.php"},
        {id: 5, page: "transit-account.php"},
        {id: 6, page: "transit-account-en.php"},
        {id: 7, page: "inventorying.php"},
        {id: 8, page: "booking-transit.php"},
        {id: 9, page: "wait-activat.php"},
        {id:10, page: "wait-sig.php"},
        {id:11, page: "conf-pers-signature.php"},
        {id:12, page: "wait-identificat.php"},
        {id:13, page: "ren-auto.php"},
        {id:14, page: "limit_ex.php"},
        {id:15, page: "trans_app.php"},
    ];


function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expires = "; expires=" + date.toGMTString();
    document.cookie = name + "=" + value + expires;
}

function readCookie(name) {
    var n = name + "=";
    var cookie = document.cookie.split(';');
    for(var i=0;i < cookie.length;i++) {
        var c = cookie[i];
        while (c.charAt(0)==' '){c = c.substring(1,c.length);}
        if (c.indexOf(n) == 0){return c.substring(n.length,c.length);}
    }
    return null;
}

function redirectPage(page_id){
    var page;
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id == page_id)  {
            page = pages[i].page;
            break;
        }
    }
    window.location.href = page;
    document.location = page;
    
}

function load() {
    cookee_page_id = readCookie('page_id');
    if(cookee_page_id == null) {
        setCookie('page_id', page_id, 30);
    }
    // console.log(cookee_page_id);
}

function init() {
    if(cookee_page_id != null) {
        if(+page_id < +cookee_page_id) {
            redirectPage(cookee_page_id);
  		}
  		if(+page_id > +cookee_page_id) {
  			setCookie('page_id', page_id, 30);
        }
    }
}


window.onload = function() {
    load(),
    init();
};

load();
init();


history.pushState(null, null, location.href);
window.onpopstate = function(event) {
    history.go(1);
}; 