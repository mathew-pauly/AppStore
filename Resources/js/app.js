var validate_contactus = false;
var allRecordsCount = 0;
var APPS = undefined;
var Section_Click = { "Link": 0 };

var Color_Codes = ["red","green", "blue", "orange", "yellow", "purple", "turquoise","brown","gray","darkblue"];
var tile_effect = ["title-fadeout","title-horizontalcenter","title-verticalcenter","title-indent","title-scaleup"];
var icon_effect1 = ["icon-featurecw","icon-featureccw","icon-featurefade","icon-scaleup","icon-scaledown","icon-scaledownrotate360ccw","icon-scaleuprotate360cw","icon-fadeoutscaledown","icon-scaledownrotate360cw","icon-featurefade","icon-flip","icon-featurecw"];
var font_color = ["redf", "greenf", "bluef", "yellowf", "orangef", "redf", "greenf", "darkbluef", "yellowf", "orangef"];
var icon_effect2 = [" title-indent icon-fadeoutscaleup", "title-indent icon-fadeoutscaledown", "title-fade icon-scaleuprotate360cw", "title-fade icon-scaleuprotate360ccw", "title-fade icon-scaledownrotate360cw", "title-fade icon-scaledownrotate360ccw", "title-scaleup icon-scaledown", "title-scaledown icon-scaleup", "title-fadeout icon-featurecw", "title-fadeout icon-featureccw", "title-verticalcenter icon-featurefade", "title-horizontalcenter icon-flip", "title-center icon-fadeout icon-flip"];
var icon_effect = [" title-verticalcenter icon-fadeoutscaleup", "title-verticalcenter icon-fadeoutscaledown", "title-verticalcenter icon-scaleuprotate360cw", "title-verticalcenter icon-scaleuprotate360ccw", "title-verticalcenter icon-scaledownrotate360cw", "title-verticalcenter icon-scaledownrotate360ccw", "title-verticalcenter icon-scaledown", "title-verticalcenter icon-scaleup", "title-verticalcenter icon-featurecw", "title-verticalcenter icon-featureccw", "title-verticalcenter icon-featurefade", "title-verticalcenter icon-flip", "title-verticalcenter icon-fadeout icon-flip"];

var NAME = "#NAME";
var SHORT_NAME = "#SHORT_NAME";
var COLOR_CODE = "#COLOR";
var ICON_EFFECT = "#ICON_EFFECT";
var TILE_EFFECT = "#TILE_EFFECT";
var FONT_COLOR = "#FONT_COLOR";
var APP_KEYWORDS = "#APP_KEYWORDS";
var APP_ID = "#APP_ID";
var APP_ICON = "#APP_ICON";
var APP_URL = "#APP_URL";

var SELECTED_APP_ID = 0;
var SELECTED_APP_URL = undefined;
var SELECTED_APP_NAME = undefined;
var SELECTED_APP_SHORT_NAME = undefined;
var SEARCH_APP_VALUE = undefined;
var APP_LIST = new Array();
var iFrameLoadCount = 0;
var SEARCH_APP_SELECTED = -1;

function GetRandValue(range) {
    return Math.floor(Math.random() * range);
}

function HideSearchResult() {
    $("#txt_search").parent().hide();
    $("#search_result").hide();
    $("#txt_search").val('');
}

function ClearSearchResult() {
    setTimeout(function () {
        $("#search_result").hide();
        $("#txt_search").val('');
        $("#search_result ul").html('');
    }, 1000);
}

