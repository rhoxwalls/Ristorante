const d = document,
    $menu = d.querySelector(".hamburguesa"),
    $nav = d.querySelector(".nav"),
    $a = d.querySelectorAll("a.a-nav");



export const abrirMenu = () => {
    $menu.addEventListener("click", () => {
        $nav.classList.toggle("ocultar");
        if (!$nav.classList.value.includes("ocultar")) {
            $nav.classList.add("panel");
        } else {
            $nav.classList.remove("panel");
        };
    });
};

export const cerrarMenu = () => {
    $a.forEach(a => {
        a.addEventListener("click", () => {
            if (a.classList.contains("a-nav")) {
                $nav.classList.add("ocultar");
            };
        });
    });
};

export const botonCerrar = () => {
    const p = d.createElement("button");
    p.classList.add("cierre");
    p.classList.add("md:hidden");
    p.innerText = "x";
    if ($nav.classList.contains("ocultar")) {
        $nav.prepend(p);
    };

    p.addEventListener("click", (e) => {
        if (p.classList.contains("cierre")) {
            $nav.classList.add("ocultar");
        };
    });
};