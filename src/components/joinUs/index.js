import React, { Component } from 'react'
import { translate } from "react-i18next"
import ReCAPTCHA from "react-google-recaptcha"
import PropTypes from 'prop-types'
import axios from 'axios'
import SweetAlert from 'sweetalert2-react'


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
    alertMessage: '',
    titleAlert: '',
    showAlert: false,
    alertType: 'success',
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

  closeAlert = () => this.setState({ showAlert: false });

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.validate()) this.captchaRef.execute();
  }

  sendEmail = (value) => {
    const {
      email,
      position,
      why,
    } = this.state;
    const { t } = this.props;
    if (value) {
      const opts = {
        email,
        position,
        why,
      };
      axios.post(
          "https://submit-form.com/XPfHm4tw8tBUGwsoebGLX", 
          opts, 
          {headers: {"Accept": "application/json"}}
      )
      .then((response) => {
        this.captchaRef.props.grecaptcha.reset();
        this.setState({
          email: '',
          position: '',
          why: '',
          titleAlert: t('careers.join.successTitle'),
          typeAlert: 'success',
          alertMessage: t('careers.join.successBody'),
          showAlert: true,
          alertType: 'success'
        });
      })
      .catch((error) => {
        this.captchaRef.props.grecaptcha.reset();
        this.setState({
          titleAlert: t('careers.join.errorTitle'),
          typeAlert: 'info',
          alertMessage: t('careers.join.errorBody'),
          showAlert: true,
          alertType: 'error'
        });
      });
    }
  }

  render() {
    const {
      title,
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
      whyError,
      showAlert,
      titleAlert,
      alertMessage,
      alertType,
    } = this.state;
    return (
      <Container>
        <H3>{title}</H3>
        <form 
          ref={(form) => this.joinUsForm = form} 
          onSubmit={this.handleSubmit}
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
              aria-invalid={emailError !== ''}
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
              aria-invalid={positionError !== ''}
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
              aria-invalid={whyError !== ''}
            />
            { whyError && (<label className="error">{whyError}</label>) }
          </div>
          <div className="reminder">
            <label>{reminder}</label>
          </div>
          <ReCAPTCHA
            ref={(ref) => this.captchaRef = ref}
            size="invisible"
            sitekey="6LdeBokUAAAAAM01lWglTU0siI1fmMRoGjCE_94b"
            onChange={this.sendEmail}
          />
          <div className="submit">
            <input 
              type="submit" 
              value={submitLabel}
              disabled={emailError || positionError || whyError}
            />
          </div>
        </form>
        <SweetAlert
          show={showAlert}
          title={titleAlert}
          text={alertMessage}
          onConfirm={this.closeAlert}
          type={alertType}
        />
      </Container>
    )
  }
}

export default translate("translations")(JoinUs);