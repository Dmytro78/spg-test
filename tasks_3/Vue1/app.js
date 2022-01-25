const App = {
    data() {
    return{
      placeholder:"Enter you name",
      inputValue: '',
      users: ["User1", "User2"],
      users2: [
        {id:1, users_name: 'Admin', completed: false},
        {id:2, users_name: 'Joe', completed: false},
        {id:3, users_name: 'Helen', completed: false},
        {id:4, users_name: 'Jacob', completed: false}
      ],
    }
  },
  methods: {
         addUser() {
          if (this.inputValue !== "") {
              this.users.push(this.inputValue)
              this.inputValue = ''
          }
      },
    removeUser(id) {
        this.users.splice(id, 1)
    }
  }
};


Vue.createApp(App).mount('#app')