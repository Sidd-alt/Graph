import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class User1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            plotData : []
        }
    }

    componentDidMount(){
        fetch('https://api.github.com/repositories/19438/issues')
        .then(response => response.json())
        .then(data => {
          this.setState({plotData: data.map(info => info.number)})
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
            series: [{
              type: 'pie',
              data: this.state.plotData,
            }],
            radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
            // stops: [
            //     [0, color],
            //     [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            // ]
          }
        return(
            <div >
                <div>
                <p className="tc f2 fw7 code ">Welcome Micky</p>
                </div>
                <div className="mt6">
                    <HighchartsReact highcharts = {Highcharts}
                    options={options}/>
                </div>
            </div> 
        );
    }
}

export default User1;