function PopulateApps() {


    var _data = [{ "APP_ID": 0, "APP_NAME": "3MTracker", "APP_SHORT_NAME": "3MTracker", "APP_KEYWORDS": "3MTracker", "APP_ICON": "", "APP_URL": "https://3mtracker.cognizant.com" }, { "APP_ID": 1, "APP_NAME": "Sharepoint", "APP_SHORT_NAME": "Sharepoint", "APP_KEYWORDS": "Sharepoint", "APP_ICON": "", "APP_URL": "http://share-help.mmm.com/sp" },
{"APP_ID":2,"APP_NAME":"Estimator","APP_SHORT_NAME":"Estimator","APP_KEYWORDS":"Estimator","APP_ICON":"estimator.gif","APP_URL":"http://www.egroupnet.com/3M/expresstraining"},
{"APP_ID":3,"APP_NAME":"Invoice Payment","APP_SHORT_NAME":"Invoice","APP_KEYWORDS":"Invoice, Payment","APP_ICON":"invoicepayment.gif","APP_URL":"http://ecommercetest7.3m.com/ebiz/invoicestatus"},
{"APP_ID":4,"APP_NAME":"MSDS Search","APP_SHORT_NAME":"MSDS","APP_KEYWORDS":"MSDS, Search","APP_ICON":"msdssearch.gif","APP_URL":"https://solutions.3m.com/wps/portal/3M/en_US/MSDS/Search?gsaAction=msdsSRA&type=ptn&msdsLocale=en_US"},
{"APP_ID":5,"APP_NAME":"Quick Order","APP_SHORT_NAME":"Quick Order","APP_KEYWORDS":"Quick, Order","APP_ICON":"quickorder.gif","APP_URL":"https://3mtracker.cognizant.com/Remedy.aspx"},
{"APP_ID":6,"APP_NAME":"RebuyList","APP_SHORT_NAME":"RebuyList","APP_KEYWORDS":"RebuyList","APP_ICON":"rebuylist.gif","APP_URL":"http://ecommercetest7.3m.com/ebiz/rebuylist"},
{"APP_ID":7,"APP_NAME":"InfoCenter Java","APP_SHORT_NAME":"IPPR","APP_KEYWORDS":"InfoCenter , Java , IPPR","APP_ICON":"ippr.gif","APP_URL":"https://infocenter.3m.com/infocenter/IPPRHome.asp"},
{"APP_ID":8,"APP_NAME":"CDMS-CTI","APP_SHORT_NAME":"CDMS-CTI","APP_KEYWORDS":"CDMS, CTI","APP_ICON":"","APP_URL":"http://intra3.mmm.com/cdms-cti/login.do"},
{"APP_ID":9,"APP_NAME":"WERCS","APP_SHORT_NAME":"WERCS","APP_KEYWORDS":"WERCS, CDMS","APP_ICON":"","APP_URL":"http://wercssirprod/wercs.chemingtool.web"},
{"APP_ID":10,"APP_NAME":"TOXDOCS","APP_SHORT_NAME":"TOXDOCS","APP_KEYWORDS":"TOXDOCS, CDMS","APP_ICON":"","APP_URL":"http://jeseprd22.mmm.com/toxdocs/login.do"},
{"APP_ID":11,"APP_NAME":"Products on the Web","APP_SHORT_NAME":"POW","APP_KEYWORDS":"Products , POW","APP_ICON":"","APP_URL":"#"},
{"APP_ID":12,"APP_NAME":"Pow Portlet","APP_SHORT_NAME":"Pow Portlet","APP_KEYWORDS":"Pow , Portlet","APP_ICON":"","APP_URL":"#"},
{"APP_ID":13,"APP_NAME":"Product Comparison Portlet","APP_SHORT_NAME":"PCP","APP_KEYWORDS":"Product , Comparison , Portlet  , PCP","APP_ICON":"","APP_URL":"#"},
{"APP_ID":14,"APP_NAME":"Digitization Component Framework","APP_SHORT_NAME":"DCF","APP_KEYWORDS":"Digitization , Component , Framework , DCF","APP_ICON":"","APP_URL":"#"},
{"APP_ID":15,"APP_NAME":"Price Broker Component","APP_SHORT_NAME":"PBC","APP_KEYWORDS":"Price , Broker , Component , PBC","APP_ICON":"","APP_URL":"#"},
{"APP_ID":16,"APP_NAME":"Search Navigation and Product Selection","APP_SHORT_NAME":"SNAPS","APP_KEYWORDS":"Search , Navigation , Product , Selection , SNAPS","APP_ICON":"","APP_URL":"#"},
{"APP_ID":17,"APP_NAME":"Datamart","APP_SHORT_NAME":"Datamart ","APP_KEYWORDS":"Datamart","APP_ICON":"","APP_URL":"#"},
{"APP_ID":18,"APP_NAME":"Enterprise Network Login","APP_SHORT_NAME":"ENL","APP_KEYWORDS":"Enterprise , Network , Login , ENL","APP_ICON":"","APP_URL":"#"},
{"APP_ID":19,"APP_NAME":"Enterprise Network Login Portlet","APP_SHORT_NAME":"ENLP","APP_KEYWORDS":"Enterprise , Network , Login , Portlet , ENLP","APP_ICON":"","APP_URL":"#"},
{"APP_ID":20,"APP_NAME":"Enterprise Website Creation & Delivery","APP_SHORT_NAME":"EWCD","APP_KEYWORDS":"Enterprise , Website , Creation , Delivery , EWCD","APP_ICON":"","APP_URL":"#"},
{"APP_ID":21,"APP_NAME":"Visitor Management","APP_SHORT_NAME":"VSRM","APP_KEYWORDS":"Visitor , Management , VSRM","APP_ICON":"","APP_URL":"#"},
{"APP_ID":22,"APP_NAME":"Database Portlet ","APP_SHORT_NAME":"Portlet ","APP_KEYWORDS":"Database , Portlet ","APP_ICON":"","APP_URL":"#"},
{"APP_ID":23,"APP_NAME":"3M Source ","APP_SHORT_NAME":"3M Source ","APP_KEYWORDS":"3M Source","APP_ICON":"","APP_URL":"#"},
{"APP_ID":24,"APP_NAME":"Learn3M ","APP_SHORT_NAME":"Learn3M ","APP_KEYWORDS":"Learn3M","APP_ICON":"","APP_URL":"#"},
{"APP_ID":25,"APP_NAME":"InfoCenter","APP_SHORT_NAME":"InfoCenter","APP_KEYWORDS":"InfoCenter","APP_ICON":"","APP_URL":"#"},
{"APP_ID":26,"APP_NAME":"GSM","APP_SHORT_NAME":"GSM","APP_KEYWORDS":"GSM","APP_ICON":"","APP_URL":"http://gsm.mmm.com"},
{"APP_ID":27,"APP_NAME":"Enterprise Directory Component Services","APP_SHORT_NAME":"EDCS","APP_KEYWORDS":"Enterprise , Directory , Component , Services , EDCS","APP_ICON":"","APP_URL":"#"},
{"APP_ID":28,"APP_NAME":"Global Search Appliance","APP_SHORT_NAME":"GSA","APP_KEYWORDS":"Global , Search , Appliance , GSA","APP_ICON":"","APP_URL":"#"},
{"APP_ID":29,"APP_NAME":"Infobus ","APP_SHORT_NAME":"Infobus ","APP_KEYWORDS":"Infobus","APP_ICON":"","APP_URL":"#"},
{"APP_ID":30,"APP_NAME":"Credit Card Solutions Suite","APP_SHORT_NAME":"CCSS","APP_KEYWORDS":"Credit , Card , Solutions , Suite , CCSS","APP_ICON":"","APP_URL":"#"},
{"APP_ID":31,"APP_NAME":"eMetrics Dashboard","APP_SHORT_NAME":"EMDB","APP_KEYWORDS":"eMetrics , Dashboard , EMDB","APP_ICON":"","APP_URL":"#"}];
allRecordsCount = _data.length;
            APPS = _data;

    var create_DIV = "<div class='tile #COLOR w1 h1 #TILE_EFFECT #ICON_EFFECT isotope-item' style='position: absolute; left: 0px; top: 0px;'>"
                            + "<a class='link' href='#APP_URL' target='_blank' data-scroll='scrollto' data-app-id='#APP_ID'>"
                            + "<i class='fa #APP_ICON'></i>"
                            + "<p class='title fsmall'>#NAME</p>"
                            + "</a>"
                          + "</div>";

    for (var i = 0; i < allRecordsCount; i++) {

        var icon = APPS[i].APP_ICON == "" ? "" : APPS[i].APP_ICON;
        var $div = $(create_DIV.replace(NAME, APPS[i].APP_SHORT_NAME).replace(COLOR_CODE, Color_Codes[GetRandValue(Color_Codes.length)]).replace(TILE_EFFECT, tile_effect[GetRandValue(TILE_EFFECT.length)]).replace(ICON_EFFECT, icon_effect[GetRandValue(icon_effect.length)]).replace(APP_ID, APPS[i].APP_ID).replace(APP_ICON, icon).replace(APP_ICON, icon).replace(APP_URL,APPS[i].APP_URL));
        $("#start").isotope('insert', $div);

//        if (icon != "")
//            $("a[data-app-id=" + APPS[i].APP_ID + "]").parent().append("<img class='app-icon-center' src='Resources/img/icons/" + APPS[i].APP_ICON + "'/>");
//        else 
            $("a[data-app-id=" + APPS[i].APP_ID + "]").parent().append("<img class='app-icon-center1' src='Resources/img/icons/3m.png'/>");
    }
   
}

