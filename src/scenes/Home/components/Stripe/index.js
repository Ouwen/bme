import React, { Component } from 'react';
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const style = {
  color: "white",
  fontWeight: 200,
  padding: "10px"
}

class Stripe extends Component {
  render() {
    var size = "64";
    if(this.props.size) {
      size = this.props.size;
    }

    var backgroundColor = this.props.color ? this.props.color:this.props.theme.palette.primary.main
    return (
      <div style={{height: size + "px", backgroundColor:backgroundColor}}>
        <Typography color="inherit" style={style} align="center" type="subheading">
          {this.props.children}
        </Typography>
      </div>
    );
  }
}

export default withTheme()(Stripe);
