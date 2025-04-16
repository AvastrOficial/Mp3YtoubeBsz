    function generateIframe() {
        var youtubeUrl = document.getElementById("youtubeUrl").value.trim();
        var videoId = '';

        // Verifica si es formato largo o corto
        if (youtubeUrl.includes("youtube.com/watch?v=")) {
            videoId = youtubeUrl.split("v=")[1].split("&")[0];
        } else if (youtubeUrl.includes("youtu.be/")) {
            videoId = youtubeUrl.split("youtu.be/")[1].split("?")[0];
        } else {
            alert("Por favor ingresa una URL válida de YouTube.");
            return;
        }

        // Si no se extrajo bien el ID, avisar
        if (!videoId || videoId.length < 5) {
            alert("No se pudo extraer el ID del video. Asegúrate de ingresar una URL correcta.");
            return;
        }

        // Crear y mostrar el iframe
        var iframe = document.createElement('iframe');
        iframe.id = 'cardApiIframe';
        iframe.src = `https://p.oceansaver.in/api/card2/?url=https://www.youtube.com/watch?v=${videoId}&adUrl=https://myAdurl.com`;
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.style.border = "none";
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('allowtransparency', 'true');

        var iframeContainer = document.getElementById("iframeContainer");
        iframeContainer.innerHTML = '';
        iframeContainer.appendChild(iframe);

        iFrameResize({ log: false }, "#cardApiIframe");
    }
