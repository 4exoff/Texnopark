$('document').ready(function () {
    //смена цвета иконки корзины при наведении на нее
    $(".header-bottom-content-Cart a").mouseover(function () { $(".header-bottom-content-Cart img").attr("src", "images/svg/cart_black.svg") });
    $(".header-bottom-content-Cart a").mouseout(function () { $(".header-bottom-content-Cart img").attr("src", "images/svg/cart_white.svg") });


    //смена цвета иконки в select при наведении на нее 
    $(".List-Brend ").mouseover(function () { $(".List-Brend img").attr("src", "images/svg/drop_blue.svg") });
    $(".List-Brend").mouseout(function () { $(".List-Brend img").attr("src", "images/svg/drop_dark.svg") });


    $(".List-Type ").mouseover(function () { $(".List-Type img").attr("src", "images/svg/drop_blue.svg") });
    $(".List-Type").mouseout(function () { $(".List-Type img").attr("src", "images/svg/drop_dark.svg") });

    //стилизация и поведение select-ов 
    var joinType = $('.filter-blocke-selected-Select-Type'),
        showingType = $('.filter-blocke-selected-List-Type'),
        joinBrend = $('.filter-blocke-selected-Select-Brend'),
        showingBrend = $('.filter-blocke-selected-List-Brend'),


        indexClick = 0;

    joinType.click(function () {
        if (indexClick === 0) {
            showingType.show();
            indexClick = 1;
        }
        else {
            showingType.hide();
            indexClick = 0;
        }
    });

    joinBrend.click(function () {
        if (indexClick === 0) {
            showingBrend.show();
            indexClick = 1;
        }
        else {
            showingBrend.hide();
            indexClick = 0;
        }
    });

    $(".filter-blocke-selected-List-Type li").click(function () {
        var a = $(this).text();
        $(".filter-blocke-selected-Select-Type p").text(a);
    });

    $(".filter-blocke-selected-List-Brend li").click(function () {
        var a = $(this).text();
        $(".filter-blocke-selected-Select-Brend p").text(a);
    });

    $('.filter-blocke-selected-Select-Type').click(function () {
        showingBrend.hide();
        return false;
    });
    $('.filter-blocke-selected-List-Type li').click(function () {
        showingType.hide();
    });
    $('.filter-blocke-selected-Select-Brend').click(function () {
        showingType.hide();
        return false;
    });

    $('.filter-blocke-selected-List-Brend li').click(function () {
        showingBrend.hide();
    });

    $(document).click(function () {
        showingType.hide();
        showingBrend.hide();
        return false;
    });


    //стилизация и работа с выпадающим фильтром
   var joinMenu = $('.filter-context-block-Menu a'),
        showMenu = $('.filter-context-block-menu-Showing'),
        showBackground=$('.filter-context-block-menu-background-Showing');

    iClick = 0;

    joinMenu.click(function () {
        if (iClick === 0) {
            showMenu.show();
            showBackground.show();
            iClick = 1;
        }
        else {
            showMenu.hide();
            showBackground.hide();
            iClick = 0;
        }
    });

    $('.filter-context-block-Menu a').click(function () {
        showMenu.hide();
        showBackground.hide();
        return false;
    });
    
    $('.filter-context-block-Menu li').click(function () {
        showMenu.show();
        showBackground.show();
        return false;
    });

    $(document).click(function () {
        showMenu.hide();
        showBackground.hide();
        return false;
    });

    $(".filter-context-block-menu-background-Showing").css({ "display": "none" });
    $(".filter-context-block-menu-Showing").css({ "display": "none" });

    $(".filter-context-block-Menu a").on("click", function () {
        $(".filter-context-block-menu-Showing").show();
        $(".filter-context-block-menu-background-Showing").show();
        $(".filter-context-block-menu-Showing").css({ "display": "block"});
    });

    $(".filter-context-block-menu-showing-header-Closing a").on("click", function () {
        $(".filter-context-block-menu-Showing").hide();
        $(".filter-context-block-menu-background-Showing").hide();
        $(".filter-context-block-menu-Showing").css({ "display": "none" });
    });

    var countClick=0;
    $(".filter-context-block-menu-showing-filter-content-List li").click(function(){
        if(countClick===0){
            $(this).css({"font-weight":"bold"});
            $("img", this).css({"opacity":"1"});
            countClick=1;
        }
        else {
            $(this).css({"font-weight":"normal"});
            $("img", this).css({"opacity":"0"});
            countClick=0;
        }
    });

     
    //ввод только чисел
    $(".filter-blocke-cost-Input input").keydown(function (event) {
        if (event.keyCode == 46 ||
            event.keyCode == 8 ||
            event.keyCode == 9 ||
            event.keyCode == 27 ||
            (event.keyCode == 65 && event.ctrlKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        }
        else {
            // Запрещаем всё, кроме клавиш цифр на основной клавиатуре, а также Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });

    ///модальное окно
    $(".modal").css({ "visibility": "hidden" });

    $(".OrderModalWindows").on("click", function () {
        $(".modal").show();
        $(".modal").css({ "visibility": "visible" });
        $("html,body").css("overflow", "hidden");
    });

    $(".ClodeModalWindows").on("click", function () {
        $(".modal").hide();
        $("html,body").css("overflow", "auto");
    });
    ///----------------




});
