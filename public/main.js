var update = document.getElementById('update')

update.addEventListener('click', function () {
  fetch('tasks', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'task': 'new task title'
    })
  })
})