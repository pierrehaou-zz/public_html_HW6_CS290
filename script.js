//var app = express();
const url = 'http://flip1.engr.oregonstate.edu:3406/';

// app.get('/',function(req,res){
//     var context = {};
//     request(url);
  
//     function handleGet(err, response, body){
//       if(!err && response.statusCode < 400){
//         context.owm = body;
//         console.log(context.owm)
//         console.log(body)
//       } else {
//         console.log(err);
//         console.log(response.statusCode);
//       }
//     }
//   })

// app.post('/', function(req,res){
//   //for the query string content
//   var qParams = [];
//   for (var q in req.query){
//     qParams.push({'name':q,'value':req.query[q]})
//   }
//   var bParams = [];
//   for (var b in req.body){
//     bParams.push({'name':b,'value':req.body[b]})
//   }
//   var context = {};
//   context.dataList = qParams;
//   context.bodyList = bParams;
//   res.render('postreceived', context);

// });

document.getElementById('anysubmit').addEventListener('click', function(event){
  var req = new XMLHttpRequest();
  req.open('POST', 'http://flip1.engr.oregonstate.edu:3406/')
  req.setRequestHeader('Content-Type', 'application/json');
  //req.body = {name: "test"}
  //input = {"name": "test"}
  //let input = document.getElementById('anyData').value
        
  req.onload = function(){
    if(req.status >= 200 && req.status < 400){
      var response = JSON.parse(req.responseText);
      console.log(response);
      
    } else {
      console.log(req.status)
    }
    };
    
  req.send({"name":"test"});
  event.preventDefault();
  });


