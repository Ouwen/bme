import React, { Component } from 'react';

import Intro from './components/Intro';
import Syllabus from './components/Syllabus';
import Stripe from './components/Stripe';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';

import Data from '../../services/data';

import { withTheme } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import CalendarIcon from '@material-ui/icons/PermContactCalendar';
import { StackExchange, GitHubIcon, KeybaseIcon} from '../../components/Icons';
import Typography from '@material-ui/core/Typography';

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsssk6FGGd4BFO4yKfhbJiT1fUMLJaPEGL-hqVMfQx-t3V-wYTfd_hflhK8pjpYp9rFoMcmnUZlBTM/pub?gid=0&single=true&output=csv"

class Home extends Component {
  render() {
    return (
    	<div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography className="flex" type="title" color="inherit" />
            <Tooltip title="Class StackExchange">
              <IconButton href={Data.about.socialMedia.twitter} color="inherit">
                <StackExchange />
              </IconButton>
            </Tooltip>
            <Tooltip title="Class Github">
              <IconButton href={Data.about.socialMedia.gitHubUrl} color="inherit">
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Keybase Direct Chat">
              <IconButton href={Data.about.socialMedia.keybaseUrl} color="inherit">
                <KeybaseIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Calendly Office Hours">
              <IconButton href={Data.about.socialMedia.calendly} color="inherit">
                  <CalendarIcon viewBox="0 0 22 22"/>
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

		    <Intro
          name={Data.about.name}
          snippet={Data.about.snippet}
          title={Data.about.title}
          subtitle={Data.about.subtitle}
          email={Data.about.email}
          image={Data.about.image}
        />

        <Stripe color={this.props.theme.palette.primary.type[800]}>
            <IconButton href={"mailto:" + Data.about.email} color="inherit" aria-label="Email">
              <MailIcon />
            </IconButton>
          {Data.about.email}
        </Stripe>
        <Stripe color={this.props.theme.palette.primary.type[900]}>
          <IconButton color="inherit" aria-label="Syllabus">
            <CalendarIcon />
          </IconButton>
          Syllabus
        </Stripe>

        <Syllabus url = { url }/>

        <Stripe color={this.props.theme.palette.primary.type[700]} />
        <Stripe size="36" color={this.props.theme.palette.primary.main}>
          <Typography color="inherit" type="caption" align="center">
              Copyright © 2018 Ouwen Huang
          </Typography>
        </Stripe>
      </div>
    );
  }
}

export default withTheme()(Home);
