
    function handleSearch(event) {
        debugger
        event.preventDefault(); // Prevent the form from submitting the traditional way

        var query = document.getElementById('search-query').value.toLowerCase(); // Get the search query and convert to lowercase

        // Define a map of diseases to their respective URLs
        var diseasePages = {
            'covid-19': 'disease1.html',
            'tuberculosis': 'disease2.html',
            'cancer': 'disease3.html',
            // Add more diseases and their corresponding page URLs here
        };

        // Check if the query matches a disease
        if (diseasePages[query]) {
            window.location.href = diseasePages[query]; // Redirect to the disease page
        } else {
            alert('No results found for "' + query + '". Please try again.');
        }
    }