
Practice exercises · MD
Copy

# Practice Exercises - Async JavaScript

## Session 2 Exercises

### Exercise 1: Traffic Light Simulator ⭐
**Difficulty:** Beginner
**Concepts:** setTimeout, callbacks

Create a traffic light that changes colors:
- Start with Red (2 seconds)
- Then Yellow (1 second)
- Then Green (3 seconds)
- Print the color and a message for each

**Starter code:**
```javascript
console.log("🚦 Traffic Light Starting...\n");

setTimeout(() => {
  console.log("🔴 RED - Stop!");
  // Add yellow light here
}, 0);
```

**Expected output:**
```
🚦 Traffic Light Starting...
🔴 RED - Stop!
🟡 YELLOW - Get ready...
🟢 GREEN - Go!
```

---

### Exercise 2: Pomodoro Timer ⭐⭐
**Difficulty:** Intermediate
**Concepts:** setInterval, clearInterval

Build a simple Pomodoro timer:
- Work period: 25 seconds (print countdown)
- Break period: 5 seconds (print countdown)
- Stop automatically after break

**Hints:**
- Use setInterval for the countdown
- Track the current phase (work/break)
- Use clearInterval when done

---

### Exercise 3: Animated Loading ⭐⭐
**Difficulty:** Intermediate
**Concepts:** setInterval, string manipulation

Create a loading animation in the console:
```
Loading.
Loading..
Loading...
Loading
```

Make it loop 10 times, then print "Complete!"

**Starter code:**
```javascript
let dots = 0;
const loadingInterval = setInterval(() => {
  // Your code here
}, 300);
```

---