function ShowSearchContainer(appscount) {
    $("#start").hide();
    $("#search").show();
    $("#btn_back").parent().show();

    var $search = $("#search");
    $search.isotope('remove', $("#search .isotope-item"));

    var create_HEADER = "Search Results :: [" + appscount + " Apps]";

    if (appscount == 1)
        create_HEADER = "Search Results :: [" + appscount + " App]";
    
    $("#search .block-title").html(create_HEADER);

    if (appscount == 0) {
        var $No_App = $("<div class='tile success transparent imagetile tileshow w2 h1 isotope-item'>"
                    + "<div class='active' >"
                        + "<div class='caption red'>"
                            + "<a class='link' data-scroll='scrollto' href='#' >"
                                + "<div class='title'><i class='fa fa-exclamation-circle fa-2x'></i></div>"
                                + "<div class='caption-text twoline'>"
                                    + "No Apps Found"
                                + "</div>"
                            + "</a>"
                        + "</div>"
                        + "<span class='whitef fmedium text-padding'></span><br />"
                    + "</div>"
                + "</div>");
        $("#search").isotope('insert', $No_App);
    }
    ClearSearchResult();
}

function PopulateSearchApps(apps) {

    ShowSearchContainer(apps.length);

            create_DIV = "<div class='tile #APP_KEYWORDS success transparent imagetile tileshow w2 h1 isotope-item'>"
                    + "<div class='active' >"
                        + "<div class='caption #COLOR'>"
                            + "<a class='link' data-scroll='scrollto' href='#APP_URL' target='_blank' data-app-id='#APP_ID'>"
                                + "<div class='title'><i class='fa fa-file-text fa-2x'></i></div>"
                                + "<div class='caption-text twoline'>"
                                    + "#NAME"
                                + "</div>"
                            + "</a>"
                        + "</div>"
                        + "<span class='whitef fmedium text-padding'>#SHORT_NAME</span><br />"
                    + "</div>"
                + "</div>";

  

    for (var i = 0; i < apps.length; i++) {
        var filter_keywords = APPS[apps[i]].APP_KEYWORDS.replace(" ,", "").replace(", ", "").replace(",", "").toLowerCase() + " " + APPS[apps[i]].APP_ID;
        var $div = $(create_DIV.replace(SHORT_NAME, APPS[apps[i]].APP_SHORT_NAME).replace(NAME, APPS[apps[i]].APP_NAME).replace(COLOR_CODE, Color_Codes[GetRandValue(Color_Codes.length)]).replace(APP_ID, APPS[apps[i]].APP_ID).replace(APP_KEYWORDS, filter_keywords).replace(APP_URL, APPS[apps[i]].APP_URL));
        $("#search").isotope('insert', $div);
    }
    
    ClearSearchResult();
}

