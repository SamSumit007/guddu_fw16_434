function localdata(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (error) {
    return undefined;
  }
}

function savedata(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { localdata, savedata };


// const initState={
//     todos:localdata("todo") || [] 
// }


// in reducer 
// case Add_todo:{
//     const updatetodo = [...state.todo, payload];
//     savedata("todos", updatedata)
//     return{
//         ...state,
//         todos:updatetodo
//     }
// }