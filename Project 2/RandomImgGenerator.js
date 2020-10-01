//You can change function in onClick() event in Generate Random IMG button
//ImgGenerator() function generates only one random image after clicking on Generate Random IMG button
function ImgGenerator(){
    var image=document.createElement('img');
    var div= document.getElementById('flex-img-gen');
    let link = "https://loremflickr.com/200/150/animals";
    image.src =link;
    div.appendChild(image);
}


//ImgGenerator2() function generates multiple random images after clicking on Generate Random IMG button
function ImgGenerator2(){
    let links = ["https://loremflickr.com/200/150/animals","https://loremflickr.com/200/150/cat","https://loremflickr.com/200/150/person","https://loremflickr.com/200/150/dog","https://loremflickr.com/200/150/building","https://loremflickr.com/200/150/child"];

    for(let i=0;i<links.length;i++){
        var image2=document.createElement('img');
        var div= document.getElementById('flex-img-gen');
        image2.src= links[i];
        div.appendChild(image2);
    }
}
