// Auto-generated. Do not edit.



    //% color=50 weight=19
    //% icon="\uf1eb"
declare namespace MiJia_IR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="on |%btn| button pressed" shim=MiJia_IR::onPressEvent
    function onPressEvent(btn: RemoteButton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="connect ir receiver to %pin" shim=MiJia_IR::init
    function init(pin: Pins): void;
}

// Auto-generated. Do not edit. Really.
