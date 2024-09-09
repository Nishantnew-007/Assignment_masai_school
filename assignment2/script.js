const ctx = document.getElementById('barChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Product Prices',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const rating = parseInt(document.getElementById('productRating').value);

    chart.data.labels.push(name);
    chart.data.datasets[0].data.push(price);

    chart.update();

    this.reset();
});

document.getElementById('sortByPrice').addEventListener('click', function() {
    sortData('price');
});

document.getElementById('sortByRating').addEventListener('click', function() {
    sortData('rating');
});

let products = [];

function sortData(criteria) {
    products = products.map((product, index) => ({
        ...product,
        index
    }));

    if (criteria === 'price') {
        products.sort((a, b) => a.price - b.price);
    } else if (criteria === 'rating') {
        products.sort((a, b) => a.rating - b.rating);
    }

    chart.data.labels = products.map(product => product.name);
    chart.data.datasets[0].data = products.map(product => product.price);

    chart.update();
}
