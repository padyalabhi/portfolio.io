var screenMode = document.querySelector("div.bright");
var brighMode = document.querySelector("img.bright");
var darkMode = document.querySelector("img.dark");
var brightnessState = true;

var brightnessTimeline = gsap.timeline({ repeat : -1 , repeatDelay : 0.1});
brightnessTimeline.to(".bright>img",{rotation : "90_cw" , duration : 2})
.to(".bright>img",{rotation : "45_ccw" , duration : 2, delay : '0.3'});


function makeItBright()
{
  document.documentElement.style.setProperty('--backgroundColor','#FBF8F1');
  document.documentElement.style.setProperty('--fontColor','black');
  document.documentElement.style.setProperty('--lineColor','black');
  document.documentElement.style.setProperty('--lineShade1','rgba(0, 0, 0, 0.1)');
  document.documentElement.style.setProperty('--lineShade2','rgba(0, 0, 0, 0.1)');
  document.documentElement.style.setProperty('--cardColor',"#FBF8F1");
  document.documentElement.style.setProperty('--yearColor',"#0E185F");
}

function makeItDark()
{
    document.documentElement.style.setProperty('--backgroundColor','black');
    document.documentElement.style.setProperty('--fontColor','white');
    document.documentElement.style.setProperty('--lineColor','white');
    document.documentElement.style.setProperty('--lineShade1','rgba(255, 255, 255, 0.1)');
    document.documentElement.style.setProperty('--lineShade2','rgba(255, 255, 255, 0.1)');
    document.documentElement.style.setProperty('--cardColor',"#1B262C");
  document.documentElement.style.setProperty('--yearColor',"#BBE1FA");
}

screenMode.addEventListener("click",()=>{
    console.log('clicked');
    if(brightnessState)
    {
        brighMode.style.display = "none";
        darkMode.style.display = "block";
        brightnessState = false;
        makeItDark();
    }
    else
    {
        brighMode.style.display = "block";
        darkMode.style.display = "none";
        brightnessState = true;
        makeItBright();
    }
});

var menuButton = document.querySelector("button.menu");
var menuList = document.querySelector(".menu-page");
var isMenuVisible = false;
var menuListTimeline = gsap.timeline({paused : true});
menuListTimeline.to(menuList,{x:0,duration:0.7,opacity:0.9});
menuButton.addEventListener("click", ()=>{
    if(!isMenuVisible)
    {
        menuList.style.visibility = "visible";
        isMenuVisible = true;
        menuListTimeline.play();
    }
    else
    {
        menuList.style.visibility = "hidden";
        isMenuVisible = false;
        menuListTimeline.reverse();
    }
});

var events = document.querySelectorAll(".event");
var progress = document.querySelector(".progress");
events.forEach((item)=>{
    item.addEventListener("mouseover",()=>{
        progress.style.width = item.dataset.progress+"%";
        progress.style.transition = "width 1.3s";
    });

    item.addEventListener("mouseout",()=>{
        progress.style.width = "1%";
    });
});

// contacts detailing
var icons = document.querySelectorAll(".contact > ul > li");
icons.forEach((item)=>{
    item.addEventListener("mouseover", ()=>{
        var path = item.querySelectorAll("path");
        var ele = item.querySelector("svg");
        ele.style.filter = "drop-shadow(0px 10px 1px rgb(166, 166, 166,0.5))";
        ele.style.transition = ".7s";
        item.style.transform = "translate3d(0px,-20px,0px)";
        item.style.transition = ".7s";
        
        
    });

    item.addEventListener("mouseout", ()=>{
        var path = item.querySelectorAll("path");
        path.forEach((i)=>{
            var ele = item.querySelector("svg");
            ele.style.filter = "drop-shadow(0px 0px 0px rgb(166, 166, 166,0.4))";
        })
        item.style.transform = "translate3d(0px,0px,0px)";
    });
});




/* page load animation */
