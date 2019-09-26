import React, { Component } from 'react';
import axios from 'axios';

export default class Add extends Component {

  constructor(props){
    super(props);
    this.state={
      category_name: ''
    }
    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //Calling the ID, passing into to Edit
  componentDidMount(){
      axios.get('http://localhost:8000/api/category/edit/'+this.props.match.params.id)
            .then(response => {
              this.setState({category_name:response.data.name})
             })
             .catch(function (error) {
               console.log(error);
             });
           }

  onChangeCategoryName(e){
      this.setState({
          category_name:e.target.value
      });
  }

  //Update save into database
  onSubmit(e){
      e.preventDefault();
      const category = {
        category_name : this.state.category_name
      }
      axios.put('http://localhost:8000/api/category/update/'+this.props.match.params.id, category)
           .then(res=>console.log(res.data));
  }

  render() {
    return(
      <div >
          <form onSubmit={this.onSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="category_name">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="category_name"
                  value={this.state.category_name}
                  onChange={this.onChangeCategoryName}
                  placeholder="Enter Category" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
