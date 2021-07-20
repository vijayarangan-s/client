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



function App() {
  return (
    <div className="App">
      <p>Tooltip from prime react</p>
      <ExpandRow/>
    </div>
  );
}

export default App;
