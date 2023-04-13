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
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h-80"
          src="https://plus.unsplash.com/premium_photo-1661284854881-77b3c89aa176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyYXBoaWMlMjBkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Graphic Designer"
        />
        <Carousel.Caption>
          <h3>Graphic Designer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-80"
          src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnRlbnQlMjB3cml0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="Content Writer"
        />
        <Carousel.Caption>
          <h3 class="text-black" >Content Writer</h3>
          <p class="text-black" >
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselGigs;