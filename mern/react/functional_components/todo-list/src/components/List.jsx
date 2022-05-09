import React, { useState } from 'react';

const List = () => {
    let [item, setItem] = useState("");

    let [itemList, setItemList] = useState([]);
    let [completed, setCompleted] = useState(false);

    const submitItem = (e) => {
        e.preventDefault();

        let listItem = {item};
        setItemList([...itemList, listItem]);
        setItem("");
    }

    const toggleCompleted = (e, index)=>{
        let [...copyList] = itemList;
        copyList[index].completed = e.target.checked;
        setItemList(copyList);
        console.log("working")
    }

    const deleteItem = (e, index)=>{

        let filteredList = itemList.filter((listItem, i)=>{
            return i != index
        })

        setItemList(filteredList);
    }

    return (
        <>
            <div className='container-sm'>
                <form onSubmit={submitItem}>
                    <input type="text" name="" className='form-control' onChange={ (e) => (setItem(e.target.value))} value={item}/> <input type="submit" value="Add" className='btn btn-success mt-2' />
                </form>
            </div>
            <div className='container-sm'>
                <ul>
                    {
                        itemList.map((listObj, index)=>{
                            return(
                            <div key={index}  >
                                <p style={{textDecoration: listObj.completed? "line-through":"none"}}>{listObj.item}</p> 
                                <input type="checkbox"  onChange={(e)=> (toggleCompleted(e,index))}/> <input type="button" value="Delete" className='btn btn-dark' onClick={(e)=>(deleteItem(e,index))}/>
                            </div>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default List;