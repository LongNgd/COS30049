Vue.createApp ({
    data() {
        return {
            // list of nft information
            nfts: [
                {link: './items/ash&pikachu.webp', title: 'Ash & Pikachu', price: 0.1, type: 'non-hero'},
                {link: './items/darthvader.webp', title: 'Darth Vader', price: 0.1, type: 'non-hero'},
                {link: './items/doctorstrange.webp', title: 'Doctor Strange', price: 0.2, type: 'hero'},
                {link: './items/harrypotter.webp', title: 'Harry Potter', price: 0.1, type: 'non-hero'},
                {link: './items/johnwick.webp', title: 'John Wick', price: 0.1, type: 'non-hero'},
                {link: './items/michaelj.webp', title: 'Michael Jackson', price: 0.1, type: 'non-hero'},
                {link: './items/superman.webp', title: 'Superman', price: 0.2, type: 'hero'},
                {link: './items/thor.webp', title: 'Thor', price: 0.2, type: 'hero'},
            ],

            // transactions data
            transactions: [
                {transaction_id: 1, timestamp: '2023-10-06 14:30:00 UTC', sender_address: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e
, recipient_address: 0x7dF68c2AaB3aE3A7E88679C7D6B7b44279c95B3E, token_id: 0x4b2f78a8c4d3c44607c26acac6da5f8b9d67c2a3
, price: 0.1}
            ],

            // variables to control display of pages
            login: false,
            homepage: true,
            marketplace: false,
            cart: false,
            register: false,
            profile: false,

            // vaariables used in login page
            username: null,
            password: null,
            isDisabled: true,
            username_register: null,
            password_register: null,
            email_register: null,
            phone_register: null,

            balance: 100,
            logged_in: false,
            search_input: null,
            filter: null,
            buy_item: {title: null, price: null}
        }
    },
    methods: {
        display_login() {
            this.login = true
            this.homepage = false
            this.marketplace = false
            this.cart = false
            this.register= false
            this.logged_in = true
            this.profile= false
        },
        display_register() {
            this.login = false
            this.register= true
            this.homepage = false
            this.marketplace = false
            this.cart = false
            this.profile= false
        },
        display_homepage() {
            this.login = false
            this.register= false
            this.homepage = true
            this.marketplace = false
            this.cart = false
            this.isDisabled = true
            this.profile= false
        },
        display_marketplace() {
            this.login = false
            this.register= false
            this.homepage = false
            this.marketplace = true
            this.cart = false
            this.profile= false
        },
        display_cart() {
            this.login = false
            this.register= false
            this.homepage = false
            this.marketplace = false
            this.cart = true
            this.profile= false
        },
        display_profile() {
            this.login = false
            this.register= false
            this.homepage = false
            this.marketplace = false
            this.cart = false
            this.profile= true
        },
        search_item(item) {
            title = item.title.toLowerCase()
            type = item.type
            if(this.search_input == null) {
                if (this.filter == null || this.filter == "all") {
                    return true
                } else if (this.filter == type) {
                    return true
                }
            } else if (title.indexOf(this.search_input) > -1) {
                if (this.filter == null || this.filter == "all") {
                    return true
                } else if (this.filter == type) {
                    return true
                }
            } else {
                return false
            }
        },
    },
    watch: {
        password() {
            if (this.username == 'user' && this.password == '1234') {
                this.isDisabled = false
            } else if (this.username == this.username_register && this.password == this.password_register) {
                this.isDisabled = false
            } else {
                this.isDisabled = true
            }
        },
        username() {
            if (this.username == 'user' && this.password == '1234') {
                this.isDisabled = false
            } else if (this.username == this.username_register && this.password == this.password_register) {
                this.isDisabled = false
            } else {
                this.isDisabled = true
            }
        },
        password_register() {
            if (this.username_register != null && this.password_register != null) {
                if (this.username_register.length >= 4 && this.password_register.length >= 8) {
                    this.isDisabled = false
                }else {
                    this.isDisabled = true
                }
            }
        },
        username_register() {
            if (this.username_register != null && this.password_register != null) {
                if (this.username_register.length >= 4 && this.password_register.length >= 8) {
                    this.isDisabled = false
                }else {
                    this.isDisabled = true
                }
            }
        }
    }
}).mount('#app')