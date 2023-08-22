
function getRandomShayri() {
      fetch('https://script.google.com/macros/s/AKfycbyOk3Z6XvFykvhkrxhQz0fSF0cpKMJQ3WOcjXii-L7K20G-VHKd1kEsv_WXUBqj8woz/exec')
        .then(response => response.json())
        .then(data => {
          const shayriText = document.getElementById('shayriText');
          const shayarText = document.getElementById('shayarText');
          shayriText.innerText = data.shayri;
          shayarText.innerText = `- ${data.shayar}`;
        })
        .catch(error => {
          const shayriText = document.getElementById('shayriText');
          shayriText.innerText = 'Failed to fetch shayri.';
          console.error('Error fetching shayri:', error);
        });
    }

    getRandomShayri();
