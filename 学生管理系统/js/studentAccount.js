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


// let dialog = document.getElementById("forget_password");

// let mouseDownHandler = function(e) {
//     // 获取鼠标相对于弹窗的位置
//     let rect = dialog.getBoundingClientRect();
//     let offsetX = e.clientX - rect.left;
//     let offsetY = e.clientY - rect.top;

//     // 当鼠标按下时，开始监听鼠标移动事件
//     document.addEventListener('mousemove', mouseMoveHandler);

//     // 当鼠标松开时，停止监听鼠标移动事件
//     document.addEventListener('mouseup', mouseUpHandler);
// };

// let mouseMoveHandler = function(e) {
//     // 根据鼠标的位置和偏移量，计算新的弹窗位置
//     let newLeft = e.clientX - offsetX;
//     let newTop = e.clientY - offsetY;

//     // 更新弹窗的位置
//     dialog.style.left = newLeft + 'px';
//     dialog.style.top = newTop + 'px';
// };

// let mouseUpHandler = function() {
//     // 停止监听鼠标移动事件
//     document.removeEventListener('mousemove', mouseMoveHandler);

//     // 停止监听鼠标松开事件
//     document.removeEventListener('mouseup', mouseUpHandler);
// };

// // 在弹窗上添加鼠标按下事件的监听器
// dialog.addEventListener('mousedown', mouseDownHandler);
// import service from "./src/service";
document.getElementById("stuMessage").addEventListener("submit", (event) => {
    event.preventDefault();

    //定义学生登录信息    
    const stuData = {
        username: document.getElementById("account").value,
        password: document.getElementById("pwd").value,
    };
    JSON.stringify(stuData);
    //发送到后端进行验证
    axios.post("", stuData)
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
