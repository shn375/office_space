$(function(){
    var localtime = moment().format("dddd, MMMM Do");
    console.log('localtime', localtime);
    $('#currentDay').text(localtime)

})

$('.saveBtn').on('click', function(){
    var input9 = document.getElementById("time9").value;
    console.log('text', input9);
    localStorage.setItem('text9', document.getElementById("time9").value);
    input9.innerHTML = localStorage.getItem('text9');
})

