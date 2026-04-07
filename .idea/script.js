const API_BASE = "https://jsonplaceholder.typicode.com";

document
    .querySelector("#warmup-btn")
    .addEventListener("click", () => {
        fetch(`${API_BASE}/users`)
            .then(res => res.json())
            .then(users => {
                let html = "";
                users.forEach(user => {
                    html +=
                    `<div class="card">
                         <div class="name">${user.name}</div>
                         <div class="detail">${user.email}</div>
                     </div>`
                });
                document.querySelector("#warmup-grid").innerHTML = html;
                document.querySelector("#warmup-status").textContent =
                    `Loaded ${users.length} users`;
                document.querySelector("#warmup-status").className = "status su"
            });
    })

document
    .querySelector("#async-btn")
    .addEventListener("click", async () => {
        try {

            const res = await fetch(`${API_BASE}/users`)
            const users = await res.json()
            let html = "";
            users.forEach(user => {
                html +=
                    `<div class="card">
                     <div class="name">${user.name}</div>
                     <div class="detail">${user.email}</div>
                 </div>`
            });
            document.querySelector("#async-grid").innerHTML = html;
        } catch (error) {
            document.querySelector("#async-status").textContent = `Error: ${error.message}`;
            document.querySelector("#async-status").className = "status error";
        }
    })


// ────────────────────────────────────────────────
// ── TODO 4 ──────────────────────────────────────
// BEFORE the await fetch() line:
//   1. Set #async-status textContent = "Loading..."
//   2. Set #async-status className = "status loading"
//   3. Set #async-grid innerHTML = "" (clear old cards)
// AFTER rendering cards:
//   1. Set #async-status textContent = "Loaded X users"
//   2. Set #async-status className = "status success"
// ────────────────────────────────────────────────


// ────────────────────────────────────────────────
// ── TODO 5 ──────────────────────────────────────
// Select #error-test-btn and add a click listener.
// Copy your async function but change the URL to:
//   API_BASE + "/BADURL"
// Click it — your catch block should show an error.
// (This button stays broken on purpose for testing.)
// ────────────────────────────────────────────────


// ────────────────────────────────────────────────
// ── TODO 6 ──────────────────────────────────────
// Select #post-btn and add a click listener.
// Inside:
//   1. const title = document.querySelector("#post-title").value;
//   2. const body  = document.querySelector("#post-body").value;
//   3. const postData = { title: title, body: body, userId: 1 };
// ────────────────────────────────────────────────


// ────────────────────────────────────────────────
// ── TODO 7 ──────────────────────────────────────
// Using async/await + try/catch, send a POST:
//   const response = await fetch(API_BASE + "/posts", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(postData)
//   });
//   const data = await response.json();
//
// Before the fetch, set #post-status to "Sending..."
// ────────────────────────────────────────────────


// ────────────────────────────────────────────────
// ── TODO 8 ──────────────────────────────────────
// After successful POST:
//   1. const display = document.querySelector("#post-response");
//   2. display.textContent = JSON.stringify(data, null, 2);
//   3. display.classList.add("visible");
//   4. Set #post-status textContent = "Post created! ID: " + data.id
//   5. Set #post-status className = "status success"
// ────────────────────────────────────────────────


// ────────────────────────────────────────────────
// ── TODO 9 ──────────────────────────────────────
// In your catch block:
//   1. Set #post-status textContent = "Error: " + error.message
//   2. Set #post-status className = "status error"
// ────────────────────────────────────────────────


// ────────────────────────────────────────────────
// ── TODO 10 ─────────────────────────────────────
// After TODO 8 (still inside try, after status update):
//   1. document.querySelector("#post-title").value = "";
//   2. document.querySelector("#post-body").value = "";
// Also wire #clear-btn to clear both inputs,
//   hide #post-response, and clear #post-status.
// ────────────────────────────────────────────────


// ────────────────────────────────────────────────
// ── TODO 11 (BONUS) ────────────────────────────
// At the START of your post handler:
//   document.querySelector("#post-btn").disabled = true;
// In BOTH try (after success) and catch:
//   document.querySelector("#post-btn").disabled = false;
// ────────────────────────────────────────────────