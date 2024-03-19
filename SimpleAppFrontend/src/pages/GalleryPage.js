import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'images/chess-race-program.png',
        thumbnail: 'images/chess-race-program.png',
        description: `A small game involving racing chess pieces, written in Python`,
        originalHeight: '450px',
      },
      {
        original: 'images/Constuction-3d-Models.jpg',
        thumbnail: 'images/Constuction-3d-Models.jpg',
        description: `A screenshot of a project using 3d scanned objects from a construction site. Made in Unreal Engine`,
        originalHeight: '450px',
      },
      {
        original: 'images/daughter-sitting-riverside.jpg',
        thumbnail: 'images/daughter-sitting-riverside.jpg',
        description: `A picture of my daughter sitting by a river.`,
        originalHeight: '450px',
      },
      {
        original: 'images/html-code.png',
        thumbnail: 'images/html-code.png',
        description: `HTML code from a page of this website.`,
        originalHeight: '450px',
      },
      {
        original: 'images/3d-printed-boat.jpg',
        thumbnail: 'images/3d-printed-boat.jpg',
        description: `A 3d-printed plastic model of a boat.`,
        originalHeight: '450px',
      },
      {
        original: 'images/scifi-game-screenshot.jpg',
        thumbnail: 'images/scifi-game-screenshot.jpg',
        description: `A screenshot of a sci-fi video game project I've been working on in Unreal Engine.`,
        originalHeight: '450px',
      },
      {
        original: 'images/visual-coding.jpg',
        thumbnail: 'images/visual-coding.jpg',
        description: `A screenshot from Unreal Engine showing visual coding.`,
        originalHeight: '450px',
      }]

    function GalleryPage() {
        return (
           <>
                <h2>Gallery</h2>
                <article class="gallery">
                    <ImageGallery items={images} />
                </article>
                </>
    );
}
export default GalleryPage;