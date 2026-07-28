const button = document.getElementById("submit");
const quotes = document.getElementById("quotes");
button.onclick = async function () {
  try {
    const response = await fetch("https://dummyjson.com/quotes");

    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // Parse the response as JSON
    const data = await response.json();
    console.log(data);

    // Generate a random index to select a quote
    const id = Math.floor(Math.random() * data.quotes.length);
    const quote = data.quotes[id];

    quotes.textContent = `${quote.quote} - ${quote.author}`;
  } catch (error) {
    console.log(error);
  }
};
