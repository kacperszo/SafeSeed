const adjustBodyToViewport = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const wrapper = document.querySelector("#main-wrapper");
    if (width / height > 0.60) {
        wrapper.style.width = height * 0.55 + "px";
        wrapper.style.height = height - (height * 0.1) + "px";
        wrapper.style.marginLeft = (width - height * 0.55) / 2 + "px";
        wrapper.style.marginTop = wrapper.style.marginBottom = height * 0.05 + "px";
        wrapper.style.borderRadius = "1rem";
    } else {
        wrapper.style.width = width + "px";
        wrapper.style.height = height + "px";
        wrapper.style.marginLeft = 0;
        wrapper.style.marginTop = wrapper.style.marginBottom = "0px";
        wrapper.style.borderRadius = "0";
    }
}

export { adjustBodyToViewport }