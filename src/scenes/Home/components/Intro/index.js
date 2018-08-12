import React, { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import './Intro.css';
import { withTheme } from '@material-ui/core/styles';

class Intro extends Component {
  render() {
    return (
      <div className="split-hero">
          <Hidden xsDown>
            <img alt={this.props.name} className="profile" src={this.props.image} />
          </Hidden>

          <Hidden smUp>
            <img alt={this.props.name} className="profile-sm" src={this.props.image} />
          </Hidden>

          <div className="top" style={{backgroundColor: this.props.theme.palette.primary.type[600]}}></div>
          <div className="bottom" style={{backgroundColor: this.props.theme.palette.primary.type[700]}}>
            <div className="profile-offset">
              <Typography color="inherit" align="center" variant="display1" gutterBottom>
                <strong>{this.props.name.toUpperCase()}</strong>
              </Typography>

              <div>
                <Hidden xsDown>
                  <div className="desktop-padding">
                    <Typography color="inherit" align="center" className="weight" variant="headline" gutterBottom>
                      {this.props.title} <br /> {this.props.subtitle}
                    </Typography>
                    <Typography color="inherit" className="weight snippet" align="justify" variant="headline" gutterBottom>
                      {this.props.snippet}
                    </Typography>
                  </div>
                </Hidden>

                <Hidden smUp>
                  <div className="phone-padding">
                    <Typography color="inherit" align="center" className="weight" variant="headline" gutterBottom>
                      {this.props.title} <br /> {this.props.subtitle}
                    </Typography>
                    <Typography color="inherit" className="weight snippet" align="justify" variant="body1" gutterBottom>
                      {this.props.snippet}
                    </Typography>
                  </div>
                </Hidden>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default withTheme()(Intro);
