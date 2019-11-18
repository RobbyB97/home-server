import React from 'react'
import {connect} from 'react-redux'

import Header from '../Header'
import StyleGuide from './StyleGuide'
import Card from '../Card'

import {toggleHomePage} from '../../actions/home'

import {Link, NavLink} from 'react-router-dom'


const mapStateToProps = (state) => {
    return {
      nav: state.navigation.nav,
      title: state.title.title,
      home: state.home.home,
      homePage: state.home.homePage
    }
  }