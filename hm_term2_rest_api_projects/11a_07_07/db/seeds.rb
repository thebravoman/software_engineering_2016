# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

shop_items = [
    {
        name: 'AmazonBasics Mini DisplayPort (Thunderbolt) to HDMI Adapter',
        slug: 'amazon-basics-mini-display-port',
        description: 'test description',
        price: 8.99,
        available: true,
        promotion: false
    }
]

shop_items.each {|item| ShopItem.create(item)}