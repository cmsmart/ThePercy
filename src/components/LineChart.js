import React, { Component } from 'react'
import MusherLineChart from './MusherLineChart';

// Format we want 
//const series = [

  // {race_id OR musher_id: 'XXXX', data: [
  //   {time: '0', dist: 0 },
  //   {time: '30', dist: 152.7},
  //   {time: '50', dist: 338}
  // ]},
  // {year: '2013', data: [
  //   {time: '0', dist: 0 },
  //   {time: '30', dist: 152.7},
  //   {time: '45', dist: 338}
  // ]},

  // Format of data we're getting
const mySeries = [
  {
    "event_id":115,
    "musher_id":238,
    "msg_id":376719583,
    "longitude":"-140.704502",
    "latitude":"64.607365",
    "msg_time":1427432947,
    "msg_age":88538360,
    "utc_dc_out":"2015-03-26T17:21:40.000Z",
    "checkpoint_time":1427445537,
    "run_dist":120710,
    "run_time":{
      "hours":11,
      "minutes":47,
      "seconds":27
    }
  },
  {
    "event_id":115,
    "musher_id":238,
    "msg_id":376727951,
    "longitude":"-140.917743",
    "latitude":"64.676909",
            "msg_time":1427437854,
            "msg_age":88533453,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":136938,
            "run_time":{
                "hours":13,
                "minutes":9,
                "seconds":14
            }
        },
        {
            "event_id":115,
            "musher_id":238,
            "msg_id":376719563,
            "longitude":"-140.781531",
            "latitude":"64.614235",
            "msg_time":1427434147,
            "msg_age":88537160,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":125106,
            "run_time":{
                "hours":12,
                "minutes":7,
                "seconds":27
            }
        },
        {
            "event_id":115,
            "musher_id":238,
            "msg_id":376753076,
            "longitude":"-141.207870",
            "latitude":"64.785880",
            "msg_time":1427449736,
            "msg_age":88521571,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":160368,
            "run_time":{
                "hours":16,
                "minutes":27,
                "seconds":16
            }
        },
        {
            "event_id":115,
            "musher_id":238,
            "msg_id":376719582,
            "longitude":"-140.736435",
            "latitude":"64.619207",
            "msg_time":1427433547,
            "msg_age":88537760,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":122781,
            "run_time":{
                "hours":11,
                "minutes":57,
                "seconds":27
            }
        },
        {
            "event_id":115,
            "musher_id":238,
            "msg_id":376727968,
            "longitude":"-140.900285",
            "latitude":"64.657360",
            "msg_time":1427437254,
            "msg_age":88534053,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":134587,
            "run_time":{
                "hours":12,
                "minutes":59,
                "seconds":14
            }
        },
        {
            "event_id":115,
            "musher_id":238,
            "msg_id":376751830,
            "longitude":"-141.207870",
            "latitude":"64.785880",
            "msg_time":1427449151,
            "msg_age":88522156,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":160368,
            "run_time":{
                "hours":16,
                "minutes":17,
                "seconds":31
            }
        },
        {
            "event_id":115,
            "musher_id":238,
            "msg_id":376751841,
            "longitude":"-141.207870",
            "latitude":"64.785880",
            "msg_time":1427448551,
            "msg_age":88522756,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":160368,
            "run_time":{
                "hours":16,
                "minutes":7,
                "seconds":31
            }
        },
        {
            "event_id":115,
            "musher_id":326,
            "msg_id":376715439,
            "longitude":"-140.695371",
            "latitude":"64.590808",
            "msg_time":1427432345,
            "msg_age":88538962,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":118652,
            "run_time":{
                "hours":11,
                "minutes":37,
                "seconds":25
            }
        },
        {
            "event_id":115,
            "musher_id":238,
            "msg_id":376730112,
            "longitude":"-140.951111",
            "latitude":"64.683305",
            "msg_time":1427438945,
            "msg_age":88532362,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":138882,
            "run_time":{
                "hours":13,
                "minutes":27,
                "seconds":25
            }
        },
        {
            "event_id":115,
            "musher_id":238,
            "msg_id":376730122,
            "longitude":"-140.917749",
            "latitude":"64.676913",
            "msg_time":1427438345,
            "msg_age":88532962,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":136939,
            "run_time":{
                "hours":13,
                "minutes":17,
                "seconds":25
            }
        },
        {
            "event_id":115,
            "musher_id":238,
            "msg_id":376731498,
            "longitude":"-140.993451",
            "latitude":"64.679999",
            "msg_time":1427439545,
            "msg_age":88531762,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":141064,
            "run_time":{
                "hours":13,
                "minutes":37,
                "seconds":25
            }
        },
        {
            "event_id":115,
            "musher_id":238,
            "msg_id":376749511,
            "longitude":"-141.207870",
            "latitude":"64.785880",
            "msg_time":1427448057,
            "msg_age":88523250,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":160368,
            "run_time":{
                "hours":15,
                "minutes":59,
                "seconds":17
            }
        },
        {
            "event_id":115,
            "musher_id":238,
            "msg_id":376732784,
            "longitude":"-141.029771",
            "latitude":"64.691001",
            "msg_time":1427440142,
            "msg_age":88531165,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":143203,
            "run_time":{
                "hours":13,
                "minutes":47,
                "seconds":22
            }
        },
        {
            "event_id":115,
            "musher_id":238,
            "msg_id":377086723,
            "longitude":"-140.531860",
            "latitude":"64.422586",
            "msg_time":1427500657,
            "msg_age":88470650,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":239833,
            "run_time":{
                "days":1,
                "hours":6,
                "minutes":35,
                "seconds":57
            }
        },
        {
            "event_id":115,
            "musher_id":238,
            "msg_id":376710119,
            "longitude":"-140.668883",
            "latitude":"64.550777",
            "msg_time":1427430032,
            "msg_age":88541275,
            "utc_dc_out":"2015-03-26T17:21:40.000Z",
            "checkpoint_time":1427445537,
            "run_dist":111810,
            "run_time":{
                "hours":10,
                "minutes":58,
                "seconds":52
            }
        }]

class LineChart extends Component {
  state = {
    musher_id: this.props,
  };

  generatingData = data => {
    let dataArray = [];
    let dataArray2 = [];
    // dataArray = [ {id : props.match.params.id, data: [ ]}]
    // map over the data array passed in, and for each object in the array
    dataArray2 = data.map(datum => {
        if (datum.musher_id === parseInt(this.state.musher_id.musher_id)) {

            // Create a new object that adds distance and time key-value pairs to whatever already exists in the dataArray2
            let item = { ...dataArray2, distance: datum.run_dist, time: datum.run_time };
            return item;
          
        }
    });
    // Add what you've mapped to a new Array that also holds the ID key-value pair
    dataArray = { race_id: this.state.musher_id.event_id, data: dataArray2 };
    return dataArray
  };

  filterMusher = () => {
    let filteredMusher = [];
    if (this.state.musher_id === 115) {
    }
    return filteredMusher;
  };

  render() {
    console.log("test", this.state.musher_id);
    console.log(this.generatingData(mySeries))
    return (
    <div>
      <MusherLineChart props={this.generatingData(mySeries)} />
      </div>
    )};
}

export default LineChart