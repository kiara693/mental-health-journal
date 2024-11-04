document.addEventListener("DOMContentLoaded", () => {
    // Load saved entries on page load
    loadEntries();
    displayRandomQuote();
});

function saveEntry() {
    const entryText = document.getElementById("entry").value;
    
    if (entryText.trim() === "") {
        alert("Please write something in the journal entry.");
        return;
    }

    // Retrieve existing entries from Local Storage or initialize an empty array
    let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    
    // Add the new entry with a timestamp
    const newEntry = {
        text: entryText,
        date: new Date().toLocaleString()  // Save current date and time
    };
    
    entries.push(newEntry);

    // Save updated entries array back to Local Storage
    localStorage.setItem("journalEntries", JSON.stringify(entries));

    // Clear the text area and reload entries
    document.getElementById("entry").value = "";
    loadEntries();
}

function loadEntries() {
    // Retrieve entries from Local Storage
    const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    const entriesList = document.getElementById("entriesList");

    // Clear current list
    entriesList.innerHTML = "";

    // Display each entry
    entries.forEach(entry => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${entry.date}:</strong> ${entry.text}`;
        entriesList.appendChild(listItem);
    });
}

function displayRandomQuote() {
    const quotes = [
        "Remember, taking small steps forward is still progress.",
        "Be gentle with yourself; you’re doing the best you can.",
        "Your feelings are valid, no matter what.",
        "Progress, not perfection.",
        "Breathe in peace, breathe out stress."
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").textContent = quotes[randomIndex];
}
