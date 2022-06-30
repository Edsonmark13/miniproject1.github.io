let html;
let css;
let js;
let code;

_initDocuments('HTML', 'CSS', 'JS', 'result');
_initHtml();

function _initDocuments(html, css, js, result) {
  this.html = document.getElementById(html);
  this.css = document.getElementById(css);
  this.js = document.getElementById(js);
  this.code = document.getElementById(result);
}

function _initHtml() {
  let _init = '<!DOCTYPE html>';
  _init += '\n<html lang="en">';
  _init += '\n<head>';
  _init += '    \n\t<meta charset="UTF-8">';
  _init += '    \n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">';
  _init += '    \n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">';
  _init += '    \n\t<title>B Academy</title>';
  _init += '    \n\t<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"';
  _init += '        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">';
  _init += '    \n\t<script src="https://kit.fontawesome.com/8ad5cf4f0f.js" crossorigin="anonymous"></script>';
  _init += ' ';
  _init += '\n</head>';
  _init += '\n<body>';
  _init += '\n \n \n <!---your code here -->\n \n \n \n \n ';
  _init += '\n</body>';
  _init += '\n</html>';

  if (this.html == null) {
    return;
  }
  this.html.value = _init;
}

function reload() {
  let htmlValue = this.html != null ? this.html.value : "";
  let cssValue = this.css != null ? this.css.value : "";
  let jsValue = this.js != null ? getJavascriptCorrectSyntax(this.js.value) : "";

  this.code.contentWindow.document.open();
  this.code.contentWindow.document.write(
    htmlValue +
    "<style>" +
    cssValue +
    "</style>" +
    "<script>" +
    jsValue +
    "</script>"
  );
  this.code.contentWindow.document.close();
}

function check_tab(el, e) {
  if (e.key == 'Tab') {
    e.preventDefault();
    let start = el.selectionStart;
    let end = el.selectionEnd;

    el.value = el.value.substring(0, start) +
      "\t" + el.value.substring(end);

    el.selectionEnd = start + 1;
  }
}

function activeLayout(layout) {
  for (let i = 0; i < layout.parentElement.childElementCount; i++) {
    layout.parentElement.children[i].classList.remove('layout-active');
  }
  layout.classList.add('layout-active');

}

function getJavascriptCorrectSyntax(jsValue) {
  return jsValue.replace(/let /gi, "");;
}