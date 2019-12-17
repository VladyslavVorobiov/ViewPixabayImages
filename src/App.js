import React from 'react'
import Layout from './hoc/Layout/Layout'
import CardList from './containers/CardList/CardList'
import {Route, Switch, Redirect} from 'react-router-dom'
import CardDetails from './components/CardDetails/CardDetails'

class App extends React.Component {
   
    state = {
        isSortByLikes: false,
        isSortByComments: false,
        isSortByTags: false,
        valueInputSortByTags: '',
        placeHolderInputByTags: 'By tag...'
    }

    sortByLikesHadler = () => {
        this.setState({
            isSortByLikes: true,
            isSortByComments: false,
            isSortByTags: false
        });
    }

    sortByCommentsHadler = () => {
        this.setState({
            isSortByComments: true,
            isSortByLikes: false,
            isSortByTags: false
        });
    }

    sortByTagsHandler = event => {
        this.setState({
            valueInputSortByTags: event.target.value,
            placeHolderInputByTags:'By tag...'
        })
    }

    sortCancelHadler = () => {
        this.setState({
            isSortByComments: false,
            isSortByLikes: false,
            isSortByTags: false,
            valueInputSortByTags: '',
            placeHolderInputByTags: 'By tag...'
        });
    }

    componentDidMount(){
    }

    render(){

        let routes = (
            <Switch>
                <Route 
                    path = "/cardDetails/:id"
                    render = {(props) => <CardDetails {...props} />}
                />
                <Route 
                    path = "/"
                    exact
                    render = {(props) => <CardList
                           {...props}
                           isSortByLikes = {this.state.isSortByLikes} 
                           isSortByComments = {this.state.isSortByComments}
                           valueInputSortByTags = {this.state.valueInputSortByTags}
                        />}
                />
                <Redirect to = "/" />
            </Switch>
        );

        return (
            <Layout 
                onSortByLikes = {this.sortByLikesHadler}
                onSortByComments = {this.sortByCommentsHadler}
                onSortCancel = {this.sortCancelHadler}
                onSortByTags = {this.sortByTagsHandler}
                placeHolderInputByTags = {this.state.placeHolderInputByTags}
            >
                {routes}
            </Layout>
        ); 
    }
}

export default App;
