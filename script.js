let count = 0;

        function increment() {
            count++;
            document.getElementById("number").textContent = count;
        }

        function decrement() {
            if (count <= 0) {
                count = 0;
            }
            else{
                count--;
            }
            document.getElementById("number").textContent = count;
        }


let products = [
    { name: "mirror", description: "ytyuruhryurhguryfiuufuruuurui", price: 1500 , img:""},
    { name: "phone", description: "ytyuruhryurhguryfiuufuruuurui", price: 1500 },
    { name: "key bord", description: "ytyuruhryurhguryfiuufuruuurui", price: 1500 },
    { name: "mirror", description: "ytyuruhryurhguryfiuufuruuurui", price: 1500 },
    { name: "mirror", description: "ytyuruhryurhguryfiuufuruuurui", price: 1500 },
]

products.forEach((product) => {
    const prod = document.getElementsByClassName('pop');
    prod.className = 'produc';
    prod = `<div class="java d-flex mt-3">
                    <img class="d-inline" src="./img/03.png" alt="pro">
                    <div class="">
                        <p class="pp">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p >${product.price}</p>
                    </div>     
                </div>`
    product.appendChild(prod);
});
  