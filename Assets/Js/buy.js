function saveOnSession(imgDir,title,desc,price){
    sessionStorage.setItem('item', imgDir)
    sessionStorage.setItem('title',title )
    sessionStorage.setItem('desc', desc)
    sessionStorage.setItem('price', price)
    location.href='/buy.html';
}