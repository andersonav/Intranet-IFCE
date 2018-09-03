/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    var aux = "";
    var indiceId = {"system": 0, "notifications": 0, "informationsUser": 0};
    $('.menu .item').tab();
    $('.checkbox').checkbox();
    $('select').dropdown();

    if ($(window).width() >= 200 && $(window).width() <= 549) {
        $("#sibebarMaior").removeClass("visible");
        $("#iconSidebarMobile").click(function () {
            $("#sibebarMaior").addClass("visible");
            var aux = auxWidthScreen();
            $("#sibebarMaior").css("width", aux + "%");
            $("#sibebarMaior").css("display", "block");
            $(".openbtn").addClass("closeMobile");
            clickDeviceMobile();
        });
    } else {
        $(".openbtn#btnDevices").click(function () {
            $(".ui.sidebar").toggleClass("very thin icon");
            $(".asd").toggleClass("marginlefting");
            $(".sidebar z").toggleClass("displaynone");
            $(".ui.accordion").toggleClass("displaynone");
            $(".ui.dropdown.item.iconShort").toggleClass("displayblock");
            var aux = auxWidthScreen();
            $(".teste").toggleClass(aux);
            $("#sibebarMaior").toggleClass("sibebarToMenor");
            $(".logo").find('img').toggle();

        });
    }

    function clickDeviceMobile() {
        $(".closeMobile").click(function () {
            $("#sibebarMaior").removeClass("visible");
            $(this).removeClass("closeMobile");
        });
    }


    $(".openDivNone").click(function () {
        var valorId = $(this).attr("id");
        $(".divMae").each(function () {
            $(this).removeClass("displayblock");
            $(this).addClass("displaynone");
        });
        $("#iconsAndInformationsUser .arrow").each(function () {
            $(this).removeClass("displayblock");
            $(this).addClass("displaynone");
        });
        if (indiceId[valorId] == 0) {
            $(".divMae#" + valorId).addClass("displayblock");
            $("#iconsAndInformationsUser .arrow#" + valorId).addClass("displayblock");
            auxIndiceArray(valorId, 1);
        } else {
            $(".divMae#" + valorId).removeClass("displayblock");
            $("#iconsAndInformationsUser .arrow#" + valorId).removeClass("displayblock");
            $(".divMae#" + valorId).addClass("displaynone");
            $("#iconsAndInformationsUser .arrow#" + valorId).addClass("displaynone");
            auxIndiceArray(valorId, 0);
        }
    });

    function auxIndiceArray(valorId, valorInteiro) {
        if (valorId == "system") {
            indiceId[valorId] = valorInteiro;
            indiceId["notifications"] = 0;
            indiceId["informationsUser"] = 0;
        } else if (valorId == "notifications") {
            indiceId[valorId] = valorInteiro;
            indiceId["system"] = 0;
            indiceId["informationsUser"] = 0;
        } else {
            indiceId[valorId] = valorInteiro;
            indiceId["system"] = 0;
            indiceId["notifications"] = 0;
        }
    }

    function auxWidthScreen() {
        var aux = "";
        if ($(window).width() >= 550 && $(window).width() <= 849) {
            aux = "marginLeftingResolutionMenor";
            // is mobile device
        } else if ($(window).width() >= 500 && $(window).width() <= 549) {
            aux = "50";
        } else if ($(window).width() >= 450 && $(window).width() <= 499) {
            aux = "55";
        } else if ($(window).width() >= 350 && $(window).width() <= 449) {
            aux = "68";
        } else if ($(window).width() >= 200 && $(window).width() <= 349) {
            aux = "80";
        } else {
            aux = "testeMarginLefting";
        }
        return aux;
    }
    
    

    $('.ui.accordion').accordion({
        selector: {

        }
    });

});