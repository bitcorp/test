// Initialize SpreadJS
$(document).ready(function() {
  var ns = $.wijmo.wijspread;
  function EditableHyperLinkCellType() {}
  EditableHyperLinkCellType.prototype = new ns.HyperLinkCellType();
  EditableHyperLinkCellType.prototype.createEditorElement = function(context) {
    return ns.TextCellType.prototype.createEditorElement.apply(this, context);
  }
  EditableHyperLinkCellType.prototype.activateEditor = function(editorContext, cellStyle, cellRect, context) {
    ns.TextCellType.prototype.activateEditor.apply(this, arguments);
  }
  EditableHyperLinkCellType.prototype.updateEditor = function(editorContext, cellStyle, cellRect, context) {
    ns.TextCellType.prototype.updateEditor.apply(this, arguments);
  }
  EditableHyperLinkCellType.prototype.deactivateEditor = function(editorContext, context) {
    ns.TextCellType.prototype.deactivateEditor.apply(this, arguments);
  }
  EditableHyperLinkCellType.prototype.getEditorValue = function(editorContext, context) {
    return ns.TextCellType.prototype.getEditorValue.apply(this, arguments);
  }
  EditableHyperLinkCellType.prototype.setEditorValue = function(editorContext, value, context) {
    ns.TextCellType.prototype.setEditorValue.apply(this, arguments);
  }
  EditableHyperLinkCellType.prototype.isImeAware = function(context) {
    return true;
  }
  EditableHyperLinkCellType.prototype.focus = function(editorContext, context) {
    return ns.TextCellType.prototype.focus.apply(this, arguments);
  }

  $("#ss").wijspread(); // create wijspread control
  var spread = $("#ss").wijspread("spread"); // get instance of wijspread control
  var sheet = spread.getActiveSheet(); // get active worksheet of the wijspread control
  // initializing the active worksheet here...

  sheet.isPaintSuspended(true);
  var h = new EditableHyperLinkCellType();
  sheet.getCell(2, 2).text("http://www.google.com").cellType(h);
  sheet.getColumn(2).width(200);

  sheet.isPaintSuspended(false);
});