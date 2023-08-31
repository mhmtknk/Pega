/* passing parameters dynamically - start */
function preparePegaAParams(gadgetName) {
  var pegaAParamObj = {};
  /* replace the calls to getCookie with the appropriate function */
  pegaAParamObj.ContactId=getCookie("ContactID");
	pegaAParamObj.AccountNumber=getCookie("AccountNumber");
	pegaAParamObj.username=getCookie("UserName");
  pegaAParamObj.CustomerURL=window.location.href.replace(/(http|https):\/\//,'');
  pegaAParamObj.Language=window.navigator.language;  
  return pegaAParamObj;
}

/* Set cookies. To be overwritten locally */
  setCookie("ContactID", "CONT-1", 30);
  setCookie("AccountNumber","1234500078963456", 30);
  setCookie("UserName","Sara", 30);


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
      var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//static-content-hash-trigger-YUI