document.addEventListener('DOMContentLoaded', () => {
    const dropArea = document.getElementById('drop-area');
    const fileInput = document.getElementById('fileInput');
    const videoPlayer = document.getElementById('videoPlayer');

    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.classList.add('drag-over');
    });

    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('drag-over');
    });

    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dropArea.classList.remove('drag-over');
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        handleFiles(files);
    });

    function handleFiles(files) {
        const videoFile = files[0];
        if (videoFile && videoFile.type.startsWith('video/')) {
            const videoURL = URL.createObjectURL(videoFile);
            videoPlayer.src = videoURL;
        } else {
            alert('Por favor, selecciona un archivo de video válido.');
        }
    }
});
