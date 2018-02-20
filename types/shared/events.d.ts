/**
 * !Phantom
*/
declare namespace MTA {
    /**
     * This function allows you to register a custom event. Custom events function exactly like the built-in events. See event system for more information on the event system. 
     * @param eventName The name of the event you wish to create.
     * @param allowRemoteTrigger A boolean specifying whether this event can be called remotely using triggerClientEvent / triggerServerEvent or not.
     * !Phantom
     */
    function addEvent(eventName: string, allowRemoteTrigger?: boolean): boolean

    /**
     * This function will add an event handler.
     * An event handler is a function that will be called when the event it's attached to is triggered. See event system for more information on how the event system works. 
     * @param eventName The name of the event you want to attach the handler function to.
     * @param attachedTo The element you wish to attach the handler to. The handler will only be called when the event it is attached to is triggered for this element, or one of its children. Often, this can be the root element (meaning the handler will be called when the event is triggered for any element).
     * @param handlerFunction The handler function you wish to call when the event is triggered. This function will be passed all of the event's parameters as arguments, but it isn't required that it takes all of them.
     * @param getPropagated A boolean representing whether the handler will be triggered if the event was propagated down or up the element tree (starting from the source), and not triggered directly on attachedTo (that is, handlers attached with this argument set to false will only be triggered if source == this).
     * @param priority A string representing the trigger order priority relative to other event handlers of the same name. Possible values are:
     *   "high"
     *   "normal"
     *   "low"
     */
    function addEventHandler(eventName: string, attachedTo: element, handlerFunction: Function, getPropagated?: boolean, priority?: "normal"): boolean

    /**
     * This function checks if the last completed event was cancelled. This is mainly useful for custom events created by scripts.
     * Events can be cancelled using cancelEvent, this indicates that the resource which triggered the event should do whatever it can to reverse any changes made by whatever caused the event. See triggerEvent for a more detailed explanation of this. 
     * @returns Returns true if the event was cancelled, false if it wasn't or doesn't exist. 
     */
    function wasEventCancelled(): boolean
}