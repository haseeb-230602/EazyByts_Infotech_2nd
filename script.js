document.addEventListener("DOMContentLoaded", function() {
    // Handle product form submission
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');
    const totalProducts = document.getElementById('total-products');

    productForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const productName = document.getElementById('product-name').value;
        const productQuantity = document.getElementById('product-quantity').value;

        const listItem = document.createElement('li');
        listItem.textContent = `${productName} - Quantity: ${productQuantity}`;
        productList.appendChild(listItem);

        updateTotalProducts();
        productForm.reset();
    });

    // Update total products count
    function updateTotalProducts() {
        totalProducts.textContent = productList.children.length;
    }

    // Handle order form submission
    const orderForm = document.getElementById('order-form');
    const orderList = document.getElementById('order-list');
    const totalOrders = document.getElementById('total-orders');

    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const orderId = document.getElementById('order-id').value;
        const orderStatus = document.getElementById('order-status').value;

        const listItem = document.createElement('li');
        listItem.textContent = `Order ID: ${orderId} - Status: ${orderStatus}`;
        orderList.appendChild(listItem);

        updateTotalOrders();
        orderForm.reset();
    });

    // Update total orders count
    function updateTotalOrders() {
        totalOrders.textContent = orderList.children.length;
    }

    // Handle user form submission
    const userForm = document.getElementById('user-form');
    const userList = document.getElementById('user-list');
    const totalUsers = document.getElementById('total-users');

    userForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const userName = document.getElementById('user-name').value;
        const userRole = document.getElementById('user-role').value;

        const listItem = document.createElement('li');
        listItem.textContent = `${userName} - Role: ${userRole}`;
        userList.appendChild(listItem);

        updateTotalUsers();
        userForm.reset();
    });

    // Update total users count
    function updateTotalUsers() {
        totalUsers.textContent = userList.children.length;
    }
});
