import * as React from "react";
import * as emailjs from "emailjs-com";

import * as Form from "../styles/FormComponents";

export interface ContactProps {}

export interface ContactState {
  params: {
    [key: string]: string;
  };
  sent: boolean;
}

class Contact extends React.Component<ContactProps, ContactState> {
  constructor(props: ContactProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      params: {
        name: "",
        email: "",
        message: ""
      },
      sent: false
    };
  }

  changeSent = (e: React.MouseEvent): void => {
    // to change state while testing
    console.log(this.state.sent);

    this.setState(prevState => {
      return {
        ...prevState,
        sent: !this.state.sent
      };
    });
  };

  handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    let param: string = e.currentTarget.name;
    let value: string = e.currentTarget.value;
    this.setState(prevState => {
      return {
        ...prevState,
        params: {
          ...this.state.params,
          [param]: value
        }
      };
    });
  };

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = this.state.params;
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: "thinkwebengineering@gmail.com",
      message_html: message
    };
    emailjs
      .send(
        "sendgrid",
        "template_6rPQFx7u",
        templateParams,
        "user_py2ariH6DbqRNTS224nAX"
      )
      .then(
        response => {
          console.log(response);
          if (response.status === 200) {
            this.setState(prevState => {
              return {
                ...prevState,
                sent: true
              };
            });
          }
        },
        error => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div id="contact">
        <Form.Wrap className="form-wrap">
          {this.state.sent ? (
            <Form.SendMessage>
              Your message has been sent, we will contact you soon
            </Form.SendMessage>
          ) : (
            <div>
              <Form.FormLabel>Contact Me</Form.FormLabel>
              <Form.Form onSubmit={this.onSubmit}>
                <Form.Label>
                  Name:
                  <Form.Input
                    type="text"
                    name="name"
                    value={this.state.params.name || ""}
                    onChange={this.handleChange}
                  ></Form.Input>
                </Form.Label>
                <Form.Label>
                  Email:
                  <Form.Input
                    type="text"
                    name="email"
                    value={this.state.params.email || ""}
                    onChange={this.handleChange}
                  ></Form.Input>
                </Form.Label>
                <Form.Label>
                  How can I help you?
                  <Form.TextArea
                    name="message"
                    value={this.state.params.message || ""}
                    onChange={this.handleChange}
                  ></Form.TextArea>
                </Form.Label>
                <Form.Submit type="submit" value="Send" />
              </Form.Form>
            </div>
          )}
        </Form.Wrap>
        <button onClick={this.changeSent}>Change Sent</button>
      </div>
    );
  }
}

export default Contact;
