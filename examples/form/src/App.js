import React, { Component } from "react";
import "./App.css";
import {
  Form,
  Checkbox,
  Button,
  Picker
} from "guim";
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checked2: true,
      formData: {},
      picker_active: 2
    };
    this.clickButton = this.clickButton.bind(this);
    this.onChangeCheckbox1 = this.onChangeCheckbox1.bind(this);
    this.onChangeCheckbox2 = this.onChangeCheckbox2.bind(this);
    this.onChangePicker = this.onChangePicker.bind(this);
  }

  onChangeCheckbox1() {
    this.setState({ checked: !this.state.checked });
  }

  onChangeCheckbox2() {
    this.setState({ checked2: !this.state.checked2 });
  }

  onChangePicker(label, value) {
    this.setState({ picker_active: value });
  }

  clickButton() {
    let form_data = this.form.grabFormData();
    this.setState({formData: form_data});
  }

  render() {
    return (
      <div className="App">
        <div className="form">
          <span>{"<Form>"}</span>
          <Form ref={ref => (this.form = ref)} >
            <div>
              <span>Clik me to show alert</span>
              <Button
                onClick={() => alert("blue")}
                label="Show alert" />
            </div>
            <div>
              <span>Click me to SEND Form</span>
              <Button
                onClick={this.clickButton}
                color="gray"
                label="Send Form" />
            </div>
            <div>
              <span>Clik me to change first checkbox</span>
              <Button
                onClick={this.onChangeCheckbox1}
                color="green"
                label="Change first checkbox" />
            </div>
            <div>
              <span>Clik me to change this checkbox</span>
              <Checkbox
                name="checked"
                checked={this.state.checked}
                onChange={this.onChangeCheckbox1} />
            </div>
            <div>
              <span>Clik me to change this checkbox</span>
              <Checkbox
                name="checkbox2"
                checked={this.state.checked2}
                onChange={this.onChangeCheckbox2} />
            </div>
            <div>
              <span>A picker</span>
              <Picker
                onChange={this.onChangePicker}
                options={[
                  {label: <img src={logo} width="30px"/>, value: 'react'},
                  {label: "Pill 2", value: 2},
                  {label: "Pill 3", value: 3},
                ]}
                active={this.state.picker_active}
              />
            </div>
          </Form>
          <span>{"</Form>"}</span>
        </div>
        <div className="outside-form">
          <div>
            <span>{"I'm outside the form and can change form data (imagine using this with url)"}</span>
            <Button
              onClick={this.onChangeCheckbox2}
              color="green"
              label="Change second checkbox" />
          </div>
          <div>
            <div>data to send: </div>
            <div>{`${JSON.stringify(this.state.formData)}`}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
