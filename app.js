    let imObj = null;
    imgObj = document.getElementById("myImage")
    function click() {
        imgObj = document.getElementById("myImage")
        imgObj.style.position='relative';
        imgObj.style.left='0px';
}
function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
window.load = click();