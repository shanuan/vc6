// blEBooks.js
// blEBooks.js*:	https://github.com/littleflute/vc6/edit/master/XdHtml/plx/blEBooks.js
// blEBooks.js:	https://littleflute.github.io/vc6/XdHtml/plx/blEBooks.js


function _blEBooksClass ()
{
	var _wrap = bl$( "id_div_4_blEBooksClass" );

	this.v = "_blEBooksClass v0.0.13";
	this.blrBook1 = function(b,d){
		_wrap.update("https://raw.githubusercontent.com/littleflute/pro-javascript-design-patterns/master/cnbook/",0,0);
	}
	this.blrBook2 = function(b,d){
		_wrap.update("https://littleflute.github.io/beg-ajax-w-php/pics/DSC_",7883,0);
	}
	this.blrBook3 = function(b,d){
		_wrap.update("https://littleflute.github.io/beautifullover114/pics/",0,1);
	}
	this.blrBook4 = function(b,d){
		_wrap.update("https://raw.githubusercontent.com/littleflute/web/master/website%20Createion/DSC_",6203,0);
	}

}
var d = bl$( "id_div_4_blEBooksClass" );
var s = "blEBooks_v0.0.25 - ";
s += "<a target = '_blank' href='https://littleflute.github.io/vc6/XdHtml/plx/blEBooks.js'>blEBooks.js</a> - ";
s += "<a target = '_blank' href='https://github.com/littleflute/vc6/edit/master/XdHtml/plx/blEBooks.js'>blEBooks.js*</a>";

d.v = blo0.blDiv(d,d.id+"div",s,blGrey[3]); 
d.v.d = blo0.blDiv(d.v,d.v.id+"d","d",blGrey[1]); 
blo0.blShowObj2Div(d.v.d,new _blEBooksClass);


