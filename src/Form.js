import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './custome.css';


const App = () => {
    const [inputList, setInputList] = useState();

    const [Items, setItems] = useState([]);


    const itemsEvent = (e) => {
        setInputList(e.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList('')
    }

    const deleteItems = (id) => {
       setItems((oldItems) => {
           return oldItems.filter((arrEle ,index)=>{
                return index !== id;
           })
       })
    }

    return <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder="Add a Items"
                    value={inputList}
                    onChange={itemsEvent} />
                <button onClick={listOfItems}>+</button>

                <ol>
                    {Items.map((itemVal,index) => {
                        return <>
                            <div className="todo_style">
                                <i className="fa fa-times" aria-hidden="true" onClick={()=>{
                                    deleteItems(index)
                                }} />
                                <li key={index}>{itemVal}</li>
                            </div>
                        </>
                    })}
                </ol>
            </div>
        </div>
    </>
}

ReactDOM.render(<App />, document.getElementById('root'));