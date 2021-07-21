window.onresize = function() {
  getRem(375, 100);
};
function getRem(pwidth, prem) {
  var html = document.getElementsByTagName("html")[0];
  var oWidth =
    document.body.clientWidth || document.documentElement.clientWidth;
  var size = (oWidth / pwidth) * prem > 150 ? 150 : size;
  html.style.fontSize = (oWidth / pwidth) * prem + "px";
}
getRem(375, 100);
