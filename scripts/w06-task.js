


const getNewQuote = async => {
    const options = {
        method: 'GET',
        headers: { 'x-api-key': 'AAsdHy+UXMkyZL10PoJKEA==LzJ13yxvIi7Zmbz1' }
      }
      
      const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness'
      
      
      fetch(apiUrl, options)
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Data not found');
          } else if (response.status === 500) {
            throw new Error('Server error');
          } else {
            throw new Error('Network response was not ok');
          }
        }
        return response.json();
      })
      .then(data => {
        quote.innerHTML = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
    let likes = 0;
        function numOfLikes() {
            likes += 1;
            document.getElementById("likes").innerHTML = likes;
        };
    
    getNewQuote()