// Function to generate ticket
function generateTicket() {
    const name = document.getElementById('name').value;
    const branch = document.getElementById('branch').value;
    const phone = document.getElementById('phone').value;

    if (name && branch && phone) {
        document.getElementById('ticketName').innerText = `Name: ${name}`;
        document.getElementById('ticketBranch').innerText = `Branch: ${branch}`;
        document.getElementById('ticketPhone').innerText = `Phone: ${phone}`;
        document.getElementById('ticket').style.display = 'block';
        document.getElementById('downloadBtn').style.display = 'block';
    }
}

// Function to download ticket as image
function downloadTicket() {
    const ticketElement = document.getElementById('ticket');
    html2canvas(ticketElement).then(canvas => {
        const link = document.createElement('a');
        link.download = 'movie_ticket.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
