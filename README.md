2018 Fall - Course - NCTU IOT Final Project
===
函式的命名有點亂，看有沒有人要改XD

---

## IOT talk version 1

----

### Overview

- How to use
- How to pending eat food and game over
- Details of functions
- Description of variables

---

### How to use

- Download.
    - [Dummy Device WebVer for IOTtalk v1](https://github.com/IoTtalk/Dummy_Device_WebVer_for_IoTtalk_v1)
    - snake.zip (download from e3)
- Move files under `Dummy_Device_WebVer_for_IoTtalk_v1/js` to `snake/js`.
    - csmapi.js
    - dai.js
    - dan.js
    - jquery.js
- Move `IOT-Project/IOTtalk_v1/js/snake.js` to `snake/js`.
- Move `IOT-Project/IOTtalk_v1/my_snake.html` to `snake`.
- Directory tree
    ![](https://i.imgur.com/yGZTHAv.png)
- IOT talk config.
    - retval_list => `return [ x for x in args ]`
    ![](https://i.imgur.com/3XoWYuW.png)

----

### How to pending eat food and game over

- Assume that the snake move from A to B.
- ==**Case 1:**==
    ![](https://i.imgur.com/PWrXvhl.png)
    
    - $\overrightarrow{AB} \cdot \overrightarrow{AC} > 0$
    - $\overrightarrow{BA} \cdot \overrightarrow{BC} < 0$
    - $(\overrightarrow{AB} \cdot \overrightarrow{AC}) * (\overrightarrow{BA} \cdot \overrightarrow{BC}) < 0$
    - If the distance between $C$ and $B$ less than $r$, the snake eats food or game over.
- ==**Case 2:**==
    ![](https://i.imgur.com/gA7gyPg.png)
    - $\overrightarrow{AB} \cdot \overrightarrow{AC} > 0$
    - $\overrightarrow{BA} \cdot \overrightarrow{BC} > 0$
    - $(\overrightarrow{AB} \cdot \overrightarrow{AC}) * (\overrightarrow{BA} \cdot \overrightarrow{BC}) > 0$
    - If the distance between $C$ and $\overline{AB}$ less than $r$, the snake eats food or game over.

----

### Details of functions

- **Functions about score and word.**
    - `DrawScore`: Show the score on the screen.
    - `UpdateScore`: When the snake eats the food, we update the score.
    - `ResetScore`: Reset score to 0 when game over.
    - `DrawGameOver`: Show the word "game over" on the screen.
- **Functions about food.**
    - `randomFoodPos`: Generate food's position randomly.
    - `generateFood`: Show the food on the screen.
- **Functions about collision.**
    - `check_collision`:
        - If the snake eats food or game over, the return value is true.
        - Hit the wall => game over.
        - Hit the snake's body => game over.
        - Eat food => update score.
    - `reset_xy`: If game over, reset the snake's position.
    - `point_dist`:
        - Use inner product to tell it is case 1 or case 2. (see figures above)
        - Return the distance between the snake's head or the moving track of the snake's head.

----

### Description of variables

- `food_posx, food_posy`: The food's position.
- `food_timout`: When food_timeout greater than then threshold, regenerate the food. The old one will disappear.
- `now_len`: The length of the snake.
- `is_collision`: If the snake eats food or game over, the value is true.
- `is_collision_cnt`: We stop every thing while game over. After is_collision_cnt greater than the threshold, we reset the game.
- `score_text`: The words show on the top right of the screen.
- `score`: The score we get now.

---

## IOT talk version 2

----

### Overview

- How to use
- How the game works
- Functions and variables

---

### How to use

- Download.
    - [Dummy Device WebVer for IOTtalk v2](https://github.com/IoTtalk/Dummy_Device_WebVer_for_IoTtalk_v2)
- Move files under `Dummy_Device_WebVer_for_IoTtalk_v2/js` to `snake/js`.
    - dai.js
    - dan2.js
    - jquery.js
- Move `IOT-Project/IOTtalk_v2/js/snake.js` to `snake/js`.
- Move `IOT-Project/IOTtalk_v2/my_snake.html` to `snake`.
- Directory tree.
    ![](https://i.imgur.com/63eF37Z.png)
- IOT talk config.
    - retval_args12 => `return [ args[1], args[2] ]`
    ![](https://i.imgur.com/o139zP9.png)

----

### How the game works

- IOTtalk v2 更新很快，判斷碰撞不用像 v1 還要算點到直線的距離，直接算到蛇頭的距離就好。
- 從 IOTtalk 拿到值後，蛇會一直往那個方向衝，這樣會讓蛇的移動看起來是連續的。這個方法 IOTtalk v1 做不到，因為更新太慢，所以蛇會有一段時間一直衝不能控制。

----

### Functions and variables

- Almost the same as IOTtalk v1.


