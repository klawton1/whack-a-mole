angular
  .module("gameApp")
  .controller("gameController", gameController);

gameController.inject = ["$interval", "$timeout"]
function gameController ( $interval,   $timeout ){
  console.log("connected home controller");
  vm = this;
  vm.score = 0;
  vm.moles = [];
  vm.showing = [];
  vm.gameOff = true;

  for(var i=0; i< 16; i++){
    var mole = new Mole(i);
    vm.moles.push(mole);
  }

  function Mole(id){
    this.id = id;
    this.image = "http://www.psychologyofgames.com/wp-content/uploads/2014/02/Mr._Resetti.png";
    this.shown = false;
  }

  vm.hide = function(mole){
    mole.shown = false;
    if(!vm.gameOff){
      vm.score += 1;
    }
    if(vm.showing.includes(mole.id)){
      var indx = vm.showing.indexOf(mole.id);
      vm.showing.splice(indx, 1);
      console.log("spliced showing:", vm.showing)
    }

  }

  vm.start = function(){
    console.log("START GAME");
    vm.score = 0;
    vm.showing = [];
    vm.gameOff = false;
    var timer = $interval(function(){
      vm.gameOff = true;
    },10000);
    showing = [];
    var inter = $interval(function(interval){
      var index = Math.floor(Math.random() * vm.moles.length);
      if(!vm.showing.includes(index)){
        vm.showing.push(index);
        console.log("showing:", vm.showing);
      }
      vm.moles[index].shown = true;
      var hideMole = $timeout(function(){
        vm.moles[index].shown = false;
      }, 1000, 1)

      if(vm.gameOff){
        console.log("END GAME")
        vm.moles.forEach(function(mole){
          mole.shown = false;
        })
        $interval.cancel(inter);
      }
    },675);
  }
}