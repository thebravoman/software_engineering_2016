import React, {Component} from "react";
import {Button, Card, Icon, Image} from "semantic-ui-react";
import "whatwg-fetch";
import moment from "moment";

const linkStyle = {
    color: 'rgba(0, 0, 0, .87)',
};

export default class ShopItem extends Component {
    constructor(props) {
        super(props);

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleUpdate() {

    }

    handleDelete() {
        if (confirm("Are you sure you want to delete the item?")) {
            fetch(`/api/shop_items/${this.props.item.id}`, {
                method: 'DELETE',
            });

            if (this.props.afterDelete) {
                this.props.afterDelete();
            }
        }
    }

    render() {
        const {item} = this.props;
        item.created = moment(item.updated_at).calendar();

        return (
            <Card>
                {item.image ? <Image src={item.image.url}/> : null}
                <Card.Content>
                    <Card.Header>
                        {this.props.link ?
                            <a style={linkStyle} href={`/catalog/view/${item.slug}`}>{item.name}</a> : item.name}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            Added {item.created}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {item.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name="dollar"/>
                    <span style={{fontSize: 20}}>{item.price}</span>
                </Card.Content>
                <Button color="blue" onClick={this.handleUpdate}>Edit</Button>
                <Button color="red" onClick={this.handleDelete}>Delete</Button>
            </Card>
        );
    }
}
