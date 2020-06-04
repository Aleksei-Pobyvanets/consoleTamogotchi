
console.log("Доброго времени суток, что бы начать игру напишите в консоли start() .")

function start() {
  console.log("Отлично, создайте вашего персонажа, что бы зделать это вам необходимо придумать его имя, для этого воспользуйтесь командой ( person.name = 'имя вашего питомца')")
  console.log("( person.type = 'вид животного' ) например Dragon или Dog, подойдёт любое")
  console.log("этой командой вы можете проверять статистику вашего питомца ( person.statys() )")
}

function Tamagotchi(name, type, hungry, mood) {
  this.name = name
  this.type = type
  this.hungry = hungry
  this.mood = mood


  this.statys = () => {
      console.log(`Вашего питомца зовут ${this.name}, он принадлежик к виду ${this.type}, его голод ${this.hungry}/100 ,его настроение ${this.mood}/100.`)
  }

}   

const person = new Tamagotchi()
// person.sayHello() 
// console.log(person.name) 