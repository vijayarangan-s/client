import React, { useRef , useState} from 'react'
import { InputTextarea } from 'primereact/inputtextarea';
import { OverlayPanel } from 'primereact/overlaypanel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ListBox } from 'primereact/listbox';

export default function SQLSearch() {
    const [suggestions, setSuggestions] = useState([]);
    const [value2, setValue2] = useState('');
      const op = useRef(null);
    const toast = useRef(null);
    const isMounted = useRef(false);
    const [data, setData] = useState([
        {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1004","code": "h456wer53","name": "Bracelet","description": "Product Description","image": "bracelet.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1005","code": "av2231fwg","name": "Brown Purse","description": "Product Description","image": "brown-purse.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
        {"id": "1006","code": "bib36pfvm","name": "Chakra Bracelet","description": "Product Description","image": "chakra-bracelet.jpg","price": 32,"category": "Accessories","quantity": 5,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1007","code": "mbvjkgip5","name": "Galaxy Earrings","description": "Product Description","image": "galaxy-earrings.jpg","price": 34,"category": "Accessories","quantity": 23,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1008","code": "vbb124btr","name": "Game Controller","description": "Product Description","image": "game-controller.jpg","price": 99,"category": "Electronics","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 4},
        {"id": "1009","code": "cm230f032","name": "Gaming Set","description": "Product Description","image": "gaming-set.jpg","price": 299,"category": "Electronics","quantity": 63,"inventoryStatus": "INSTOCK","rating": 3}
    ])
    const [logicalOp, setLogicalOp] = useState(['==','===','!=', '!==', '>', '<' ,'>=', '<=', 'AND', 'OR'])
    const [list, setList] = useState()
    const [colOption, setColOption] = useState(["id", "code","name", "description","image","price", "category", "quantity", "inventoryStatus", "rating"])
    const onSearch = (e) => {
        const query = e.target.value
        console.log({query})
        setValue2(query)
    }

    const onKeyPress = (e) => {
        op.current.toggle(e)
        if(e.keyCode === 32 ){
         console.log("Space is press", e.keyCode)
          setList(logicalOp)
        } else {
          setList(colOption)
        }
    }

    return (
        <div>
            <p>Search</p>
            <h5>Auto Resize</h5>
            
            <InputTextarea 
                value={value2} 
                style={{marginBottom:"30px"}}
                onChange={onSearch} 
                onKeyDown={onKeyPress}
                rows={3} 
                cols={100} 
                autoResize />
             <div className="card">
               <OverlayPanel 
                    ref={op} 
                    showCloseIcon 
                    id="overlay_panel" 
                    style={{width: '450px'}} 
                    className="overlaypanel-demo">
                     {list && list.map(val => {
                         return(
                             <div key={val}>
                                 {val}
                             </div>
                         )
                     })}
                </OverlayPanel>
            </div>

        <div>
            <div className="card">
                <DataTable value={data}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
        </div>
        </div>
    )
}
