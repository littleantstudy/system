

     const stuData = {
        username: document.getElementById("account").value,
        password: document.getElementById("pwd").value,
    };
    const submit = {
        method: "post",
        url: " https://2eab-117-136-90-216.ngrok-free.app/Admin_war/login",
        data: stuData,
        timeout: 3000,    
    }
        axios(submit)
        // console.log(stuData)
        .then((response) => {
            if (JSON.parse(response) === "登录成功") {
                console.log(stuData);
                window.location.href = "学生功能界面.html";
           } 
        })
        .catch((error) => {
        console.log(error); });

document.getElementById("adminMessage").addEventListener('submit', function(event) {
  event.preventDefault();
});
 //定义学生登录信息    
   