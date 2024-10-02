const API_KEY = '46166847-40e887f0f1cbd269c98d3b401';

function searchImages() {
    const query = document.getElementById('query').value.trim();
    if (query === "") {
        alert("Vui lòng nhập từ khóa tìm kiếm!");
        return;
    }

    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imageList = document.getElementById('image-list');
            imageList.innerHTML = "";  // Clear the previous search results

            if (data.hits.length > 0) {
                data.hits.forEach(image => {
                    const li = document.createElement('li');
                    li.innerHTML = `<img src="${image.webformatURL}" alt="${image.tags}">`;
                    imageList.appendChild(li);
                });
            } else {
                imageList.innerHTML = "<li>Không tìm thấy hình ảnh nào!</li>";
            }
        })
        .catch(error => {
            console.error("Error fetching images:", error);
            alert("Đã xảy ra lỗi khi tìm kiếm hình ảnh.");
        });
}
