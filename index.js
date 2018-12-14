var token ='fd0d0b2c2c970eb75ff7c3af26972f1d006a627f';
var url = 'https://api.github.com/gists';
var content = window.getSelection().toString();
var fileName = prompt('file name?', 'index.js');

var json = {
 "description": location.href + 'code',
 "public": true,
 "files": {}
};
json.files[fileName] ={
 "content": content
};

var request = new XMLHttpRequest();
request.open('POST', url, true);
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Authorization', 'token ' + token);

request.onload = function(){
  if (request.status >= 200 && request.status < 400){
    var json = JSON.parse(request.responseText);
    if (confirm('open URL?')){
      window.open(json.html_url, '_blank');
    }
  }else {
    alert('error ocurred.' + request.responseText);
  }
};
request.send(JSON.stringify(json));
