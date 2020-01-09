window.onload = function(){
    setTimeout(cookie_policy, 3000);
}
function cookie_policy(){
    let search_cookie = document.cookie;
    let my_cookie="asx_cookie_my_ssql_q11=cookie_apple_site_for_user";
    if(search_cookie.indexOf(my_cookie)==-1){
        $(".cookie_policy").css("display", "block");
        let date = new Date();
        date.setHours(date.getHours() + 7*24);
        document.cookie = "asx_cookie_my_ssql_q11=cookie_apple_site_for_user;expires="+date.toUTCString() + ";";
    }
}
$("body").on("click", ".cookie_button", function(){
    $(".cookie_policy").css("display", "none");
})