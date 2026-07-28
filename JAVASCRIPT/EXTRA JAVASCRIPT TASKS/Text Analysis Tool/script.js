const input = document.getElementById("input");
const button = document.getElementById("submit_button");
const frequency_word = document.getElementById("frequency_word");
const title = document.getElementById("title_frequency");
const averagecount = document.getElementById("average_count");
const average_word_title = document.getElementById("average_word_title");
const mostcommon_word = document.getElementById("mostcommon_word");
const commonword_title = document.getElementById("commonword_title");

let arr;
let length;
let cleantext;

// ---------------- Frequency of Words ----------------
button.onclick = function () {
  // Clear previous results
  frequency_word.textContent = "";
  mostcommon_word.textContent = "";

  arr = input.value.toLowerCase();

  // Remove punctuation and split the text into words
  let word = arr.replace(/[:?!,.]/g, " ");
  cleantext = word.trim().split(/\s+/);

  // Store the total number of words
  length = cleantext.length;

  console.log(arr);
  const par = document.createElement("p");

  // Store the frequency of each unique word
  let maxcount = [];

  // Loop through every word
  for (i = 0; i < length; i++) {
    const p = document.createElement("p");
    let count = 0;

    // Display section titles
    title.innerHTML = `<h4>Frequency of Each Word</h4>`;
    average_word_title.innerHTML = `<h4>Average word length </h4>`;
    commonword_title.innerHTML = `<h4>most common words</h4>`;

    //skip the row to prevent duplicate
    let pre = false;
    for (k = 0; k < i; k++) {
      if (cleantext[i] == cleantext[k]) {
        pre = true;
        break;
      }
    }

    if (pre) {
      continue;
    }

    // Count how many times the current word appears
    for (j = 0; j < length; j++) {
      if (cleantext[i] == cleantext[j]) {
        count++;
      }
    }

    // Store the count for later use
    maxcount.push(count);

    p.textContent = `■ ${cleantext[i]}--${count}`;
    console.log(p.textContent);
    frequency_word.append(p);
    input.value = "";
  }

  // ---------------- Average Word Length ----------------
  const average_array = [];
  cleantext.forEach((element, index) => {
    const len = element.length;
    average_array.push(len);
  });

  // Calculate the total number of characters
  const avg = average_array.reduce((accu, curr, index, array) => {
    return accu + curr;
  }, 0);

  // Calculate the average word length
  const average = Math.round(avg / length);

  // Display the average
  averagecount.innerHTML = `<p> ■ ${average}</p>`;
  console.log(average);

  // ---------------- Most Common Word ----------------

  // Find the highest frequency
  const common = Math.max(...maxcount);

  const p = document.createElement("p");

  // Find and display the most repeated words
  for (i = 0; i < maxcount.length; i++) {
    if (maxcount[i] == common) {
      // Display only repeated words
      if (maxcount[i] > 1) {
        const p = document.createElement("p");
        p.textContent = cleantext[i];
        mostcommon_word.append(p);
        console.log(cleantext[i]);
      } else {
        p.textContent = "No repeated common words";

        console.log("No repeated common words");
      }
      mostcommon_word.append(p);
    }
  }
};
