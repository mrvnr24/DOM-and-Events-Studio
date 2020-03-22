// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function loadWindow () {
    const missionAbortButton = document.getElementById("missionAbort");
    const landingButton = document.getElementById("landing");
    const takeoffButton = document.getElementById("takeoff");

    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");

    const rocket = document.getElementById("rocket");

    const flightStatus = document.getElementById("flightStatus");
    const flightScreen = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    
    takeoffButton.addEventListener("click", function clickTakeoff () {
        
        let isConfirmed = confirm('Is the shuttle is ready for takeoff?');

        if (isConfirmed) {

            flightStatus.innerHTML = "Shuttle in flight.";
            flightScreen.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10,000";
            rocket.style.bottom = '120px';

        }
    });

    landingButton.addEventListener("click", function clickLanding () {
        
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        flightScreen.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
        rocket.style.bottom = '0';

    });

    missionAbortButton.addEventListener("click", function () {

        let isConfirmed = confirm("Confirm that you want to abort the mission.");

        if (isConfirmed) {

            flightStatus.innerHTML = "Mission aborted.";
            flightScreen.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
            rocket.style.bottom = '0';
            rocket.style.left = '125px';

        }
    });

    leftButton.addEventListener("click", function () {
        rocket.style.left = String(parseInt(rocket.style.left, 10) - 10) + 'px';
    });        
    rightButton.addEventListener("click", function () {
        rocket.style.left = String(parseInt(rocket.style.left, 10) + 10) + 'px';
    });
    upButton.addEventListener("click", function () {
        rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) + 10) + 'px';
    });
    downButton.addEventListener("click", function () {
        rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) - 10) + 'px';
    });
});

