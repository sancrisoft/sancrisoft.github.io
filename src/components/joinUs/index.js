import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
} from './styledComponents'

import { H3 } from '../styledComponents';

class JoinUs extends Component {
  state = {
    email: '',
    position: '',
    why: '',
  }

  changeField = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  render() {
    const {
      title,
      joinUsEmail,
      emailLabel,
      positionLabel,
      whyLabel,
      reminder,
      submitLabel,
    } = this.props;
    const {
      email,
      position,
      why,
    } = this.state;
    return (
      <Container>
        <H3>{title}</H3>
        <form action={`https://formspree.io/${joinUsEmail}`} method="POST">
          <div className="form-control">
            <label htmlFor="email">{emailLabel}</label>
            <input 
              id="email" 
              type="email" 
              name="email"
              value={email}
              onChange={this.changeField}
            />
          </div>
          <div className="form-control">
            <label htmlFor="position">{positionLabel}</label>
            <input
              id="position" 
              type="text" 
              name="position" 
              value={position}
              onChange={this.changeField}
            />
          </div>
          <div className="form-control">
            <label htmlFor="why">{whyLabel}</label>
            <textarea 
              id="why"
              name="why"
              value={why}
              onChange={this.changeField}
            />
          </div>
          <div>
            <label>{reminder}</label>
          </div>
          <div className="submit">
            <input type="submit" value={submitLabel} />
          </div>
        </form>
      </Container>
    )
  }
}

export default JoinUs;
