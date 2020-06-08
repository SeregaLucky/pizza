import React, { Component } from 'react';
// import styles from './SelectLanguages.module.css';

class SelectLanguages extends Component {
  state = { language: 'ru' };

  handleChange = ({ target }) => this.setState({ language: target.value });

  render() {
    const { language } = this.state;

    return (
      <select name="language" value={language} onChange={this.handleChange}>
        <option value="ru">Рус</option>
        <option value="en">Eng</option>
      </select>
    );
  }
}

export default SelectLanguages;
