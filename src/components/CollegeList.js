import React, { Component } from 'react';
import './collegeList.css';
import {colleges} from './colleges.json';
import InfiniteScroll from 'react-infinite-scroll-component';

  
class CollegeList extends Component {


    state = {
        items:  colleges
      };
    

      fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(this.state.items)
          });
        }, 1000);
      };
    
    render() {
        return (
           
             <div>
               {/* Load More data on scrolling at the bottom */}
              <InfiniteScroll
              dataLength={this.state.items.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              >
          <div id="container">
                  {/* Heading of the section */}
                 <h2 id="heading">Colleges in India</h2>

            {/* Access Each college Details in the List */}
           {this.state.items.map((i,index)=>(
                <div className="list" key={i.college_name}>
                        {/* Image Section of the List */}
                        <div className="image">
                             <div className="promote">PROMOTED</div>
                              <div className="rating">
                                <h4><span>3.9</span>/5 <br/>
                                <span>Very Good</span>
                                </h4>
                              </div>
                              <div className="tags"><h5>{i.tags[0]}</h5></div>
                              <div className="tag1"><h5>{i.tags[1]}</h5></div>
                              <div className="ranking"><h3>#{i.ranking}</h3></div>
                        </div>
                              <div className="collegeName"><h4>{i.college_name}   &#9733;&#9733;&#9733;&#9733;&#9734; </h4></div>
                              <div className="nearest"><h4>{i.nearest_place[0]}</h4><h3>| {i.nearest_place[1]}</h3></div>
                              <div className="famous_places">
                              <h3><span>93% Match:</span>{i.famous_nearest_places}</h3>
                              </div>
                              <div className="offertext">
                                <h3>{i.offertext}</h3>
                              </div>
                              <div className="originalfees"><h3>&#x20B9;<s>{i.original_fees}</s></h3></div>
                              <div className="tag"><p className="card-price">{i.discount}</p></div>
                              <div className="discount">
                                <h3>&#x20B9; {i.discounted_fees}</h3>
                              </div>
                              <div className="feescycle"><h3>{i.fees_cycle}</h3></div>
                              <div className="amenties"><h3>{i.amenties[0]} . {i.amenties[1]}</h3></div>
                   </div>
                   ))}
       </div>
         </InfiniteScroll>
         </div>
        )
    }
}

export default CollegeList;
