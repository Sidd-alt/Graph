import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class User1 extends Component {
    constructor(props){
        super(props);
        this.state = {
          x_axis : [],
          y_axis : [],
        }
    }

    componentDidMount(){
      fetch('https://api.github.com/repositories/19438/issues')
      .then(response => response.json())
      .then(data => {
        this.setState({x_axis: data.map(info => info.created_at)})
        this.setState({y_axis: data.map(info => info.comments)})
      })
    }

    render(){
        const options = {
            chart: {
              backgroundColor: 'rgba(0,0,0,0.85)',
            },
            title: {
              text: ''
            },
            xAxis: {
                categories: this.state.x_axis
            },
            plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              }
            },
            series: [{
              type: 'area',
              data: this.state.y_axis,
            }],
          }
        return(
          <div >
            <div>
              <p className="tc f2 fw7 code ">Welcome John</p>
            </div>
            <div className="mt6">
              <HighchartsReact highcharts = {Highcharts}
              options={options}/>
            </div>
          </div> 
        )
    }
}

export default User1;