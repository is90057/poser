$('body').append('<div style="position: relative;top: 50%;z-index: 99999; width:190px;left:18%; \
    background-color: cadetblue;"> \
    <div id="poserButton"> \
        <button type="button" style="margin: 5px;">是啦！</button> \
        <button type="button" style="margin: 5px;">哈哈哈哈</button> \
        <button type="button" style="margin: 5px;">凸！</button> \
        <button type="button" style="margin: 5px;">XD</button> \
        <button type="button" style="margin: 5px;">881</button> \
    </div> \
    <hr> \
    <div id="poser_set" style="position: relative;left: 135px;font-size:small;"> \
        <input type="button" id="ksetup" value="set up"> \
    </div> \
    <div id="poser_setwin" style="font-size: xx-small;display: none;"> \
        Name: \
        <input type="text" id="name" style="width:143px"> \
        <input type="button" id="but_save" value="Save"> \
        <input type="button" id="but_remove" value="Remove"> \
    </div> \
</div>');

function removeByValue(arr, val) {
    for (var i = 0; i < arr.length; i) {
        if (arr[i] == val) {
            arr.splice(i, 1);
            break;
        }
    }
}
$(document).ready(function () {
    var arrButton = JSON.parse(localStorage.getItem('poserButtonList'));
    var jshow = false;
    if (!arrButton) {
        let array = ['你家才後花園！', 'T__T', '勁水'];
        localStorage.setItem('poserButtonList', JSON.stringify(array));
        arrButton = JSON.parse(localStorage.getItem('poserButtonList'));
    }

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
            document.getElementsByClassName("oAzRtb krjOGe")[0].innerText = txt;

        });

    $("#ksetup").click(function () {
        if (jshow == false) {
            $("#poser_setwin").show();
            $("#ksetup").attr("value", "close");
            jshow = true;
        } else {
            $("#poser_setwin").hide();
            $("#ksetup").attr("value", "set up");
            jshow = false;
        }
    });

    $("#but_save").click(function () {
        let name = $("#name").val();
        localStorage.removeItem('poserButtonList');
        arrButton.push(name);
        localStorage.setItem('poserButtonList', JSON.stringify(arrButton));
        $("#name").val('');
        $("#poser_setwin").hide();
        jshow = false;
    });

    $("#but_remove").click(function () {
        var name = $("#name").val();
        localStorage.removeItem('poserButtonList');
        newButtonList = jQuery.grep(arrButton, function (value) {
            return value != name;
        });
        localStorage.setItem('poserButtonList', JSON.stringify(newButtonList));
        $("#name").val('');
        $("#poser_setwin").hide();
        jshow = false;
    });

});

