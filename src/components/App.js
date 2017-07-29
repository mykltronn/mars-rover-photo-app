import React, { Component } from 'react';
import '../styles/App.css';
import PageLayout from './PageLayou.js'
import GetImageForm from './GetImageForm.js';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
          <PageLayout>
              <GetImageForm />
          <PageLayout />
      </div>
    )
  }
}
