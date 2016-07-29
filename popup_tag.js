function popup_tag($tag, event) {
  //
  if (event) {
     event.preventDefault();
  }
  if (popup_remove(event)) {
    return;
  }
  var $popup = $('<div>')
    .hide()
    .addClass('popup')
    .css({"position": "fixed"})
    .appendTo("body");
  $tag.appendTo($popup);
  var left,top;
  var w = $popup.getWidth(),
      h = $popup.getHeight();
  left = ($(window).width() - w)/2,
  top = ($(window).height() - h)/2;
  $popup.css({left: left, top: top})
    .show();
  $('body').unbind();
  $('body').click(function(e) {
    if (event && 
        e.target!==event.target && (e.timeStamp-event.timeStamp)>200) {
      popup_remove(e);
    }
  });  
  $("div.popup").unbind();
  $("div.popup").click(function(e) {
    popup_remove(e);
  });  
  if (event) {
    event.stopPropagation();
  }
}

function popup_remove(e) {
  if (isValidCtr($("div.popup"))) {
    $('body').unbind();
    $("div.popup").unbind();
    $("div.popup").remove();
    return true;
  }
  return false;
}
