document.getElementById('signature-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Eingabewerte abrufen
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;

    // Generiere die Signatur
    const signature = `
        <div>
            <p><strong>${firstName} ${lastName}</strong></p>
            <p>${department}</p>
            <p>Telefon: ${phone}</p>
        </div>
    `;

    // Ausgabe der Signatur
    document.getElementById('output').innerHTML = signature;
});