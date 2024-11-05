let count = 0;

        function increment() {
            count++;
            document.getElementById("number").textContent = count;
        }

        function decrement() {
            count--;
            document.getElementById("number").textContent = count;
        }