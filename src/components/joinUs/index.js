import React, { Component } from 'react'
import { translate } from "react-i18next"
import PropTypes from 'prop-types'

import {
  Container,
} from './styledComponents'

import { H3 } from '../styledComponents';

const emailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

class JoinUs extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    joinUsEmail: PropTypes.string.isRequired,
    emailLabel: PropTypes.string.isRequired,
    positionLabel: PropTypes.string.isRequired,
    whyLabel: PropTypes.string.isRequired,
    reminder: PropTypes.string.isRequired,
    submitLabel: PropTypes.string.isRequired,
  }

  state = {
    email: '',
    position: '',
    why: '',
    emailError: '',
    positionError: '',
    whyError: '',
    dirty: false,
  }

  validate = () => {
    const {
      email, 
      position,
      why,
    } = this.state;
    const { t } = this.props;
    let valid = true;
    if (!email) {
      valid = false;
      this.setState({ emailError: t('careers.join.noFieldError'), dirty: true });
    } else if (email && !emailRegexp.test(email)) {
      valid = false;
      this.setState({ emailError: t('careers.join.emailError'), dirty: true });
    } else this.setState({ emailError: '' });

    if (!position) {
      valid = false;
      this.setState({ positionError: t('careers.join.noFieldError'), dirty: true });
    } else this.setState({ positionError: '' }); 

    if (!why) {
      valid = false;
      this.setState({ whyError: t('careers.join.noFieldError'), dirty: true });
    } else this.setState({ whyError: '' });

    return valid;
  }

  changeField = ({ target: { name, value }}) => {
    this.setState({ [name]: value }, () => {
      if (this.state.dirty) this.validate();
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.validate()) this.joinUsForm.submit();
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
      emailError,
      positionError,
      whyError
    } = this.state;
    return (
      <Container>
        <H3>{title}</H3>
        <form 
          ref={(form) => this.joinUsForm = form} 
          onSubmit={this.handleSubmit} 
          action={`https://formspree.io/${joinUsEmail}`} 
          method="POST"
        >
          <div className="form-control">
            <label htmlFor="email">{emailLabel}</label>
            <input 
              id="email" 
              type="email" 
              name="email"
              value={email}
              onChange={this.changeField}
            />
            { emailError && (<label className="error">{emailError}</label>) }
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
            { positionError && (<label className="error">{positionError}</label>) }
          </div>
          <div className="form-control">
            <label htmlFor="why">{whyLabel}</label>
            <textarea 
              id="why"
              name="why"
              value={why}
              onChange={this.changeField}
            />
            { whyError && (<label className="error">{whyError}</label>) }
          </div>
          <div>
            <label>{reminder}</label>
          </div>
          <div className="submit">
            <input 
              type="submit" 
              value={submitLabel}
              disabled={emailError || positionError || whyError}
            />
          </div>
        </form>
      </Container>
    )
  }
}

export default translate("translations")(JoinUs);