import Carousel from 'react-bootstrap/Carousel';

function CarouselGigs() {
  return (
    <Carousel class="m-10 p-10">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 h-80"
          src="https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt="Video Editor"
        />
        <Carousel.Caption>
          <h3>Video Editor</h3>
          <p>The art of video editing is in the details.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h-80"
          src="https://images.unsplash.com/photo-1617264862369-fec440d23265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Graphic Designer"
        />
        <Carousel.Caption>
          <h3>Graphic Designer</h3>
          <p>LCreativity takes courage.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-80"
          src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Content Writer"
        />
        <Carousel.Caption>
          <h3 class="text-black" >Content Writer</h3>
          <p class="text-black" >
          Actions speak louder than words.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselGigs;