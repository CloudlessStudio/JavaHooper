var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'screen',
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('background', 'Sprites/TestBG.png');
}

function create ()
{
  this.add.image(0, 0, 'background').setOrigin(0,0);
}

function update ()
{
}

