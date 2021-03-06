/*******************************************************
 * task service implementation
 * transitions document (server)
 * Mike Amundsen (@mamund)
 *******************************************************/

// holds the list of *all* possible state transitions for this service

// run on first load;
var trans = [];
trans = fillTrans();

module.exports = main;

function main(name) {
  var rtn, i, x;
 
  rtn = {};
  for(i=0,x=trans.length;i<x;i++) {
    if(trans[i].name===name) {
      rtn = trans[i];
      break;
    }
  }

  return rtn;
}

// internal filling
function fillTrans() {
  var trans;
  trans = [];

  // search transition
  trans.push({
    name : "searchLink",
    type : "safe",
    action: "read",
    kind : "todo",
    target : "list",
    prompt : "Search ToDos"
  });
  trans.push({
    name : "searchForm",
    type : "safe",
    action : "read",
    kind : "todo",
    target : "list",
    prompt : "Search ToDos",
    inputs : [
      {name : "tags", prompt : "Tags", value : ""}
    ]
  });
  
  // self transition
  trans.push({
    name : "selfLink",
    type : "safe",
    action : "read",
    kind : "self",
    target : "self",
    prompt : "Reload"
  });
    
  // home transitions
  trans.push({
    name : "homeLink",
    type : "safe",
    action : "read",
    kind : "home",
    target : "list",
    prompt : "Home"
  });
  
  // todo transitions
  trans.push({
    name : "listAll",
    type : "safe",
    action : "read",
    kind : "todo",
    target : "list",
    prompt : "All ToDo"
  });
  trans.push({
    name : "listActive",
    type : "safe",
    action : "read",
    kind : "todo",
    target : "list",
    prompt : "Active ToDos",
    inputs : [
      {name : "completed", prompt : "Complete", value : "false"}
    ]
  });
  trans.push({
    name : "listCompleted",
    type : "safe",
    action : "read",
    kind : "todo",
    target : "list",
    prompt : "Completed ToDos",
    inputs : [
      {name : "completed", prompt : "Complete", value : "true"}
    ]
  });
  
  trans.push({
    name : "addLink",
    type : "safe",
    action : "read",
    kind : "todo",
    target : "list",
    prompt : "Add ToDo"
  });
  trans.push({
    name : "addForm",
    type : "unsafe",
    action : "append",
    kind : "todo",
    target : "list",
    prompt : "Add ToDo",
    inputs : [
      {name : "title", prompt : "Title"},
      {name : "description", prompt : "Description"},
      {name : "completed", prompt : "Complete", value : "false"},
      {name : "email", prompt : "Email"},
      {name : "tags", prompt : "Tags"}
    ]
  });
  
  trans.push({
    name : "editLink",
    type : "safe",
    action : "read",
    kind : "todo",
    target : "item",
    prompt : "Edit ToDo"
  });
  trans.push({
    name : "editForm",
    type : "unsafe",
    action : "replace",
    kind : "todo",
    prompt : "Edit ToDo",
    inputs : [
      {name : "id", prompt : "ID"},
      {name : "title", prompt : "Title"},
      {name : "description", prompt : "description"},
      {name : "completed", prompt : "Complete"},
      {name : "email", prompt : "Email"},
      {name : "tags", prompt : "Tags"}
    ]
  });
  
  trans.push({
    name : "removeLink",
    type : "safe",
    action : "read",
    kind : "todo",
    target : "item",
    prompt : "Remove ToDo"
  });
  trans.push({
    name : "removeForm",
    type : "unsafe",
    action : "remove",
    kind : "todo",
    prompt : "Remove ToDo",
    inputs : [
      {name : "id", prompt : "ID"}
    ]
  });
  
  trans.push({
    name : "completedLink",
    type : "safe",
    action : "read",
    kind : "todo",
    target : "item",
    prompt : "Mark Completed"
  });
  trans.push({
    name : "completedForm",
    type : "unsafe",
    action : "append",
    kind : "todo",
    prompt : "Mark Completed",
    inputs : [
      {name: "id", prompt:"ID"},
      {name: "completed", prompt:"Complete Status", value:"true"}
    ]
  });
  
  trans.push({
    name : "clearCompletedLink",
    type : "safe",
    action : "read",
    kind : "todo",
    target : "list",
    prompt : "Clear Completed"
  });
  trans.push({
    name : "clearCompletedForm",
    type : "unsafe",
    action : "append",
    kind : "todo",
    target : "list",
    prompt : "Clear Completed",
    inputs : [
      {name: "completed", prompt:"Complete Status", value:"true"}
    ]
  });
 
  return trans;
}
