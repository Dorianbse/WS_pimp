const imgs = document.getElementsByTagName("img")

for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = 'http://placekitten.com/' + imgs[i].width + '/' + imgs[i].height;
}
