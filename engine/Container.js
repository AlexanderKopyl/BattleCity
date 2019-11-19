;(function () {
    'use strict';

    class Container extends GameEngine.DisplayObject {
        constructor(args = {}) {
            super(args);
            this.displayObjects = []

        }


        add (displayObjects) {
            if(!this.displayObjects.includes(displayObjects)){
                this.displayObjects.push(displayObjects)
            }
        }

        remove () {

        }

        draw (canvas,context) {

            context.save();
            context.translate(this.x,this.y);
            context.rotate(this.rotation);
            context.scale(this.scaleX,this.scaleY);

            for (const displayObjects of this.displayObjects){
                displayObjects.draw(canvas,context);
            }

            context.restore();
        }
    }

    window.GameEngine = window.GameEngine || {};
    window.GameEngine.Container = Container;

})();