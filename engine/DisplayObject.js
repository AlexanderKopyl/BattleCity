;(function () {
 'use strict'

    class DisplayObject {
        constructor(args ={}){

            this.x =args.x || 0;
            this.y = args.y || 0;

            this.width = args.width || 0;
            this.height = args.height || 0;

            this.rotation = args.rotation || 0;

            this.scale  = args.scale || 1;
            this.scaleX = args.scaleX || 1;
            this.scaleY = args.scaleY || 1;

            this.anchorX = args.anchorX || 0;
            this.anchorY = args.anchorY || 0;

            if (args.scale !== undefined) {
                this.setScale(args.scale)
            }
        }

        draw () {}

        get absoluteX() {
            return this.x - this.anchorX * this.width
        }

        set absoluteX(value) {
            this.x = value + this.anchorX * this.width;
            return value
        }

        get absoluteY() {
            return this.y - this.anchorY * this.height
        }

        set absoluteY(value) {
            this.y = value + this.anchorY * this.height;
            return value
        }

        setScale(scale){
            this.scaleX = scale;
            this.scaleY = scale;
        }
    }

    window.GameEngine = window.GameEngine || {};
    window.GameEngine.DisplayObject = DisplayObject;
})();