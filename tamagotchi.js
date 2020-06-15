
console.log("Доброго времени суток , что бы начать игру напишите в консоли start().")
console.log("person.help() - помощь по командам")

function start() {
  console.log("Отлично, создайте вашего персонажа, что бы зделать это вам необходимо придумать его имя, для этого воспользуйтесь командой ( person.name = 'имя вашего питомца')")
  console.log("( person.type = 'вид животного' ) например Dragon или Dog, подойдёт любое")
  console.log("этой командой вы можете проверять статистику вашего питомца ( person.statys() )")
}


class tmg {
  constructor(){

    var myPrivateMood = function() {
      this.mood = 40
    }
    var myPrivateHungry = function() {
      this.hungry = 40
    }
    
  }
  
}




class Tamagotchi{
  constructor(name, type){
    this.name = name
    this.type = type
    
  }
  
  statys() {
    console.log(`Вашего питомца зовут ${this.name}, он принадлежик к виду ${this.type}, его голод ${this.hungry}/100 ,его настроение ${this.mood}/100.`)
    console.log("Так как вы создали себе персонажа, вы можете начать ухаживать за ним, но будьте осторожны, если его голод/настроение будет превышать 120 поинтов игра закончиться")
    console.log("Кстати, чуть не забыл, так как мы живем в непредсказуемом мире, есть десятипроцентный шанс что с ним случиться что тот не хорошее и игра преждевременно закончиться")
    setTimeout(() => console.log(`У ${this.name}'а урчит в животе, вы можете покормить его с посощью команды ( person.eat() )`) , 4000);

  }
  play(hungry, mood) {
    alert(" (＾▽＾) ")
    console.log('test play', 'Ваш питомец по игрался тем самым поднял свою радость на 20 пунктов, но и проголодался тоже на 10 пунктов')
    person.hungry -= 10
    person.mood += 20
    console.log('настроение', person.mood)
    console.log('голод', person.hungry)

    if(person.mood >= 120){
      person.hungry = 0
      person.mood = 0
      console.log(`${this.name} лопнул от счастья :(`)
      alert('Game over ‿︵‿ヽ(°□° )ノ︵‿︵ ')
      alert(document.location.reload(true))
    }else if(person.mood <= 0){
      alert('Game over ‿︵‿ヽ(°□° )ノ︵‿︵ ')
      alert(document.location.reload(true))
    }
    else if(person.hungry <= 0){
      alert('Game over ‿︵‿ヽ(°□° )ノ︵‿︵ ')
      alert(document.location.reload(true))
    }
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    if(getRandomInt(10) == 1){
      alert(`Тебе не повезло, ваш город отведал Уграган и унёс ${this.name}`, 'game over')
    }

  }

  eat(hungry, mood) {
    alert(" (´｡• ᵕ •｡) ")
    console.log('test play', 'Вы покормили питомца тем самым подняли его голод на 20 пунктов, но и снизили счастье на 10 пунктов')
    person.hungry += 20
    person.mood -= 10
    console.log('настроение', person.mood )
    console.log('голод', person.hungry )
  
    if(person.hungry >= 120){
      person.hungry = 0
      person.mood = 0
      console.log(`${this.name} переел и превратился в шарик :(`)
      alert('Game over ‿︵‿ヽ(°□° )ノ︵‿︵ ')
      alert(document.location.reload(true))
    }else if(person.hungry <= 0){
      alert('Game over ‿︵‿ヽ(°□° )ノ︵‿︵ ')
      alert(document.location.reload(true))
    }else if(person.mood <= 0){
      alert('Game over ‿︵‿ヽ(°□° )ノ︵‿︵ ')
      alert(document.location.reload(true))
    }
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    if(getRandomInt(10) == 1){
      alert(`Тебе не повезло, ваш город отведал Уграган и унёс ${this.name}`, 'Game over ‿︵‿ヽ(°□° )ノ︵‿︵ ')
      alert(document.location.reload(true))
    }

  }
  help(){
    console.log("")
    console.log("помошник по командам :)")
    console.log("")
    console.log("person.statys() - статус вашего питомца")
    console.log("person.play() - так вы можете играть с вашим питомцем и тем самым поднимать его настроение на 20 поинтов, но так же опускать его голод на 10 поинтов")
    console.log("person.eat() - так вы можете кормить вашего питомца и тем самым поднимать его голод на 20 поинтов, но так же опускать его настроение на 10 поинтов")
  }
  

}
   
const person = new Tamagotchi()
