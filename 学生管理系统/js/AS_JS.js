function check() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "123456" && password === "654321") {
        alert("登录成功");
        window.location.href = "https://www.bilibili.com";
    } else {
        alert("登录失败，请检查账号或密码");
    }
}

let button = document.getElementById("submit");
button.onclick = check;