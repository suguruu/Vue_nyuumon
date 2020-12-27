Vue.component('fruits-list-title', {
  template: '<h1>fruits index</h1>'
})

Vue.component('fruits-list-description',{
  template: '<p>This is an index of typical fruits of each seasons</p>'
})

Vue.component('fruits-list-table',{
  template: `
  <table>
    <tr>
      <th>season</th>
      <th>fruits</th>
    </tr>
    <tr>
      <td>Spring<td/>
      <td>strawberry<td/>
    </tr>
    <tr>
      <td>Summer<td/>
      <td>watermellon<td/>
    </tr>
    <tr>
      <td>Autom<td/>
      <td>grape<td/>
    </tr>
    <tr>
      <td>Winter<td/>
      <td>orange<td/>
    </tr>
  </table>
  `
})

var vm = new Vue({
  el: '#fruits-list'
})
