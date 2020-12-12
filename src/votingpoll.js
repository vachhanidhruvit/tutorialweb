import React from 'react';

const CM = (Party,votes) => {
    class NewCM extends React.Component{
        
        state={
            voteCounted:0
        }

        mouseIncreament = ()=>{
            this.setState({voteCounted : this.state.voteCounted+votes})
        }
        
        render() {
            return (
                <div>
                    <Party
                        hocMouseIncreament = {this.mouseIncreament}
                        hocVoteCounted = {this.state.voteCounted}
                        votingFor ="CM"
                        {...this.props}
                     />                
                </div>
            )
        }
    }

    return NewCM;
}

export default CM;