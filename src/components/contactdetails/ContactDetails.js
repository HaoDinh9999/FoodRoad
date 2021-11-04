import React, { Component } from "react";
import './ContactDetails.css';
import { FaMapMarker, FaPhoneSquareAlt, FaEnvelope, FaGlobeAsia, FaPaperPlane } from 'react-icons/fa';
import Recaptcha from 'react-google-recaptcha';

class ContactDetails extends Component {
    constructor(props) {
        super(props);

        this.contactSubmit = this.contactSubmit.bind(this);
        this.onloadCallback = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);

        this.state = {
            isVerified: true,
            fields: {},
            errors: {}
        }
    }

    recaptchaLoaded() {
        console.log('captcha successfully loaded');
    }

    verifyCallback(response) {
        if (response === true) {
            this.setState({
                isVerified: true
            })
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields["email"].indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    fields["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            if(this.state.isVerified)
            {
                alert("Form submitted");
            }
            else alert("Please verify that you are a human!")
        } else {
            alert("Form has errors.");
        }
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div className='container-contact'>
                <table className='contact-table'>
                    <tr>
                        <td className='contact-table'>
                            <div>
                                <h4 className='text-lean'>Would you like to talk</h4>
                                <h4>CONTACT DETAILS</h4>
                                <h5>
                                    <FaMapMarker />
                                    R604, 133 Duong Ba Trac St, Dist.8, HCMC
                                </h5>
                                <h5>
                                    <FaPhoneSquareAlt />
                                    +(84) 349-201-427
                                </h5>
                                <h5>
                                    <FaEnvelope />
                                    hello@saigonfoodtour.com
                                </h5>
                                <h5>
                                    <FaGlobeAsia />
                                    saigonfoodtour.com
                                </h5>
                            </div>
                        </td>
                        <td>
                            <h4 className='text-lean'>Got a question?</h4>
                            <h4>GET IN TOUCH</h4>
                            <div>
                                <form
                                    name="contactform"
                                    className="contactform"
                                    onSubmit={this.contactSubmit.bind(this)}
                                >
                                    <input
                                        refs="name"
                                        type="text"
                                        required="required"
                                        size="32"
                                        placeholder="Name"
                                        onChange={this.handleChange.bind(this, "name")}
                                        value={this.state.fields["name"]}
                                    />
                                    <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                                    <input
                                        refs="email"
                                        type="text"
                                        required="required"
                                        size="33"
                                        placeholder="Email"
                                        onChange={this.handleChange.bind(this, "email")}
                                        value={this.state.fields["email"]}
                                        className='textbox'
                                    />
                                    <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                    <br />
                                    <input
                                        refs='subject'
                                        type='text'
                                        required="required"
                                        size="69"
                                        placeholder='Subject'
                                        onChange={this.handleChange.bind(this, "subject")}
                                    />
                                    <br />
                                    <textarea
                                        class="form-control"
                                        rows="7"
                                        required="required"
                                        id="message"
                                        name="data[Contact][content]"
                                        placeholer="Message"
                                    />
                                    <Recaptcha
                                        sitekey="6LdBYQwdAAAAABNyaYKSXfle0eYGVlqM95dl2ZQ_"
                                        render="explicit"
                                        onloadCallback={this.recaptchaLoaded}
                                        verifyCallback={this.verifyCallback}
                                    />
                                    <button onClick={""} type='submit' class='btn-send' id='btn send'>
                                        <FaPaperPlane />
                                        SEND
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default ContactDetails;