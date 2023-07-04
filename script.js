function getRandomShayri() {
    fetch("https://script.google.com/macros/s/AKfycbyOk3Z6XvFykvhkrxhQz0fSF0cpKMJQ3WOcjXii-L7K20G-VHKd1kEsv_WXUBqj8woz/exec")
      .then(response => response.json())
      .then(data => {
        document.getElementById("shayriText").textContent = data.shayri;
        document.getElementById("shayarText").textContent = "By " + data.shayar;
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  getRandomShayri();
  