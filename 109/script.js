// @TODO 生成任意尺寸的棋盘

let $board = document.getElementById("board");

// 生成棋盘坐标
let nums = "";
for (let i = 1; i <= 10; ++i) {
    nums += "<div class='num'>" + i + "</div>";
}
document.getElementById("col-nums").innerHTML = nums;
document.getElementById("rol-nums").innerHTML = nums;

// 生成棋盘格
let grids = "";
for (let i = 0; i < 100; ++i) {
    grids += "<div class='grid'></div>";
}
$board.innerHTML = grids;

// 创建小方块
let block = new Block($board);

// 监听按钮点击事件
document.getElementById("execute").addEventListener("click", function () {
    let command = document.getElementById("command").value;

    switch (command) {
        case "GO":
            block.go();
            break;

        case "TUN LEF":
            block.turnLeft();
            break;

        case "TUN RIG":
            block.turnRight();
            break;

        case "TUN BAC":
            block.turnBack();
            break;
    }

    block.render();
});
