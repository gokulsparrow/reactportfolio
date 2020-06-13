import React from 'react';
import weber from '../asserts/images/weber.jpg';
import fire from '../asserts/images/fire.jpg';
import person from '../asserts/images/person.jpg';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: 'Vibe-Clothing',
                    subTitle: 'react,redux and firebase based ecommerce site',
                    imgSrc: weber ,
                    link: 'https://vibe-clothing.herokuapp.com/',
                    selected : false 
                },
                {
                    id: 1,
                    title: 'project2',
                    subTitle: 'project details',
                    imgSrc: fire ,
                    link: 'https://www.google.com',
                    selected : false 
                },
                {
                    id: 2,
                    title: 'project3',
                    subTitle: 'project details',
                    imgSrc: person ,
                    link: 'https://www.google.com',
                    selected : false 
                }
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true ;

        items.forEach(item => {
            if (item.id !== id) {
                    item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} keys={item.id} />
        });
    }
    render() {
        return (
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;