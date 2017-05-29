import React, { Component } from 'react';
import BackButton from './BackButton.jsx';

export default class AboutPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-page">
        <article>
          John Jacob has been building software professionaly since 2016, specializing in web technologies. He studied Liberal Arts at Bard College at Simon's Rock, and Chinese Language and Literature at University of Maryland, College Park. In 2016, John built the demo and beta versions of BalanceCXI's flagship product, Zacoustic. John lives in Austin, Texas.
        </article>
        <BackButton />
      </div>
    )
  }
}
