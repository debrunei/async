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
            document.querySelector("#async-status").textContent ="Loading...";
            document.querySelector("#async-grid").className = "status loading";
            document.querySelector("#async-grid").innerHTML = "";
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
            document.querySelector("#async-status").textContent = `Loaded ${users.length} users`;
            document.querySelector("#async-status").className = "status success";
        } catch (error) {
            document.querySelector("#async-status").textContent = `Error: ${error.message}`;
            document.querySelector("#async-status").className = "status error";
        }
    });


document
    .querySelector("#error-test-btn")
    .addEventListener("click", async () => {
        try {
            document.querySelector("#async-status").textContent ="Loading...";
            document.querySelector("#async-grid").className = "status loading";
            document.querySelector("#async-grid").innerHTML = "";
            const res = await fetch(`${API_BASE}/BACKURL`)
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
            document.querySelector("#async-status").textContent = `Loaded ${users.length} users`;
            document.querySelector("#async-status").className = "status success";
        } catch (error) {
            document.querySelector("#async-status").textContent = `Error: ${error.message}`;
            document.querySelector("#async-status").className = "status error";
        }
    });

document
    .querySelector("#post-btn")
    .addEventListener("click", async () => {
        const title = document.getElementById("post-title").value;
        const body = document.getElementById("post-body").value;
        const postData = {
            title: title,
            body: body,
            userId: 1};

        const statusElement = document.querySelector("#post-status");
        const responseElement = document.querySelector("#post-response");
        const postButton = document.querySelector("#post-btn");

        statusElement.textContent = "Sending...";
        statusElement.className = "status loading";

        try{
            document.querySelector("#post-status").textContent = "Sending...";
            const response = await fetch(`${API_BASE}/posts`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(postData),
            });
            const data = await response.json();
            responseElement.textContent = JSON.stringify(data, null, 2);
            responseElement.classList.add("visible");
            statusElement.textContent = `Post created! ID:  ${data.id}`;
            statusElement.className = "status success";

            document.querySelector("#post-title").value = "";
            document.querySelector("#post-body").value = "";
        }catch(error){
         statusElement.textContent = `Error: ${error.message}`;
         statusElement.className = "status error";
        }
    });

document
    .querySelector("#clear-btn")
    .addEventListener("click", () => {
        document.querySelector("#post-title").value = "";
        document.querySelector("#post-body").value = "";
        document.querySelector("#post-response").classList.remove("visible");
        document.querySelector("#post-status").textContent = "";
        document.querySelector("#post-status").className = "status";
    });

// ────────────────────────────────────────────────
// ── TODO 11 (BONUS) ────────────────────────────
// At the START of your post handler:
//   document.querySelector("#post-btn").disabled = true;
// In BOTH try (after success) and catch:
//   document.querySelector("#post-btn").disabled = false;
// ────────────────────────────────────────────────