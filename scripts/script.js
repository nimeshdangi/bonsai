/* Author: Sujal Khatiwada*/

//Script for scrolling
let upButton = document.getElementById("upButton");

//called whenever user scrolls
window.onscroll = function() {
   scrollFunction()
};

function scrollFunction(){
    //turns the image property to viewable or not
    if(document.documentElement.scrollTop >20) {
        upButton.style.display = "block";
    }
    else {
        upButton.style.display = "none";
    }
}

function goUp(){
    while (document.documentElement.scrollTop >0) {
        //while not working as intended
        document.documentElement.scrollTop = document.documentElement.scrollTop - 1;
    }
    
}

/*
function takes 4 parameters. folder for the folder's name where the images are stores, 
the id for div where the slideshow happens
the time interval
and the names of the images in an array
*/
function slideshow(folder, divId, time, slideshow){ //Works # can add time in both s and ms? maybe check for ends with s, then check if 2nd last is m (or last two is ms)?
    var image = document.getElementById(divId);
                

    //checks for folder name.
    if (folder != "")
    {
        // image.innerHTML = "<img src=./media/"+slideshow[slideno]+">"; 
        folderDir = folder+'/';
    }
    else
    {
        folderDir = folder;
    }

    var slideno = 0;
    function slider() {
        if (slideno < slideshow.length - 1){
            slideno = slideno + 1;
        }
        else{
            slideno = 0;
        }

        image.innerHTML = "<img src = \"../media/"+folderDir+slideshow[slideno]+"\">";
        console.log(slideshow[slideno]);
    }
                
    setInterval(slider, time); 
}


