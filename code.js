function getAllLocalStorage(){
    // TODO получить всю информацию из LocalStorage
    return arr;
}

const todoListApp = {
    data() {
        return {
            message: "Купить крекер",
            list: ['Найти кота', 'починить']
        }
    },
    methods:{
        addToList() {
            this.list.push(this.message)
        },
        deleteItem(e) {
            const index = e.target.getAttribute("data-index");
            this.list.splice(index, 1);
        }
    }
}



Vue.createApp(todoListApp).mount('#todo-list');
