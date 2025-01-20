function iphone(){
    // Get the checkbox
  var checkBox = document.getElementById("iphoneCheck");

  if (checkBox.checked == true){
    //alert("sdfsdf"); 

      var a = document.createElement("a");
      a.setAttribute('class', "nav-link");
      a.setAttribute('role', "tab");
      a.setAttribute('data-bs-toggle', "tab");      
      a.setAttribute('href', "#tab-1");
      a.setAttribute('style', "border-style: none;");
      a.textContent ="iPhone";
      
      
     var ul = document.getElementById("iphone-tab-link");
      
  var li = document.createElement("li");
      //li.setAttribute('href', "www.monlamit.com");
      li.setAttribute('id', "iphon-link");
      li.setAttribute('class', "nav-item");
      li.setAttribute('role', "presentaion");
      //li.textContent ="lobsang ";
      li.appendChild(a);
  
  ul.appendChild(li);
      
      var tabContent = document.getElementById("tab-content");
      var div = document.createElement("div");
        div.setAttribute('id', "tab-1");
      div.setAttribute('class', "tab-pane");
      div.setAttribute('role', "tabpanel");
      
      var div2 = document.createElement("div");
      var div3 = document.createElement("div");
      var div4 = document.createElement("div");
      div4.setAttribute('class', "col text-nowrap");
       div4.setAttribute('id', "scrollmenu-2");
      div4.setAttribute('style', "margin-bottom: 18px;display: inline-block;overflow-x: auto;padding-top: 10px;");
      var img1 = document.createElement("img");
      var img2 = document.createElement("img");
      var img3 = document.createElement("img");
      img1.setAttribute('class', "rounded");
      img1.setAttribute('src', "cn-tb-dic-ios-1.png");
      img1.setAttribute('style', "max-width: 230px;margin-right: 10px;border-top-left-radius: 15px;border-top-right-radius: 15px;border-bottom-right-radius: 15px;border-bottom-left-radius: 15px;");
      
      img2.setAttribute('class', "rounded");
      img2.setAttribute('src', "cn-tb-dic-ios-2.png");
      img2.setAttribute('style', "max-width: 230px;margin-right: 10px;border-top-left-radius: 15px;border-top-right-radius: 15px;border-bottom-right-radius: 15px;border-bottom-left-radius: 15px;");
      
      img3.setAttribute('class', "rounded");
      img3.setAttribute('src', "cn-tb-dic-ios-3.png");
      img3.setAttribute('style', "max-width: 230px;margin-right: 10px;border-top-left-radius: 15px;border-top-right-radius: 15px;border-bottom-right-radius: 15px;border-bottom-left-radius: 15px;");
      
      div4.appendChild(img1);
      div4.appendChild(img2);
      div4.appendChild(img3);
      
      div3.setAttribute('class', "row");
      div3.appendChild(div4);
      div2.appendChild(div3);
      div.appendChild(div2);
      
      tabContent.appendChild(div);

      
  } else {
       $('#iphon-link').remove();
      $('#tab-1').remove();
    
  }
}
function editTab(){
    var checkBox = document.getElementById("edit-tabas");

  if (checkBox.checked == true){
      //ddd
      var tabBar = document.getElementById("tab-bar");
      tabBar.setAttribute('contenteditable', "true");
      
  }else {
      //dfdsfsd
      var tabBar = document.getElementById("tab-bar");
      tabBar.setAttribute('contenteditable', "fale");
      
    
  }
    
}