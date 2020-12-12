import React, { Component } from 'react'
import Tags from './metrics/Tags'
import Info from './metrics/Info'

class Results extends Component {
  render() {
    return (
      <div className="w-full container mx-auto m-24">
        <div id="tags">
          <div className="px-2">
            <div className="flex mx-2">
              <Tags tags={this.props.tags} />
              <Info title={this.props.title} channelTitle={this.props.channelTitle} views={this.props.views} />
              <div className="w-1/2 px-2">
                <div className="bg-gray-500 h-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default Results;