import React, { Component } from "react"
import Input from 'components/Input.jsx'
import img from 'static/git.gif'
import styles from './styles.less'

class FormContainer extends Component {
  state = {
    seo_title: ""
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }
  
  render() {
    return (
      <div>
        <div className={styles.content}>
          <div>1</div>
          <div>2</div>
        </div>
        <img src={img} />
        <form id="article-form">
          <Input
            text="SEO title"
            label="seo_title"
            type="text"
            id="seo_title"
            value={this.state.seo_title}
            handleChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default FormContainer
