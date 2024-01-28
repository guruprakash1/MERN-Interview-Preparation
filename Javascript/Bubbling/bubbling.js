//Event bubbling is a phase in the event propagation model of the Document Object Model (DOM) in web browsers. 
//When an event occurs on a particular element, it can trigger a series of events on that element and its ancestors in the document tree.

// During the event propagation, the event first goes through the capturing phase, where it starts from the outermost ancestor and goes down to the target element. 
// After that, it enters the target phase, where the event is directly on the target element. Finally, the event enters the bubbling phase, where it travels back up from the target element to the outermost ancestor.
// For example, if you have a click event on a button inside a div, and you have event listeners on both the button and the div, the event will first reach the button during the capturing phase, then reach the button during the target phase, and finally, it will bubble up to the div during the bubbling phase.
//  This allows you to catch the same event at different levels in the DOM hierarchy.

//Opposite of bubbling  is capturing.