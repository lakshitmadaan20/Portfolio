import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  Col,
  Row,
} from 'reactstrap';

const styles = {
  sliderContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color:'white'
  }
}

const items = [
  
    {
      src: 'https://english.cdn.zeenews.com/sites/default/files/2020/05/17/861497-corona-india-docs.jpg',
      altText: 'Slide 1',
      caption: 'Slide 1',
      title: 'Coronavirus Live News: Count rises to 2,166 in Bihar; Odisha tally stands at 1,269',
      subtitle: 'Coronavirus (Covid 19) India Live updates: The Union Health Ministry said that 6,654 new COVID-19 patients were detected in the last 24 hours. The death toll stands at 3,720, the government data shows',
      btn: {
        content: 'Go to the collection',
        link: '/category/men'
  
      }
    },
    {
      src: 'https://english.cdn.zeenews.com/sites/default/files/2020/05/17/861497-corona-india-docs.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2',
      title: 'Coronavirus Live News: Count rises to 2,166 in Bihar; Odisha tally stands at 1,269',
      subtitle: 'Coronavirus (Covid 19) India Live updates: The Union Health Ministry said that 6,654 new COVID-19 patients were detected in the last 24 hours. The death toll stands at 3,720, the government data shows',
      btn: {
        content: 'Go to the collection',
        link: '/category/men'
  
      }
    },
    {
      src: 'https://english.cdn.zeenews.com/sites/default/files/2020/05/17/861497-corona-india-docs.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3',
      title: 'Coronavirus Live News: Count rises to 2,166 in Bihar; Odisha tally stands at 1,269',
      subtitle: 'Coronavirus (Covid 19) India Live updates: The Union Health Ministry said that 6,654 new COVID-19 patients were detected in the last 24 hours. The death toll stands at 3,720, the government data shows',
      btn: {
        content: 'Go to the collection',
        link: '/category/men'
  
      }
    }
  
];

class CarouselHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }


  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(x => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={x.src}
        >
          <Row  style={{backgroundColor: '#00003f'}}>
            <Col md="6">
              <img src={x.src} alt={x.altText} style={{width: '100%', maxHeight: '500px'}}/>
            </Col>
            <Col md="6" style={styles.sliderContent}>
              <h3>{x.title}</h3>
              <p>{x.subtitle}</p>
            </Col>
          </Row>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarouselHomepage;
