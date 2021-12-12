const adjustBodyToViewport = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width / height > 0.65) {
        document.body.style.width = height * 0.60 + "px";
        document.body.style.height = document.body.children[0].style.height = height - (height * 0.1) + "px";
        document.body.style.marginLeft = (width - height * 0.60) / 2 + "px";
        document.body.style.marginTop = document.body.style.marginBottom = height * 0.05 + "px";
    } else {
        document.body.style.width = width + "px";
        document.body.style.height = document.body.children[0].style.height = height + "px";
        document.body.style.marginLeft = 0;
        document.body.style.marginTop = document.body.style.marginBottom = "0px";
    }
}

export { adjustBodyToViewport }