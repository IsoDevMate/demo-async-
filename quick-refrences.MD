# Async JavaScript Quick Reference Guide

## 📌 The Basics

### What is Asynchronous Code?
Code that doesn't block - it allows other code to run while waiting for something to complete.

**Synchronous (Blocking):**
```javascript
processHugeFile();  // Everything waits!
console.log("Done");  // This waits too
```

**Asynchronous (Non-blocking):**
```javascript
processFileAsync(() => console.log("File done"));
console.log("Keep working!");  // This runs immediately!
```

---

## ⏰ Timers

### setTimeout - Run Once After Delay
```javascript
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
```

**Parameters:**
- Callback function (what to run)
- Delay in milliseconds (1000ms = 1 second)

### setInterval - Run Repeatedly
```javascript
const id = setInterval(() => {
  console.log("This runs every second");
}, 1000);

// Stop it later
clearInterval(id);
```

**Important:** Always clear intervals to prevent memory leaks!

### Common Time Values
```javascript
100ms   = 0.1 seconds
500ms   = 0.5 seconds
1000ms  = 1 second
2000ms  = 2 seconds
60000ms = 1 minute
```

---

## 🔁 The Event Loop

### How JavaScript Handles Async

```
┌─────────────────┐
│   Call Stack    │ ← Your code runs here (one at a time)
└─────────────────┘
        ↕
┌─────────────────┐
│    Web APIs     │ ← Timers, fetch, etc. wait here
└─────────────────┘
        ↓
┌─────────────────┐
│ Callback Queue  │ ← Callbacks wait their turn
└─────────────────┘
        ↑
    Event Loop checks: "Is Call Stack empty? Move callback up!"
```

**Key Points:**
1. JavaScript executes one task at a time (Call Stack)
2. Async operations go to Web APIs
3. Callbacks wait in the queue
4. Event Loop moves callbacks to stack when ready

---

## 🎯 Callbacks

### What is a Callback?
A function passed to another function to be executed later.

### Synchronous Callback
```javascript
[1, 2, 3].forEach((num) => {
  console.log(num);  // Runs immediately
});
```

### Asynchronous Callback
```javascript
setTimeout(() => {
  console.log("Runs later!");  // Runs after delay
}, 1000);
```

### Callback Pattern
```javascript
function doSomething(callback) {
  // Do work...
  callback(result);  // Call the callback when done
}

doSomething((result) => {
  console.log(result);
});
```

---

## 🌐 Fetch API

### Basic Fetch
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);  // Use the data!
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Step by Step:
1. `fetch(url)` - Makes the request, returns a Promise
2. `.then(response => response.json())` - Converts to JSON
3. `.then(data => {...})` - Use the data
4. `.catch(error => {...})` - Handle errors

### Complete Example
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network error');
    }
    return response.json();
  })
  .then(post => {
    console.log('Title:', post.title);
    console.log('Body:', post.body);
  })
  .catch(error => {
    console.error('Failed to fetch:', error);
  });
```

---

## 🖱️ Event Listeners

### Adding Event Listeners
```javascript
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

### Common Events

| Event | When it fires |
|-------|---------------|
| `click` | Element is clicked |
| `dblclick` | Element is double-clicked |
| `mouseenter` | Mouse enters element |
| `mouseleave` | Mouse leaves element |
| `input` | Input value changes |
| `change` | Input loses focus after change |
| `submit` | Form is submitted |
| `keydown` | Key is pressed down |
| `keyup` | Key is released |
| `load` | Page/resource finishes loading |

### Event Object
```javascript
input.addEventListener('input', (event) => {
  console.log(event.target.value);  // The input's value
});
```

### Multiple Event Listeners
```javascript
const btn = document.getElementById('btn');

btn.addEventListener('mouseenter', () => {
  console.log('Mouse entered!');
});

btn.addEventListener('click', () => {
  console.log('Clicked!');
});

btn.addEventListener('mouseleave', () => {
  console.log('Mouse left!');
});
```

---

## 🎁 Promises

### What is a Promise?
An object representing an async operation that will complete in the future.

### Promise States
```
┌──────────┐
│ Pending  │ ← Operation in progress
└──────────┘
      │
      ├─→ Fulfilled (✅ Success)
      │
      └─→ Rejected (❌ Error)
```

### Creating a Promise
```javascript
const myPromise = new Promise((resolve, reject) => {
  // Do async work
  if (success) {
    resolve(result);  // Success!
  } else {
    reject(error);    // Failed!
  }
});
```

### Using a Promise
```javascript
myPromise
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Promise Chaining
```javascript
fetch(url)
  .then(response => response.json())
  .then(data => processData(data))
  .then(result => saveResult(result))
  .then(() => console.log('All done!'))
  .catch(error => console.error(error));
```

**Rule:** Always return in .then() to chain properly!

### Multiple Promises

#### Promise.all() - Wait for ALL
```javascript
Promise.all([
  fetch(url1),
  fetch(url2),
  fetch(url3)
])
.then(results => {
  console.log('All requests done!', results);
})
.catch(error => {
  console.log('At least one failed!', error);
});
```

#### Promise.race() - First to Finish
```javascript
Promise.race([
  fetch(fastAPI),
  fetch(slowAPI)
])
.then(result => {
  console.log('Fastest result:', result);
});
```

---


### Pattern 4: Loading States
```javascript
let isLoading = false;

function loadData() {
  isLoading = true;
  showSpinner();
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      showError(error);
    })
    .finally(() => {
      isLoading = false;
      hideSpinner();
    });
}
```

---

---

## 🎯 Quick Decision Guide

### When to use what?

**setTimeout:**
- Run something once after a delay
- Create animations
- Debouncing

**fetch:**
- Get data from APIs
- Send data to servers
- AJAX requests

**Promises:**
- Handle async operations cleanly
- Chain multiple async tasks
- Better error handling than callbacks

**Event Listeners:**
- Respond to user actions
- React to browser events
- Interactive features

---

## 📚 Helpful Resources

### Free APIs for Practice
- JSONPlaceholder: `https://jsonplaceholder.typicode.com/`
- Random User: `https://randomuser.me/api/`
- Dog Pictures: `https://dog.ceo/api/breeds/image/random`
- Quotes: `https://api.quotable.io/random`
- Pokemon: `https://pokeapi.co/api/v2/pokemon/pikachu`

### Documentation
- MDN Async: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
- MDN Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- MDN Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

### Tools
- Browser Console (F12) - Test fetch calls
- JSONView Extension - Pretty JSON in browser
- Postman - Test APIs

---

## 🚀 Next Steps

After mastering this content:
1. Learn async/await (modern Promise syntax)
2. Study Promise.allSettled() and Promise.any()
3. Explore error boundaries in async code
4. Build real projects with APIs
5. Learn about service workers and background sync

---

## 💡 Pro Tips

1. **Always handle errors** - Use .catch() or try/catch
2. **Clean up** - Clear intervals and timeouts
3. **Test in browser console** - Quick way to experiment
4. **Use async/await** - Once you learn it (next topic!)
5. **Check network tab** - See actual API calls in DevTools
6. **Read API docs** - Know what data you'll get back
7. **Start simple** - Build up complexity gradually
8. **Console.log everything** - While learning, log each step

---

**Remember:** Async code is about allowing your program to do multiple things without blocking. The callback/promise is what runs AFTER the async operation completes!
