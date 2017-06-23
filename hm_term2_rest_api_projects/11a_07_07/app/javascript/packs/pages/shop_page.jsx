import React, {Component} from "react";
import {Button, Card, Container, Message} from "semantic-ui-react";
import {render} from "react-dom";
import "whatwg-fetch";
import ShopItem from "../components/ShopItem";

export const perPage = 8;

export default class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shopItems: [],
            currentPage: 1,
            totalPages: 0,
        };

        this.fetchShopItems = this.fetchShopItems.bind(this);
        this.fetchPages = this.fetchPages.bind(this);
        this.updatePage = this.updatePage.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    fetchShopItems() {
        const {currentPage} = this.state;

        fetch(`/api/shop_items?page=${currentPage}&per=${perPage}`)
            .then(response => response.json())
            .then(shopItems => {
                this.setState({
                    shopItems,
                });
            })
            .catch(() => {
                this.setState({
                    shopItems: [],
                });
            });
    }

    fetchPages() {
        const {currentPage} = this.state;

        fetch(`/api/shop_items/pages?page=${currentPage}&per=${perPage}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    totalPages: parseInt(data.count),
                });
                this.fetchShopItems();
            })
            .catch(() => {
                this.setState({
                    totalPages: 0,
                });
            });
    }

    updatePage(e, data) {
        this.setState({
            currentPage: data.children,
        });

        this.fetchPages();
    }

    handleDelete() {
        this.fetchPages();
        this.fetchShopItems();
    }

    componentDidMount() {
        this.fetchShopItems();
        this.fetchPages();
    }

    render() {
        const pageNodes = [];
        for (let page = 1; page <= this.state.totalPages; page++) {
            pageNodes.push(<Button onClick={this.updatePage} key={page}
                                   active={page === this.state.currentPage}>{page}</Button>)
        }

        return (
            <Container textAlign="center">
                <Card.Group itemsPerRow={4} stackable>
                    {this.state.shopItems.length > 0 ?
                        this.state.shopItems.map(item => <ShopItem item={item} key={item.id} link={true}
                                                                   afterDelete={this.handleDelete}/>) :
                        <Message size="big" style={{textAlign: 'center', width: '100%'}}>
                            No items to show.
                        </Message>
                    }
                </Card.Group>
                <br/>
                <Button.Group size="huge">
                    {pageNodes}
                </Button.Group>
            </Container>
        );
    }
}

render(
    <ShopPage />,
    document.getElementById('mount'),
);