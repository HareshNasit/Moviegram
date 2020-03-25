import ReactSearchBox from 'react-search-box'
import React from 'react';
import {getKeyMoviePairs} from '../../services/api.js'


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }
    handleEvent(movie) {
        this.props.history.push("/movie/" + movie);
      }
    async componentDidMount(){
        const res = await getKeyMoviePairs()
        const data = res.data
        this.setState({data: data.map(obj => {
            return {key: obj._id, value: obj.title}
        })})
        console.log(this.state.data)
    }
    render() {
        return (

            <ReactSearchBox
              placeholder="Search Movie"
              data={this.state.data}
              onSelect={event => this.handleEvent(event.value)}
              />);
            
            
            }

        }

        export default SearchBar;