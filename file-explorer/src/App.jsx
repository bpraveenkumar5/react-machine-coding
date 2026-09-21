//Nested file folder structure
//Exepand and collapse folders
//Add/edit/delete files and folders
import { useState } from 'react'

import './App.css'
import json from './data.json'

//react component to render the list of files and folders
const List = ({list, addNodeToList, deleteNodeFromList })=>{
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className="container">
        {list.map((node)=>(
          <div key={node.id}>
            {node.isFolder &&(<span onClick={()=>setIsExpanded((prev)=> ({...prev, [node.name]: !prev[node.name]}))}>
              {isExpanded ?.[node.name] ? "📂" : "📁"}
              </span>)}
            <span>{node.name}</span>
            {node?.isFolder && (
              <span onClick ={()=> addNodeToList(node.id)} style={{marginLeft: "5px"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjW2fEu9efHD6cBu5J9MWT7pMDPwPz0eHwppR5DYYQw&s=10" alt="add" width={15} height={15} style={{marginLeft: "5px"}}/>
              </span>
            )}
            <span onClick ={()=> deleteNodeFromList(node.id)} style={{marginLeft: "5px"}}>
              <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete" width={15} height={15} style={{marginLeft: "5px"}}/>
            </span>
              {isExpanded?.[node.name] && node?.children && <List list={node.children} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList} />}
            </div>
        ))}
      </div>
  );
};
function App() {

  const [data, setData] = useState(json);

  const addNodeToList = (parentId) => {
    const name = prompt("Enter name of file/folder");
    const updateTree = (list) => {
      return list.map(node => {
        if (node.id === parentId) {
          return{
            ...node,
            children: [...node.children, 
              {id: Date.now().toString(), name: name, isFolder: true, children: []}]
          };
        }
        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children)
          };

        }
        return node;
      });

    };
    setData((prev) => updateTree(prev));
  }
   const deleteNodeFromList = (itemId) => {
    const updateTree = (list) => {
      return list
      .filter(node => node.id !== itemId)
      .map(node => {
        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children)
          };
        }
        return node;
      });
    };
    setData((prev) => updateTree(prev));
  };
  return (
    <div className="App">
      <h2>File/Folder Explorer</h2>
      <List list={data} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>

    </div> 
  );
}

export default App
