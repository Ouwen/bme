import React, { Component } from 'react';
import { withTheme } from '@material-ui/core/styles';

import './Syllabus.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Syllabus extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    this.GetData();
  }

  transform(str) {
    let obj={}
    let data = str.split('\n').map(i=>i.split(','));
    let headers = data.shift();
    let output = data.map(d=>{obj = {};headers.map((h,i)=>obj[headers[i]] = d[i]);return obj;});
    return output;
  }

  GetData() {
    var self = this;
  	fetch(self.props.url).then(function (response) {
    	return response.text()
    }).then(function (text){
      self.setState({data: self.transform(text).map(function (ele){
          ele.Date = new Date(ele.Date);
          return ele;
        })
      })
    })
  }

  render() {
    return (
      <Paper elevation={1} className="root">
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map(function (ele, idx) {
              return (
                <TableRow key={idx}>
                  <TableCell>
                    {ele.Date.toLocaleDateString()}
                  </TableCell>
                  <TableCell>{ele.Content}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withTheme()(Syllabus);