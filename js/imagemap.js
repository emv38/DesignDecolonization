//will run as soon as site is loaded
document.addEventListener('DOMContentLoaded', function () {

    //get progress bar div
    const progressbarinner = document.querySelector('.progress-bar-inner');

    window.addEventListener('scroll' , function() {
        let h= document.documentElement;

        let st = h.scrollTop || document.body.scrollTop;
        let sh = h.scrollHeight || this.document.body.scrollHeight;

        let percent = st / (sh - h.clientHeight) * 100;
        progressbarinner.style.width = percent + "%";
        progressbarinner.innerText = Math.round(percent) + "%";

        console.log(percent);

    });

    // Hide all info containers when the page loads
    const containers = document.querySelectorAll('.info-container');
    containers.forEach(container => container.style.display = 'none');
});

function showContainer(containerId) {
    console.log('Clicked on area. Showing container:', containerId);
    // Hide all info containers
    const containers = document.querySelectorAll('.info-container');
    containers.forEach(container => container.style.display = 'none');

    // Show the specific info container
    const selectedContainer = document.getElementById(containerId);
    selectedContainer.style.display = 'block';
}