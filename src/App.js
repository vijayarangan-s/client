import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './App.css';
import { Badge } from 'primereact/badge';
import { Compare } from './components/Compare/Compare';
import ToolTipDemo from './components/ToolTip/ToolTipDemo';
import  TableData  from './components/TableData/TableData';
import { CompVersion } from './components/CompVersion/CompVersion';
import { Workflow } from './components/Workflow/Workflow';
import { ExpandRow } from './components/ExpandRow/ExpandRow';
import { Calendar1 } from './components/Calendra/Calendar';
import { HamMenu } from './components/HamMenu/HamMenu';
import { OverlayPanel } from 'primereact/overlaypanel';
import { OverlayPanelDemo } from './components/OverlayPrime/OverlayPanelDemo'
import SQLSearch from './components/SQLSearch/SQLSearch';
import GridAction  from './components/GridAction/GridAction';
import FilterGrid from './components/FilterBox/FilterGrid';
import DisplayResult from './components/DisplayResult/DisplayResult';



function App() {
  return (
    <div className="App">
      <p>Filter Box for Advanced search</p>
      <FilterGrid/>
      <hr/>
      <DisplayResult/>
    </div>
  );
}

export default App;
