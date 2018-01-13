import React ,{Component}from 'react';

import { LineChart, Line, XAxis, YAxis,  Tooltip, Legend, Brush } from 'recharts';
 var WebFontConfig = {
        google: { families: [ 'Roboto:300,400,500,700:latin' ] }
      };
      (function() {
        var wf = document.createElement('script');
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
 
const data = [
  { name: 'Page A', uv: 1000, pv: 2400,  amt:  260,     minV: 400,  maxV:  60,      xv: 200,  xmt:  20,         yv: 240,  ymt:  26 ,  zuv:   20  }
, { name: 'Page B', uv:  300, pv: 4567,  amt:  430,     minV: 567,  maxV:  30,      xv: 467,  xmt:  40,         yv: 456,  ymt:  43 ,  zuv:  210  }
, { name: 'Page C', uv:  280, pv: 1398,  amt:  130,     minV: 398,  maxV:  30,      xv: 198,  xmt:  10,         yv: 139,  ymt:  13 ,  zuv:  220  }
, { name: 'Page D', uv:  200, pv: 9800,  amt: 2600,     minV: 800,  maxV: 200,      xv: 900,  xmt: 260,         yv: 980,  ymt: 260 ,  zuv:  212  }
, { name: 'Page E', uv:  278, pv: 3908,  amt: 4300,     minV: 908,  maxV: 400,      xv: 308,  xmt: 430,         yv: 390,  ymt: 430 ,  zuv:  278  }
, { name: 'Page F', uv:  189, pv: 4800,  amt: 1300,     minV: 800,  maxV: 100,      xv: 400,  xmt: 130,         yv: 480,  ymt: 130 ,  zuv:  289  }
, { name: 'Page G', uv:  189, pv: 4800,  amt: 2400,     minV: 800,  maxV: 200,      xv: 400,  xmt: 240,         yv: 480,  ymt: 240 ,  zuv:  289  }
, { name: 'Page H', uv:  189, pv: 4800,  amt:  226,     minV: 800,  maxV:  26,      xv: 400,  xmt:  26,         yv: 480,  ymt:  22 ,  zuv:  289  }
, { name: 'Page I', uv:  189, pv: 4800,  amt:  243,     minV: 800,  maxV:  43,      xv: 400,  xmt:  23,         yv: 480,  ymt:  24 ,  zuv:  289  }
, { name: 'Page J', uv:  189, pv: 4800,  amt:  213,     minV: 800,  maxV:  13,      xv: 400,  xmt:  23,         yv: 480,  ymt:  21 ,  zuv:  289  }
];
 
 const Toolip = props =>  (! props.active) ? null :  ( <div style={{ fontFamily: 'Roboto',  color : '#00b4cd',  fontSize: '10px' }} >
                                                                        {props.payload.map(v => <p>{v.value}</p>)}
                                                                        <p>{ props.label }</p>
                                                       </div> )

  const NotAxisTickButLabel = props=> ( <g transform={  "translate( " + props.x + "," + props.y + " )" }><text x={0} y={0} dy={16}  fontFamily="Roboto"  fontSize="10px"  textAnchor="end"  fill={props.color || "#8884d8" } transform={"rotate(" + props.angle + ")" } >{props.payload.value}</text></g>   )
 
  
export default props =>( 
   	<div>
        <LineChart width={600} height={200} data={data} syncId="anyId"  margin={{top: 10, right: 10, left: 0, bottom: 10}}>
          <XAxis stroke="#00b4cd" tick={<NotAxisTickButLabel angle={-90}/>} dataKey="name" />
          <YAxis stroke="#00b4cd" tick={<NotAxisTickButLabel angle={  0}/>}/>
          <Tooltip content={<Toolip/>}  />
          <Line type='monotone' dataKey='uv' stroke="#8884d8"  dot={false} fill='#8884d8' />
          <Line type='monotone' dataKey='xv' stroke="#8884d8"  dot={false} fill='#8884d8' />
          <Line type='monotone' dataKey='yv' stroke="#8884d8"  dot={false} fill='#8884d8' />
        </LineChart>
        <LineChart width={600} height={200} data={data} syncId="anyId"  margin={{top: 5, right: 10, left: 0, bottom: 10}}>
          <XAxis stroke="#00b4cd"  tick={<NotAxisTickButLabel angle={-90} color={"#00b4cd"}  />} dataKey="name" />
          <YAxis stroke="#00b4cd"  tick={<NotAxisTickButLabel angle={  0} color={"#00b4cd"}  />}/>
          <Tooltip content={<Toolip/>} />
          <Line type='monotone' dataKey='pv' stroke='#82ca9d' dot={false} fill='#82ca9d' />
        </LineChart>
        <LineChart width={600} height={200} data={data} syncId="anyId"   margin={{top: 5, right: 10, left: 0, bottom: 10}}>
          <XAxis stroke="#00b4cd" tick={<NotAxisTickButLabel angle={-90}/> }  dataKey="amt" />
          <YAxis stroke="#00b4cd" tick={<NotAxisTickButLabel angle={  0}/>}/>
          <Tooltip content={<Toolip/>} />
          <Line type='monotone' dataKey='amt' stroke='#82ca9d' dot={false} fill='#82ca9d' />
        </LineChart>
        <LineChart width={600} height={200} data={data} syncId="anyId"   margin={{top: 5, right: 10, left: 0, bottom: 10}}>
          <XAxis stroke="#00b4cd"  tick={<NotAxisTickButLabel angle={-90}/>}  dataKey="minV" />
          <YAxis stroke="#00b4cd"  tick={<NotAxisTickButLabel angle={  0}/>}/>
          <Tooltip  content={<Toolip/>} />
          <Line type='monotone' dataKey='minV' stroke='#82ca9d' dot={false} fill='#82ca9d' />
        <Brush />    
        </LineChart>
      </div>
  ) 
