import React, {Component} from "react";
import {Container, Message} from "semantic-ui-react";
import {render} from "react-dom";
import "whatwg-fetch";
import ShopItem from "../components/ShopItem";

export default class ViewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shopItem: false,
        };

        this.fetchShopItem = this.fetchShopItem.bind(this);
    }

    fetchShopItem() {
        fetch('/api/shop_items/?slug=' + window.location.pathname.split('/view/')[1])
            .then(response => response.json())
            .then(shopItem => {
                this.setState({
                    shopItem,
                });
            })
            .catch(() => {
                this.setState({
                    shopItem: {},
                });
            });
    }

    componentDidMount() {
        this.fetchShopItem();
    }

    render() {
        return (
            <Container textAlign="center">
                {this.state.shopItem ?
                    <ShopItem item={this.state.shopItem} link={false}/> :
                    <Message size="big" style={{textAlign: 'center', width: '100%'}}>
                        The item was not found.
                    </Message>}
            </Container>
        );
    }
}

render(
    <ViewPage />,
    document.getElementById('mount'),
);