import React ,{useState} from 'react'
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button'
import { Tooltip } from 'primereact/tooltip';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

const ToolTipDemo = () => {
    const [saveBtnTooltipText, setSaveBtnTooltipText] = useState('Click to proceed');
    const [knobValue, setKnobValue] = useState(60);
    const [sliderValue, setSliderValue] = useState(20);
    const [count, setCount] = useState(0);
    return (
        <div>
             <Tooltip target=".tooltip-button" autoHide={false} position="bottom">
                <div className=" p-ai-center" style={{margin:"10px"}}>
                    <p style={{color:'red'}}>1 Failed to </p>
                    <p style={{color:'yellow'}}>1 Failed to </p>
                </div>
            </Tooltip>
            <Badge className="tooltip-button p-ml-2" value="!" severity="danger" />
        </div>
    )
}

export default ToolTipDemo
