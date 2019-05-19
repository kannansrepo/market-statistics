import React, { PureComponent } from "react";
import Header from "./Header";
import Statistics from "./StatisticsList";
import PieChart from "./PieChartSample";
import statsData from "./stats.json";

class App extends PureComponent {
render() {
   return (
<div>
  <Header />
  <div style={{display: 'flex'}}>
    <Statistics {...statsData}/>
    <PieChart  mfValue={(statsData.filter(t => t.type == 'MF')).length} eqValue={(statsData.filter(t => t.type == 'EQ')).length}/>
  </div>


</div>
); } }
export default App;
