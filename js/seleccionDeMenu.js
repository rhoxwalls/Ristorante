const d = document,
    $todo = d.querySelector(".todo"),
    $ensalada = d.querySelector(".ensalada"),
    $pasta = d.querySelector(".pasta"),
    $pizza = d.querySelector(".pizza"),
    $postre = d.querySelector(".postre"),
    $platillo = d.querySelectorAll(".platillo"),
    $platillos = d.querySelector(".platillos");

export const seleccionarEnsalada = () => {
    $ensalada.addEventListener("click", () => {
        let ensaladas = [];
        $platillo.forEach(ensalada => {
            if (ensalada.dataset.platillo === "ensalada") {
                ensaladas.push(ensalada)
            };
        });
        $platillos.innerHTML = ""
        ensaladas.forEach(ensalada => {
            $platillos.appendChild(ensalada);
        });
    });
};

export const seleccionarPasta = () => {
    $pasta.addEventListener("click", () => {
        let pastas = [];
        $platillo.forEach(pasta => {
            if (pasta.dataset.platillo === "pasta") {
                pastas.push(pasta)
            };
        });
        $platillos.innerHTML = ""
        pastas.forEach(pasta => {
            $platillos.appendChild(pasta);
        });
    });
};

export const seleccionarPizza = () => {
    $pizza.addEventListener("click", () => {
        let pizzas = [];
        $platillo.forEach(pizza => {
            if (pizza.dataset.platillo === "pizza") {
                pizzas.push(pizza)
            };
        });
        $platillos.innerHTML = ""
        pizzas.forEach(pizza => {
            $platillos.appendChild(pizza);
        });
    });
};

export const seleccionarPostre = () => {
    $postre.addEventListener("click", () => {
        let postres = [];
        $platillo.forEach(postre => {
            if (postre.dataset.platillo === "postre") {
                postres.push(postre)
            };
        });
        $platillos.innerHTML = ""
        postres.forEach(postre => {
            $platillos.appendChild(postre);
        });
    });
};

export const seleccionarTodo = () => {
    $todo.addEventListener("click", () => {
        let todo = [];
        $platillos.innerHTML = ""
        $platillo.forEach(platillo=>
            todo.push(platillo)
        )
        todo.forEach(todo => {
            $platillos.appendChild(todo);
        });
    });
};


// let platillosArray = [];

// $platillo.forEach(platillo =>
//     platillosArray = [...platillosArray, platillo]);
// console.log(platillosArray);
// const ensaladas = platillosArray.filter(ensalada => ensalada.getAttributes("data-platillo") === "ensalda" );
// console.log(ensaladas);