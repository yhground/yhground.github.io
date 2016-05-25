/**/

var App=React.createClass({
    render:function(){
        return(
            <div className="app">
                <Navigation title="./yhGround"></Navigation>
            </div>
        );
    }
});

var Navigation=React.createClass({
    render:function(){
        return(
            <div className="navigation">
                <Header1 html={this.props.title}></Header1>
            </div>
        );
    }
});

var Header1=React.createClass({
    render:function(){
        return(
            <h1 className="title">
                {this.props.html}
            </h1>
        );
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('app')
);