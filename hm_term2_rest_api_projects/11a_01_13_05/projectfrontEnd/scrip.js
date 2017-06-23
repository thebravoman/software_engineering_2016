beforecreate: $.ajax({
                sync: true,
                url: "http://localhost:8080/explo/explosives",
                method: 'GET',
            }).then(function(data) {
                var explosivesCollection = data;
                ReactDOM.render(<Explosives explosives={explosivesCollection} />, document.getElementById('explosives-details'));
            }.bind(this));

var Explosives = React.createClass({
                render: function() {
                    return (
                            <tbody>
                                {this.props.explosives.map(function (explosive) {
                                    return <Explosive explosive={explosive} />;
                                })}
                            </tbody>
                    );
                }
            });
var Explosive = React.createClass({
    render: function() {
        return (
						this.props.explosive.name
        );
    }
});
