import { Component } from 'react';

export default class Content extends Component {

    showInfo(info){
        alert("Informasi" + info)
    }

  render() {
    return (
      <div className="container-lg">
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Jution</td>
              <td>Ragunan</td>
              <td>
                <button onClick={()=> this.showInfo(1)}>Show</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Candra</td>
              <td>Ragunan</td>
              <td>
                <button onClick={()=> this.showInfo(2)}>Show</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Kirana</td>
              <td>Ragunan</td>
              <td>
                <button onClick={()=> this.showInfo(3)}>Show</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}