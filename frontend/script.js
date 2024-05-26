document.addEventListener("DOMContentLoaded", () => {
  const submenuItems = document.querySelectorAll(".submenu li");
  const content = document.getElementById("content");
  const leftContent = document.getElementById("left-content");
  const rightContent = document.getElementById("right-content");
  const requestForm = document.getElementById("request-form");

  submenuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const description = item.getAttribute("data-description");
      const submenuTitle = item.textContent;

      // Show content section
      content.style.display = "flex";

      // Update left content
      leftContent.innerHTML = `
                <h2>Request</h2>
                <p>${description}</p>
                <form id="request-form">
                    <input type="text" id="input1" placeholder="Input 1" required>
                    <input type="text" id="input2" placeholder="Input 2" required>
                    <button type="submit">Submit</button>
                </form>
            `;

      // Re-add event listener to new form
      const newRequestForm = document.getElementById("request-form");
      newRequestForm.addEventListener("submit", handleSubmit);

      // Update right content
      rightContent.innerHTML = `
                <h2>Response</h2>
                <p class="submenu-title">${submenuTitle}</p>
                <p>${description}</p>
            `;
    });
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;

    // Make an AJAX request to the backend
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input1, input2 }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response data
        rightContent.innerHTML += `
                <p>Response from server: ${data.response}</p>
            `;
      })
      .catch((error) => console.error("Error:", error));
  };

  requestForm.addEventListener("submit", handleSubmit);
});
