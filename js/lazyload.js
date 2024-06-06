const d = document,
    $imgs = d.querySelectorAll("img");



const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            observer.unobserve(image);
        }
    })
})
export const imgsLoad = () => {

    $imgs.forEach(img => {
        observer.observe(img);
    });
};