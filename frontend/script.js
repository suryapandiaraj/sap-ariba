document.addEventListener('DOMContentLoaded', () => {
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const responseArea = document.getElementById('response-area');

    form1.addEventListener('submit', (event) => {
        event.preventDefault();
        const input1 = document.getElementById('input1').value;
        submitData(input1);
    });

    form2.addEventListener('submit', (event) => {
        event.preventDefault();
        const input2 = document.getElementById('input2').value;
        submitData(input2);
    });

    function submitData(data) {
        fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data }),
        })
        .then(response => response.json())
        .then(data => {
            responseArea.textContent = data.response;
        })
        .catch(error => console.error('Error:', error));
    }
});
