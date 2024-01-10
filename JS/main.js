<!DOCTYPE html>
<html lang="es">
<head>
</head>
<body>
    <div>
        <h2>Carrito de Compras</h2>
        <div>
            <h3>Productos</h3>
            <ul id="productList">
      
            </ul>
        </div>
        <div>
            <h3>Carrito</h3>
            <ul id="cartList"></ul>
            <p>Total: <span id="total">0.00</span></p>
        </div>
        <div>
            <label for="product">Producto:</label>
            <select id="product" required>
                <option value="camara">Cámara Fotográfica</option>
                <option value="sweater">Sweater de Lana</option>
            </select>

            <label for="quantity">Cantidad:</label>
            <input type="number" id="quantity" value="1" min="1" required>

            <button type="button" id="addToCartBtn">Agregar al Carrito</button>
        </div>
    </div>

    <script>
        let cart = [];

        function addToCart(product, quantity) {
            // Aquí puedes calcular el precio del producto según tu lógica
            let price = calculateProductPrice(product);
            let total = price * quantity;

            cart.push({ product, quantity, total });
            updateCart();
        }

        function updateCart() {
            const cartList = document.getElementById("cartList");
            const totalElement = document.getElementById("total");

            cartList.innerHTML = ""; // Limpiar el contenido actual

            let total = 0;

            cart.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = `${item.quantity}x ${item.product} - Total: $${item.total.toFixed(2)}`;
                cartList.appendChild(listItem);
                total += item.total;
            });

            totalElement.textContent = total.toFixed(2);
        }

        function calculateProductPrice(product) {
            // Aquí puedes tener un mapa de precios según el producto
            const prices = {
                camara: 500.00,
                sweater: 40.00,
        
            };

            return prices[product] || 0;
        }

        // Asociar la función addToCart al evento click del botón "Agregar al Carrito"
        document.getElementById("addToCartBtn").addEventListener("click", function() {
            let product = document.getElementById("product").value;
            let quantity = parseInt(document.getElementById("quantity").value);

            addToCart(product, quantity);
        });
    </script>

    
</body>
</html>

