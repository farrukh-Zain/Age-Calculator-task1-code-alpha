function collectUserName() {
    const userName = prompt("Please enter your name:");
    
    if (userName !== null && userName.trim() !== "") {
        document.getElementById('userNameDisplay').textContent = `${userName} AGE`;
    }
    
    // Now calculate age after getting the user's name
    calculateAge();
}

function calculateAge() {
    const birthdateInput = document.getElementById('birthdateInput').value;
    const birthdate = new Date(birthdateInput);
    const currentDate = new Date();

    const ageInMillis = currentDate - birthdate;
    const ageInSeconds = ageInMillis / 1000;

    let years = Math.floor(ageInSeconds / (60 * 60 * 24 * 365));
    let months = Math.floor((ageInSeconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
    let days = Math.floor(((ageInSeconds % (60 * 60 * 24 * 365)) % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    document.getElementById('years').textContent = years.toString().padStart(2, '0');
    document.getElementById('months').textContent = months.toString().padStart(2, '0');
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    setTimeout(calculateAge, 1000); // Update every second
}
