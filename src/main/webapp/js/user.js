new Vue({
    el:"#app",
    data:{
        user:{
            id:"",
            username:"",
            password:"",
            email:"",
            age:"",
            sex:""
        },
        userList:[]
    },
    methods:{
      findAll:function () {
          var _this = this;
          axios.get('/day01_eesy/user/findAll.do')
              .then(function (response) {
                  // handle success
                  _this.userList = response.data;
                  console.log(response);
              })
              .catch(function (error) {
                  // handle error
                  console.log(error);
              })
      },
        findById:function (userid) {
            var _this = this;
            axios.get('/day01_eesy/user/findById.do',{params:{id:userid}})
                .then(function (response) {
                    // handle success
                    _this.user = response.data;
                    $("#myModal").modal("show");
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
        update:function (user) {
          var _this = this;
            axios.post('/day01_eesy/user/updateUser.do', _this.user)
                .then(function (response) {
                    console.log(response);
                    _this.findAll();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created:function () {//当我们页面加载时触发请求，查询所有
        this.findAll();
    }
});