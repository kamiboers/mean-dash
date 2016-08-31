var $ = require('./jquery')

$(document).ready(function() {

  var update = document.getElementsByClassName('b-edit')

  update.addEventListener('click', function(){
    // fetch('tasks', {
    //   method: 'put',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //     'task': 'updated task title',
    //     'id': self.id
    //   })
    // })
    console.log(this.id)
  }, false)

})