//var app = express();
const url = 'http://flip1.engr.oregonstate.edu:3406/';


// function to send data via submit form
document.getElementById('anysubmit').addEventListener('click', function(event){
  var req = new XMLHttpRequest();
  req.open('POST', 'http://flip1.engr.oregonstate.edu:3406/')
  req.setRequestHeader('Content-Type', 'application/json');
  //req.body = {name: "test"}
  var input = {"name": "test"}
  //let input = document.getElementById('anyData').value
        
  req.onload = function(){
    if(req.status >= 200 && req.status < 400){
      var response = JSON.parse(req.responseText);
      console.log(response);
      
    } else {
      console.log(req.status)
    }
    };
    
  req.send(json.stringify(input));
  event.preventDefault();
  });


