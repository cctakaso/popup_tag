# popup_tag
javascript popup message and other tags library

## how to use
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<link rel="stylesheet" href="css/jquery-ui.min.css">
<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/popup_tag.js"></script>

</style>
</head>
<body>

<div id="click">Click here!</div>


<script>
  $(window).load(function(){
    $("div#click").click(function(e) {
      var $tag = $("<div>").html("your messages!");
      popup_tag($($tag, e);
    });
  });

</script>
</body>
</html>
```
