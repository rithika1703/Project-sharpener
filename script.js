function addWebsite() {
    var title = document.getElementById('title').value;
    var url = document.getElementById('url').value;

    if (title && url) {
        var resultDiv = document.getElementById('result');
        var newElement = document.createElement('p');
        newElement.textContent = `Title: ${title}, URL: ${url}`;
        resultDiv.appendChild(newElement);

        // Clear input fields
        document.getElementById('title').value = '';
        document.getElementById('url').value = '';
    } else {
        alert('Please enter both title and URL.');
    }
}
