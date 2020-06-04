import React, { Component } from 'react'
import SweetAlert from 'sweetalert2-react'
import axios from 'axios'

import {
    ContentForm,
    Field,
} from './styledComponents'

class BuyForm extends Component {
      state = {
        name: '',
        replyto: '',
        phone: '',
        country: 'Colombia',
        interest: 'Targi',
        send: false,
        showAlert: false,
        typeAlert: 'success',
        alertMessage: '',
        titleAlert: 'Message',
        sortedCases: [],
        loading: false,
    }

    // Validations Form
    closeAlert = () => {
        this.setState({ showAlert: false });
    }
    
    handleChange = (event) => {
        const {
            target: {
            name,
            value,
            }
        } = event;
        this.setState({[name]: value});
    }
    
    validateForm = () => {
        const { name, replyto } = this.state;
        if(name === '') return false;
        if(replyto === '' || !this.validateEmail(replyto)) return false;
        return true;
    }
    
    handleSubmit = (e) => {
        this.setState({ send: true});
        e.preventDefault();
        if(this.validateForm()){
            this.onChange();
        }
    }
    
    validateEmail(email) {
        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }
    
    onChange = () => {
        const comp = this;
        const { name, replyto, phone, country, interest, loading } = this.state;
        this.setState({ loading: true });

        const opts = {
            Nombre: name,
            Email: replyto,
            Teléfono: phone,
            País: country,
            Interés: interest,
        };

        axios.post(
            "https://submit-form.com/cQZSMszk1LzdI_o9KRAQM", 
            opts, 
            {headers: {"Accept": "application/json"}}
        )
        .then(function (response) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'form_submitted',
                'category': 'Delivery App',
                'Sujeto': name
            });
            comp.setState({ send: false, name: '', replyto: '', phone: '', country: 'Colombia', interest: 'Targi', titleAlert: 'Tu mensaje ha sido enviado', typeAlert: 'success', alertMessage: '', showAlert: true, loading: false });
        })
        .catch(function (error) {
            comp.setState({ titleAlert: 'Oops algo ha sucedido enviando tu mensaje', typeAlert: 'info', alertMessage: 'Oops algo ha sucedido enviando tu mensaje', showAlert: true });
        });
    }

    render() {
        const {
            data,
            t
        } = this.props;

        const { name, send, replyto, phone, showAlert, titleAlert, typeAlert, alertMessage, loading } = this.state;
        const isInValidName = (name === '' && send);
        const showErrorEmail = (replyto !== '' && !this.validateEmail(replyto)) || (replyto === '' && send);
        const emailValidationMessage = (showErrorEmail && replyto !== '') ? 'Ingresa un correo valido' : 'Por favor ingresa tu correo';
        return (
            <ContentForm>
                <form id="form"  ref={(form) => this.form = form} className="form form_targi"  method="POST" onSubmit={this.handleSubmit}>
                    <Field>
                        <label htmlFor="name">Nombre y Apellido</label>
                        <input className="input-text" type="text" name="name" id="name" value={name} onChange={this.handleChange}/>
                        {
                            (isInValidName) && <label className="error" htmlFor="name">Ingrese su nombre completo</label>
                        }
                    </Field>

                    <Field>
                        <label htmlFor="name">Email</label>
                        <input className="input-text" type="text" name="replyto" id="replyto" value={replyto} onChange={this.handleChange} />
                        {
                            (showErrorEmail) && <label className="error" htmlFor="replyto">{emailValidationMessage}</label>
                        }
                    </Field>

                    <Field>
                        <label htmlFor="name">Teléfono</label>
                        <input className="input-text" type="text" name="phone" id="phone" value={phone} onChange={this.handleChange} />
                        <span className="notePhone">Por favor incluye el código de tu pais</span>
                    </Field>

                    <Field>
                        <div className="wrapper_button">
                            <button className="input-btn"  type="button" onClick={this.handleSubmit}>
                                {loading ? (<span className="loading"></span>) : 'Enviar'}
                            </button>
                        </div>
                    </Field>
                </form>
                <SweetAlert
                    show={showAlert}
                    title={titleAlert}
                    text={alertMessage}
                    onConfirm={this.closeAlert}
                    type={typeAlert}
                />
            </ContentForm>
        )
    } 

}

export default BuyForm;