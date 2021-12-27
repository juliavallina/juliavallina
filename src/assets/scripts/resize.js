
function init() {
  const BORDER_SIZE = 4;
  const rows = document.querySelectorAll("[data-resize-row]");
  const cols = document.querySelectorAll("[data-resize-col]");
  let currentHandler;

  function handlerResizeRow(position, target) {
    return (e) => {
      const dx = position - e.y;
      position = e.y;
      const value = (parseInt(getComputedStyle(target, '').top) - dx);
      if (value >= 0) {
        target.style.top = (parseInt(getComputedStyle(target, '').top) - dx) + "px";
      }
    }
  }

  function handlerResizeCol(position, target, end = true) {
    return (e) => {
      const dx = position - e.x;
      position = e.x;
      const width = parseInt(getComputedStyle(target, '').width);
      const value = end ? width - dx : width + dx;
      if (value >= 0) {
        target.style.width = value + "px";
      }
    }
  }

  rows.forEach(row => {
    row.addEventListener("mousedown", function(e){
      if (e.offsetY < BORDER_SIZE) {
        currentHandler = handlerResizeRow(e.y, row);
        document.addEventListener("mousemove", currentHandler, false);
      }
    }, false);
  });

  cols.forEach(col => {
    col.addEventListener("mousedown", function(e){
      const type = e.target.dataset.resizeCol;
      let condition = e.offsetX < BORDER_SIZE;
      if (type === 'end') {
        condition = (e.offsetX > (col.offsetWidth - BORDER_SIZE) && e.offsetX < (col.offsetWidth + BORDER_SIZE));
      }
      if (condition) {
        currentHandler = handlerResizeCol(e.x, col, type === 'end');
        document.addEventListener("mousemove", currentHandler, false);
      }
    }, false);
  })

  document.addEventListener("mouseup", function(){
    document.removeEventListener("mousemove", currentHandler, false);
  }, false);
}

export default { init }
