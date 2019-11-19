;(function () {
    'use strict';

    class Sprite  extends GameEngine.DisplayObject{
        constructor(texture, args = {}) {
            super(args);
            this.texture = texture;

            const frame = args.frame || {};

            this.frame = {
                x: frame.x || 0,
                y: frame.y || 0,
                width: frame.width || texture.width,
                height: frame.height || texture.height
            };

            this.width = args.width || this.frame.width;
            this.height = args.height || this.frame.height;


        }

        // get scaleX() {
        //     return this.width / this.frame.width
        // }
        // set scaleX(value) {
        //     this.width = this.frame.width * value;
        //     return value
        // }
        //
        // set scaleY(value) {
        //     this.height = this.frame.height * value;
        //     return value
        // }
        //
        // get scaleY() {
        //     return this.height / this.frame.height
        // }

        draw(canvas, context) {

            context.save();
            context.translate(this.x,this.y);
            context.rotate(this.rotation);
            context.scale(this.scaleX,this.scaleY);

            context.drawImage(
                this.texture,

                this.frame.x,
                this.frame.y,
                this.frame.width,
                this.frame.height,

                this.absoluteX - this.x,
                this.absoluteY - this.y,

                this.width,
                this.height
            );

            context.restore();
        }
    }

    window.GameEngine = window.GameEngine || {};
    window.GameEngine.Sprite = Sprite;

})();