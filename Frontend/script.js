document.getElementById("businessForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const isValid = form.checkValidity();
    if (!isValid) {
        alert("Please fill out all required fields.");
        return;
    }

    const formData = new FormData(form);

    document.getElementById("loading").style.display = "block";

    try {
        const response = await fetch('http://localhost:8080/api/business', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        alert(result.message);
        form.reset();
    } catch (error) {
        alert('Something went wrong.');
    }

    document.getElementById("loading").style.display = "none";
});
