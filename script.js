// Smooth scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Show custom popup when product is added to cart
function showCartPopup() {
    const popup = document.getElementById("cart-popup");
    popup.classList.add("show");

    // Hide after 2.5 seconds
    setTimeout(() => {
        popup.classList.remove("show");
    }, 2500);
}

// Handle Add to Cart button clicks
const cartButtons = document.querySelectorAll(".add-to-cart");
cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        showCartPopup();
        // You can add actual cart logic here later
    });
});

// Handle newsletter subscription
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
});

// Product search filter
document.getElementById("searchInput").addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const title = card.getAttribute("data-name")?.toLowerCase() || "";
        if (title.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Handle Liked and Cart icon clicks
document.getElementById("liked").addEventListener("click", () => {
    alert("Liked section coming soon!");
});

document.getElementById("cart").addEventListener("click", () => {
    alert("Cart is currently empty.");
});
