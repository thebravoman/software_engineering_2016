# Домашно 25

##

Имплементирайте queryData функцията в mongodb-provider-a, така че да може да търси за геори по няколко произволни атрибута и техните стойности, подавани като Get параметери. В момента тя може да търси само по тип:

http://localhost:3000/troll - връща всички герои от този тип.

Например:

http://localhost:3000/troll?firsname=Dark - да върне всички геори от типа torll с първо име Dark
http://localhost:3000/troll?strength=100 - да върне всички геори от типа troll със сила 100
http://localhost:3000/troll?strength=100&fristname=Dark - да върне всички герои от типа troll, които имат сила 100

http://localhost:3000/troll?strength=100&fristname=Dark&lastname=Lord - да върне всички герои от типа troll, които имат сила 100 и фамилия Lord

и т.н. и т.н.

###

Имплементирайте прикачане на снимка към даден тип - чрез POST заявка към

http://localhost:3000/:type/image с Content-Type: image/jpeg и тяло снимката на героя

Илементирайте GET заявка към http://localhost:3000/:type - която да връща картинката записана за съответния герой и header Content-Type: image/jpeg

Картинките да се запзват в mongodb чрез grid-fs модула

### 
Добавете функционалност, която да връща http status 404 ако картинката за даден тип не съществува.
Например:

http://localhost:3000/non-existing-character/image

За целта използвайте exist функцията на gridfs-stream - документацията е тук: https://www.npmjs.com/package/gridfs-stream секция check if file exists
