function inPLaceEditTopic(a) {
    //  id: 3400, topic_name: "Improve survey functionality", assignment_id: 772, max_choosers: 1, category: "", topic_identifier: "E1620", micropayment: null, private_to: null

    React.render(< EditForm topicId={a.id}
                            name={a.topic_name}
                            assignmentId={a.assignment_id}
                            maxChoosers={a.max_choosers}
                            category={a.category}
                            topicIdentifier={a.topic_identifier}
                            micropayment={a.micropayment}
                            privateTo={a.private_to}
    />,document.getElementById('test'));


}

var EditForm = React.createClass({

    getInitialState: function(){
      return {
          topic:{
              topic_identifier: this.props.topicIdentifier,
              topic_name: this.props.name,
              category: this.props.category,
              max_choosers: this.props.maxChoosers
          },
          id: this.props.topicId,
          assignment_id: this.props.assignmentId,
          commit: 'Update'
      }
    },


    handleTopicChange: function(e){
        var updatedTopic = this.state.topic;
        updatedTopic.topic_identifier = e.target.value;
        this.setState({topic: updatedTopic});

    },

    handleNameChange: function(e){
        var updatedTopic = this.state.topic;
        updatedTopic.topic_name = e.target.value;
        this.setState({topic: updatedTopic});

    },


    handleCategoryChange: function(e){
        var updatedTopic = this.state.topic;
        updatedTopic.category = e.target.value;
        this.setState({topic: updatedTopic});

    },

    handleChoosersChange: function(e){
        var updatedTopic = this.state.topic;
        updatedTopic.max_choosers = e.target.value;
        this.setState({topic: updatedTopic});

    },

    handleUpdateTopic: function(e){

        var that = this;

        $.ajax({
            method: 'PUT',
            data: that.state,
            dataType: "html",
            url: '/sign_up_sheet/'+ that.state.id
        })
    },



    render: function(){
        const divStyle = {
            backgroundColor: '#eaeded',
            color: 'black',
            padding: 10,
            border: 'red',
            marginTop: 10,
            marginBottom: 10
        }




        return(

            <div style={divStyle}>
            <p>Topic Id: <input type="text" defaultValue={this.props.topicIdentifier} onChange={this.handleTopicChange}/>
                &nbsp;&nbsp;Topic Name: <input type="text" defaultValue={this.props.name} onChange={this.handleNameChange} />
                &nbsp;&nbsp; Topic Category: <input type="text" defaultValue={this.props.category} onChange={this.handleCategoryChange} />
                &nbsp;&nbsp; Number of Slots: <input type="number" defaultValue={this.props.maxChoosers} onChange={this.handleChoosersChange}/></p>
                <p><button onClick={this.handleUpdateTopic}>Update</button></p>
            </div>
        );
    }
    }
)