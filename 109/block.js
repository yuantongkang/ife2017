class Block {
    constructor($board) {
        // 默认属性
        this.x = 5;
        this.y = 5;
        this.rotate = 0;

        // 创建 DOM
        this.$block = document.createElement("div");
        this.$block.id = "block";
        this.$block.className = "animated";

        // 把方块添加至棋盘
        $board.appendChild(this.$block);

        this.render();
    }

    render() {
        // 设置方块样式
        this.$block.style.left = (this.x * 40) + "px";
        this.$block.style.top = (this.y * 40) + "px";
        this.$block.style.transform = "rotate(" + this.rotate + "deg)";
    }

    go() {
        // 计算方块的自然旋转角度 (0 <= rotate < 360)
        let rotate = this.rotate % 360;
        if (rotate < 0) rotate += 360;

        switch (rotate) {
            // 朝上
            case 0: --this.y; break;
            // 朝下
            case 180: ++this.y; break;
            // 朝左
            case 270: --this.x; break;
            // 朝右
            case 90: ++this.x; break;
        }

        // 使方块位置不超出棋盘边界
        if (this.x >= 10) this.x = 9;
        else if (this.x < 0) this.x = 0;

        if (this.y >= 10) this.y = 9;
        else if (this.y < 0) this.y = 0;
    }

    turnRight() {
        this.rotate += 90;
    }
    turnLeft() {
        this.rotate -= 90;
    }
    turnBack() {
        this.rotate += 180;
    }
}
