
//获得注册按钮位置，便于切换页面
let button = document.getElementById("enroll");
button.addEventListener('click', () => {
    let enrollUrl = "studentEnroll.html";
    window.location.href = enrollUrl;
});

//获得忘记按钮，便于弹出忘记密码界面
document.getElementById("forget").addEventListener('click', () => {
    document.getElementById("forget_password").classList.remove('hidden');
});

//点击弹窗的x图标实现退出
document.getElementById("quit").addEventListener("click", () => {
    document.getElementById("forget_password").classList.add("hidden");
});


document.getElementById("stuMessage").addEventListener("submit", (event) => {
    event.preventDefault();

    //定义学生登录信息    
    const stuData = {
        username: document.getElementById("account").value,
        password: document.getElementById("pwd").value,
    };
    JSON.stringify(stuData);
    //发送到后端进行验证
    //axios.post("https://ebc9-2001-250-c01-9000-00-1-4cb3.ngrok-free.app/admin_war/login", stuData)
    const submit = {
        method: "post",
        url: "https://ebc9-2001-250-c01-9000-00-1-4cb3.ngrok-free.app/admin_war/login",
        data: stuData,
    }
        axios(submit)
        //console.log(stuData)
        .then((response) => {
            if ((response.status === 200 || response.status === 201) && onreadystate === 4) {
                const data = response.data;
                window.location.href === "学生功能界面.html";
           } 
        })
        .catch((error) => {
            console.log(error);
        });
});
