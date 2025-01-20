const strars = document.querySelectorAll('#rating');
const output = document.querySelector('.ratings');
const getTitle = document.querySelector('.massage-topic-name');
const getTitle1 = document.querySelector('.massage-topic-name-1');
const searcFixed = document.querySelector('div#search-bar-dic');
const getTitlePodact = document.querySelector('#massage-topic-name-prdact');



$(document).ready(function(){
   
    //console.log(strars);
   hideshowBar();
    
for(x=0; x<strars.length; x++){
    strars[x].starValue = (x+1);
     //strars[x].addEventListener('click', function(){
       // console.log("I am cliceked");
    
   // })
    ["click", "mouseover", "mouseout"].forEach(function(e){
        strars[x].addEventListener(e, showRating);
                                              
     })
    
}
    
});


function showRating(e){
    let type = e.type;
    //console.log(type);
    let starValue = this.starValue;
    //console.log(starValue);
    if(type === 'click'){
        if(starValue > 1){
            output.innerHTML = "ཁྱེད་ཀྱིས་སྐར་རྟགས། " + starValue  +" གནང་སོང་།"; 
        }
    }
    strars.forEach(function(elem, ind){
        if(type === 'click')
        {
          if(ind <starValue)
          {
             elem.classList.add('checked');
          }else{
             elem.classList.remove('checked');
          }
        }
        
        if(type === 'mouseover')
        {
          if(ind <starValue)
          {
             elem.classList.add('checked');
          }else{
             elem.classList.remove('checked');
          }
        }
        
        //if(type === 'mouseout')
       // {
        //     elem.classList.remove('checked');
        //}
    });
    
    
    
}
function ratingModal(){
       // console.log("modal hehe");
    const pordactName = 
    $("#rating-modal").modal('show');
    
    var h1Text = document.querySelector("#podact-name").textContent;
    getTitle.innerTextHTML = h1Text + " འདི་དང་འབྲེལ་བའི་བསམ་ཚུལ་བྲིས།";
    console.log(h1Text);
    
    
}
function ratingModalPocact(){
       // console.log("modal hehe");
    const pordactName = 
    $("#rating-modal").modal('show');
    
    var h1Text = document.querySelector("#podact-name").textContent;
    getTitlePodact.innerHTML = h1Text + " འདི་དང་འབྲེལ་བའི་བསམ་ཚུལ་བྲིས།";
    //console.log(getTitlePodact.innerHTML);
    
    
}

function ratingModalDic(){
       // console.log("modal hehe");
    var h1Text1 = document.querySelector("#index-name").textContent;
    getTitle1.innerHTML =h1Text1 + " འདི་དང་འབྲེལ་བའི་བསམ་ཚུལ་བྲིས།";
    const indexName = 
    $("#rating-modal").modal('show');
    
    
    
    
    //console.log(getTitle1.innerHTML);

}
function ratingModalDicStar(){
       // console.log("modal hehe");
    const indexName = 
    $("#star-modal").modal('show');
    
    var h1Text = document.querySelector("#index-name").textContent;
    getTitle.innerHTML =h1Text + " འདི་དང་འབྲེལ་བའི་སྐར་རྟགས་རྒྱོབ།";
   // console.log(h1Text);

}

function commentSave(){
  
//console.log("sdfsdfsd");
   
   
       
   
        let comment = {
            id: Date.now(),
            topic: document.getElementById('podact-name').innerText,
            title: document.getElementById('massage-title').value,
            message: document.getElementById('massage').value
        }
        //comments.push(comment);
 
        alert(JSON.stringify(comment));
    
    //save to sqlite data

var date = Date.now();
   var topic = document.getElementById('podact-name').innerText;
   var massager = document.getElementById('massage-title').value;
   var massage = document.getElementById('massage').value;

db.run('INSERT into groups(topic, massager_name, message)values(?, ?, ?)',[topic], [massager], [massage]), function(err,row){
    if(err){
        console.log(err.message);
    }
    console.log("entry added to table");
};
    
    
    
}
//འདི་ནི་ཤོག་ངོས་པར་བཤུ་རྒྱག་བྱེད་ཡིན།
function Copy() {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.href;
  console.log(Url.innerHTML)
  Url.select();
  document.execCommand("copy");
}
//འདི་ནི་འགོ་བརྗོད་མེད་པར་བཟོ་བྱེད་ཡིན།
function hideshowBar(){
    var doc = document.documentElement;
    var w = window;

    var curScroll = prevScroll = w.screenY || doc.scrollTo;
    var curDirection = prevDirection = 0;


    var header = document.getElementById('tool-2');
    var hederTitle = document.getElementById('heder-title');
    var toolDic = document.getElementById('tool-dic')
var threshold = 50;
var toggled;

    var checkScorll = function(){
        curScroll = w.scrollY || doc.scrollTo;
        if(curScroll > prevScroll){
            curDirection = 2;
           

        }else{
            curDirection = 1;
           
        }
        
        if(curDirection !== prevDirection){
           toggled = toggleeHeader();
        }

        if(toggled){
            prevDirection = curDirection;

        }
        
        prevScroll = curScroll;


    }
    var toggleeHeader = function(){
        toggled = true;
        if(curDirection === 2 && curScroll > threshold){
            //header.classList.add('hide');
            //hederTitle.classList.add('hide');
           //searcFixed.classList.add('search-bar-fiexd');


        }else if(curDirection === 1){
            //header.classList.remove('hide');
           // hederTitle.classList.remove('hide');
            //searcFixed.classList.remove('search-bar-fiexd')
        }else{
            toggled = false;
        }
        return toggled;

    }
     window.addEventListener('scroll', checkScorll);


}
function changeFontBigerStyle(){
  // document.getElementById('dic-full-text').style.fontSize = "24px";
//demo_paragraph = document.getElementById( 'dic-full-text' );
//demo_paragraph.fontSize = "150%" ;
    
    var tXt = document.getElementById("dic-full-text");
  var fnum = parseInt(getComputedStyle(tXt)['font-size']);
  fnum -=1 ;
  tXt.style.fontSize= fnum+"px"
   console.log("hhhh");

  
    
    }

