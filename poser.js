$('body').append('<div id="poserButton" style="position: relative;top: 50%;z-index: 99999; width:182px;left:18%;\
background-color: cadetblue;"> \
<button type="button" style="margin: 5px;">是啦！</button> \
<button type="button" style="margin: 5px;">哈哈哈哈</button> \
<button type="button" style="margin: 5px;">凸！</button> \
<button type="button" style="margin: 5px;">XD</button> \
<button type="button" style="margin: 5px;">881</button> \
</div>');

$(document).ready(function () {
    // let array = ['你家才後花園！', 'T__T', '勁水'];
    // localStorage.setItem('poserButtonList', JSON.stringify(array));
    let arrButton = JSON.parse(localStorage.getItem('poserButtonList'));
    for (const value of arrButton) {
        txt = '<button type="button" style="margin: 5px;">' + value + '</button>';
        $("#poserButton").append(txt);
    }

    $("button")
        .button()
        .click(function (event) {
            let txt = $(this).text();
            document.getElementsByClassName("oAzRtb krjOGe")[0].focus();
            document.getElementsByClassName("oAzRtb krjOGe")[0].innerText = '';
            document.getElementsByClassName("oAzRtb krjOGe")[0].innerText += txt;

        });
});
