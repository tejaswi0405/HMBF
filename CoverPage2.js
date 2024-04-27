import React from 'react';

export default function CoverPage2() {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ maxHeight: '800px' }}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/florida-hotel-conference/media/FH-Gallery-1-598b45769980a.jpg" className="d-block w-100" alt="Slide 1" style={{ height: '700px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block" style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>
            <h5>FIVE STAR HOTELS</h5>
            <p>Its, your time to rate it 5 Star !!!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://th.bing.com/th/id/R.229097d6fef6004b0dd58ff8bd810dda?rik=fSJ3J4fuphdcRw&riu=http%3a%2f%2ftipsydiaries.com%2fwp-content%2fuploads%2f2015%2f11%2fMain-Pool-1.jpg&ehk=fspF3krC7%2b8h7AmawFruYvVRv0c3A8LjwO61PNWoX80%3d&risl=1&pid=ImgRaw&r=0" className="d-block w-100" alt="Slide 2" style={{ height: '700px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block" style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>
            <h5>INFINITY-POOLS</h5>
            <p>Blend with the Ocean !!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://digital.ihg.com/is/image/ihg/holiday-inn-hotel-and-suites-clearwater-beach-6477439006-4x3" className="d-block w-100" alt="Slide 3" style={{ height: '700px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
            <h5 style={{ color: 'YELLOW', fontSize: '24px', fontWeight: 'bold' }}>SEA BEACH RESORTS</h5>
            <p>Escape to a world where sun-kissed sands meet azure waters at our luxurious Sea-beach resorts, where relaxation and adventure converge in paradise.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
}
