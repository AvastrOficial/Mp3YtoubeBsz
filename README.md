# Mp3YtoubeBsz

Es una herramienta web simple que permite insertar videos de YouTube dentro de un `iframe` personalizado, utilizando una API externa que genera una tarjeta visual del video. Es ideal para compartir contenido de YouTube con una presentación atractiva y embebida en sitios web.

## 🚀 ¿Cómo funciona?

El usuario ingresa una URL de YouTube (en formato largo o corto), y el script extrae automáticamente el ID del video. Luego, se genera un `iframe` que incrusta el video dentro de una tarjeta visual atractiva.

## 🌐 URL compatibles

- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`

## 📥 Formatos disponibles para descarga

A continuación se listan los formatos disponibles para descarga de audio y video:

| Formato            | Descripción     |
|--------------------|-----------------|
| mp3                | MP3             |
| M4A                | M4A             |
| webm_audio         | WEBM Audio      |
| CAA                | CAA             |
| Flac               | FLAC            |
| Opus               | OPUS            |
| Ogg                | OGG             |
| WAV                | WAV             |
| 360                | MP4 360p        |
| 480                | MP4 480p        |
| 720                | MP4 720p        |
| 1080               | MP4 1080p       |
| 4K                 | MP4 4K          |
| 8K                 | MP4 8K          |


## 🧩 API utilizada

El proyecto utiliza la siguiente API externa para generar la tarjeta visual del video:

- **OceanSaver Card API**  
  `https://p.oceansaver.in/api/card2/?url=https://www.youtube.com/watch?v=VIDEO_ID`  
  Esta API embebe el video de YouTube en una tarjeta con diseño responsivo. Se le puede pasar un parámetro adicional `adUrl` para mostrar una URL publicitaria en la tarjeta.

## 🔧 Tecnologías

- HTML
- JavaScript
- [iFrame Resizer](https://github.com/davidjbradshaw/iframe-resizer) (para ajustar automáticamente el tamaño del iframe)

## 📸 Ejemplo visual

![image](https://github.com/user-attachments/assets/14018f50-d731-415d-9740-148d3a2be0c1)


## 📝 Cómo usar

1. Ingresa la URL de un video de YouTube.
2. El sistema extraerá automáticamente el ID del video.
3. Se mostrará un `iframe` con el contenido del video embebido de forma atractiva.

## ⚠️ Advertencia

La API externa utilizada (`p.oceansaver.in`) puede estar sujeta a cambios o límites de uso. Asegúrate de revisar los términos de uso si piensas usarlo en producción.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
