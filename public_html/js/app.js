/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $("#imgActiveDropdown").click(function () {
        $('.ui.dropdown').dropdown();
    });

    $(".sanduiche").click(function () {
        $('.menuOpenAndClose').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
        $('.ui.accordion').accordion();
        $("body").removeClass("pushable");
    });

});