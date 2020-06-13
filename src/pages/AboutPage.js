import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Im a self taught web developer from a mechanical engineering background with some git hub open source project experiance.And changeing my carrear from mechanical to web developering because of passion.(Looking for a job in organished team cultural company to share my ideas and to learn more about web developering.</p>

                <p>And changeing my carrear from mechanical to web developering because of passion.(Looking for a job in organished team cultural company to share my ideas and to learn more about web developering.</p>
            </Content>
        </div>
    );
}

export default AboutPage;

//<Content>
  //  <p>Im a self taught web developer from a mechanical engineering background with some git hub open source project experiance.And changeing my carrear from mechanical to web developering because of passion.(Looking for a job in organished team cultural company to share my ideas and to learn more about web developering.</p>

    //<p>And changeing my carrear from mechanical to web developering because of passion.(Looking for a job in organished team cultural company to share my ideas and to learn more about web developering.</p>
//</Content>