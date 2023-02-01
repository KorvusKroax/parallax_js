const parallaxLayers = document.querySelectorAll(".parallax-layer");

window.onscroll = () => 
{ 
    const scroll = window.scrollY;

    parallaxLayers.forEach((layer) =>
    {
        const speed = scroll * layer.dataset.distance;
        layer.style.transform = "translateY(" + speed + "px)";
    });
}
