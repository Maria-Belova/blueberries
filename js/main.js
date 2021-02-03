// function Scroll() {
//   scroll(0, 0);
//   return false;
// }

var t;
function Scroll() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-50);
		t = setTimeout('Scroll()',20);
	} else clearTimeout(t);
	return false;
}