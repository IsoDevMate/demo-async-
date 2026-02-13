// Learn: How to fetch data from APIs using Promises

console.log("🌐 Fetching data from the internet...\n");

// Example 1: Simple fetch - Get a random user

fetch('https://randomuser.me/api/')
  .then(response => {
    console.log("✅ Response received!");
    return response.json();  // Convert to JSON
  })
  .then(data => {
    const user = data.results[0];
    console.log("\n👤 Random User Info:");
    console.log(`Name: ${user.name.first} ${user.name.last}`);
    console.log(`Email: ${user.email}`);
    console.log(`Location: ${user.location.city}, ${user.location.country}`);
  })
  .catch(error => {
    console.error("❌ Error:", error);
  });

// Example 2: Multiple fetches - Get jokes
setTimeout(() => {
  console.log("\n\n Fetching a programming joke...\n");
  
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(joke => {
      console.log(`Q: ${joke.setup}`);
      setTimeout(() => {
        console.log(`A: ${joke.punchline} \n`);
      }, 2000);  // Wait 2 seconds before showing punchline
    })
    .catch(error => console.error("❌ Error:", error));
}, 3000);