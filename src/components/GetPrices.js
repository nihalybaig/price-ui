import React, { Component } from 'react';
// get posts from online api
// it's return a json file
class GetOnlinePosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            price : []          
        };
    }

    componentDidMount(){
        fetch("http://localhost:8080/?sku=Panasonic%20Beard%20Trimmer%20Wet%20and%20dry")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    price : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, price} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ol className="item">
                    {
                
                        <div>
                            <p className="title">{price.sku}</p>
                            <p className="body">{price.price}</p>
                            <p className="body">{price.url}</p>                                    
                            <p className="body">{price.amzn_name}</p>
                        </div>
                        
                    }
                    </ol>
                </div>
            );
        }
      
    }
  }
  
  export default GetOnlinePosts;