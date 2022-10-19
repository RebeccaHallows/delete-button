removeFile = function(v) {
    var inputFieldID = v.id.replace("-delete", "");
    var ipt = document.getElementById(inputFieldID);
    console.log("resetting ")
    ipt.value = "";
    console.log("i was cleaned out")
  }

  uploadFile = function(v) {
    var inputFieldID = `${v.id}-label`;
    var inputFieldLabel = document.getElementById(inputFieldID);
    var fieldValue = `new: ${v.value.replace(/^.*[\\\/]/, '')}`;
  }