function PopulateSearchAppsList(keyword) {
    var SearchRecordCount = 0;
    
    var create_LI = "<li class='#FONT_COLOR' data-app-id='#APP_ID'><i class='fa fa-th-large'></i>&nbsp;#NAME</li>";

    APP_LIST = new Array();
    
    for (var j = 0; j < allRecordsCount; j++) {
        if (APPS[j].APP_KEYWORDS.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
            APP_LIST.push(j);
        else if (APPS[j].APP_NAME.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
            APP_LIST.push(j);
    }
    
    SearchRecordCount = APP_LIST.length;
    
    for (var i = 0; i < SearchRecordCount; i++) {
        $("#search_result ul").append(create_LI.replace(NAME, APPS[APP_LIST[i]].APP_NAME).replace(FONT_COLOR, font_color[GetRandValue(font_color.length)]).replace(APP_ID, APPS[APP_LIST[i]].APP_ID));
    }

    if (SearchRecordCount == 0) {
        $("#search_result ul").append("<li class='redf'><i class='fa fa-exclamation-circle'></i>&nbsp;No Apps Found</li>");
    }
}

function FilterSearchApps(keyword, app_id, isselected) {
    if (SEARCH_APP_SELECTED != -1) {
        APP_LIST = new Array();
        APP_LIST.push(app_id - 1);
        PopulateSearchApps(SEARCH_APP_SELECTED);
    }

    if (APP_LIST.length > 0)
        PopulateSearchApps(APP_LIST);
    else {
        ShowSearchContainer(0);
    }
}

$(function () {
    $("#search_result ul").on("click", "li", function () {
        // here I want to get the clicked id of the li (e.g. bakkerLink)
        SEARCH_APP_SELECTED = $(this).data("app-id");
        var keyword = APPS[SEARCH_APP_SELECTED - 1].APP_SHORT_NAME.toLowerCase();
        FilterSearchApps(keyword, SEARCH_APP_SELECTED, true);
    });
});

$(function () {
    $("#search_result ul").on("mouseover", "li", function () {
        $(".move li").removeClass("li-selected");
        $(this).addClass("li-selected");
    });
});

$(document).ready(function () {

    /*==== ISOTOPE LAYOUT ====*/
    $(this).click(function () {
        //ClearSearchResult();
    });

    PopulateApps();

    $("#btn_search").click(function () {
        $("#txt_search").val('');
        $("#txt_search").parent().toggle("slow");
        $("#search_result").hide("slow");
    });

    $("#txt_search").keyup(function (event) {

        var value = $(this).val();

        if (event.which == 40) {

            $(".move").find('.li-selected').removeClass('li-selected').next().addClass('li-selected').focus();
            if ($(".move").find('.li-selected').attr('class') == undefined) {
                $(".move li:first-child").addClass('li-selected').focus();
            }
            var app_id = $(".move .li-selected").data("app-id");
            $(this).val(APPS[app_id - 1].APP_NAME);
            SEARCH_APP_SELECTED = app_id;
            return;
        }
        if (event.which == 38) {
            $(".move").find('.li-selected').removeClass('li-selected').prev().addClass('li-selected').focus();
            if ($(".move").find('.li-selected').attr('class') == undefined) {
                $(".move li:last-child").addClass('li-selected').focus();
            }
            var app_id = $(".move .li-selected").data("app-id");
            $(this).val(APPS[app_id - 1].APP_NAME);
            SEARCH_APP_SELECTED = app_id;
            return;
        }
        else if (event.which == 13 && (value.length > 2 || value.trim() === "*")) {
            //HideSearchResult();
            FilterSearchApps(value.trim(), SEARCH_APP_SELECTED, false);
            SEARCH_APP_SELECTED = -1;
            return;
        }

        $("#search_result").hide();

        if (value.length > 2) {
            $("#search_result").show("slow");
            $("#search_result ul").html('');
            PopulateSearchAppsList(value);
        }

    });

    $("#iframe_link").load(function () {
        iFrameLoadCount = iFrameLoadCount + 1;
        // alert(iFrameLoadCount); Count 3 means success
    });

    $("#btn_back").click(function () {
        $(".on-demand-container").hide();
        $(this).parent().hide();
        $("#start").show();
        $("#iframe_link").attr("src", "about: blank");
        if (navigator.appName == 'Microsoft Internet Explorer') {
            window.frames[0].document.execCommand('Stop');
        } else {
            window.frames[0].stop();
        }
       
        $("#txt_search").parent().hide();
    });


    $("#a").bind("click", function (e) {

        $(".on-demand-container").hide();
        $($(this).attr('href')).show();
        //        $("#iframe_link").src('');
        $("#iframe_link").html('');
        $("#btn_back").show();
        $("#btn_home").hide();
        $("#start").hide();
        HideSearchResult();

        e.preventDefault();
        var $gotodiv = $($(this).attr('href'));

        var index = $(this).attr('href').replace("#", "");
        var left_offset = $gotodiv.offset().left;

        if (index == "start") {
            left_offset = 0;
        }

        if (!verticalbar)
            $('body, html').animate({
                'scrollLeft': left_offset
            });
        else
            $('body, html').animate({
                'scrollTop': $gotodiv.offset().top
            });


        if (index == "start") {
            SELECTED_APP_ID = 0;
            SELECTED_APP_URL = undefined;
            SELECTED_APP_NAME = undefined;
            SELECTED_APP_SHORT_NAME = undefined;
            $("#btn_back").hide();
            $("#start").show();

            return 0;
        }

        SELECTED_APP_ID = $(this).data("app-id");
        SELECTED_APP_URL = APPS[SELECTED_APP_ID - 1].APP_URL;
        SELECTED_APP_NAME = APPS[SELECTED_APP_ID - 1].APP_NAME;
        SELECTED_APP_SHORT_NAME = APPS[SELECTED_APP_ID - 1].APP_SHORT_NAME;

        if (Section_Click[index] == 0) {
            $("#" + index + " .htmltile").mCustomScrollbar({
                mouseWheelPixels: 300,
                theme: 'light-thick',
                scrollButtons: {
                    enable: true
                }
            });
            Section_Click[index] = 1;
        }

        $("#Link .block-title").html(SELECTED_APP_NAME); // + " ::: [" + SELECTED_APP_SHORT_NAME + "]");
        $("#iframe_link").attr("src", SELECTED_APP_URL);

        $("#iframe_link").mCustomScrollbar({
            mouseWheelPixels: 300,
            theme: 'light-thick',
            scrollButtons: {
                enable: true
            }
        });

        //window.frames['iframe_link'].location = SELECTED_APP_URL;

        //        $("#" + index + " .htmltile").mCustomScrollbar({
        //            mouseWheelPixels: 300,
        //            theme: 'light-thick',
        //            scrollButtons: {
        //                enable: true
        //            }
        //        });


    });


    /*==== METROMEGA SIDEBAR ====*/
    $('#opensidebar i').hover(function () {
        $('#sidebar').show(0).animate({
            'right': '0px'
        });
    });
    $('#sidebar').mouseleave(function () {
        $('#sidebar').animate({
            'right': '-120px'
        }, function () {
            $(this).css({
                'display': 'none'
            });
        });
    });

});