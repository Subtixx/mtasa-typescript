declare namespace MTA {
    /**
     * 
     * @param theElement 
     * @param theAttachToElement 
     * @param xPosOffset 
     * @param yPosOffset 
     * @param zPosOffset 
     * @param xRotOffset 
     * @param yRotOffset 
     * @param zRotOffset 
     * @returns 
	 */
    function attachElements(theElement: element, theAttachToElement: element, xPosOffset?: 0, yPosOffset?: 0, zPosOffset?: 0, xRotOffset?: 0, yRotOffset?: 0, zRotOffset?: 0): boolean;

    /**
     * 
     * @param theElement 
     * @param theAttachToElement 
     * @returns 
	 */
    function detachElements(theElement: element, theAttachToElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getAttachedElements(theElement: element): Table;

    /**
     * 
     * @param elementType 
     * @param elementID 
     * @returns 
	 */
    function createElement(elementType: string, elementID: string): element;

    /**
     * 
     * @param elementToDestroy 
     * @returns 
	 */
    function destroyElement(elementToDestroy: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementAttachedOffsets(theElement: element): [number, number, number, number, number, number];

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementAlpha(theElement: element): number;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementCollisionsEnabled(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementAttachedTo(theElement: element): element;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementBoundingBox(theElement: element): [number, number, number, number, number, number];

    /**
     * 
     * @param id 
     * @param index 
     * @returns 
	 */
    function getElementByID(id: string, index?: 0): element;

    /**
     * 
     * @param parent 
     * @param index 
     * @returns 
	 */
    function getElementChild(parent: element, index: number): element;

    /**
     * 
     * @param parent 
     * @param theType 
     * @returns 
	 */
    function getElementChildren(parent: element, theType: string): Table;

    /**
     * 
     * @param parent 
     * @returns 
	 */
    function getElementChildrenCount(parent: element): number;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementColShape(theElement: element): Colshape;

    /**
     * 
     * @param theElement 
     * @param key 
     * @param inherit 
     * @returns 
	 */
    function getElementData(theElement: element, key: string, inherit: true): object;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementDimension(theElement: element): number;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementDistanceFromCentreOfMassToBaseOfModel(theElement: element): number;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementHealth(theElement: element): number;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementID(theElement: element): string;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementInterior(theElement: element): number;

    /**
     * 
     * @param theElement 
     * @param legacy 
     * @returns 
	 */
    function getElementMatrix(theElement: element, legacy: true): Table;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementModel(theElement: element): number;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementParent(theElement: element): element;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementPosition(theElement: element): [number, number, number];

    /**
     * 
     * @param theElement 
     * @param rotOrder 
     * @returns 
	 */
    function getElementRotation(theElement: element, rotOrder?: "default"): [number, number, number];

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementRadius(theElement: element): number;

    /**
     * 
     * @param shape 
     * @param elemType 
     * @returns 
	 */
    function getElementsWithinColShape(shape: Colshape, elemType?: string): Table;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementType(theElement: element): string;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getElementVelocity(theElement: element): [number, number, number];

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function getLowLODElement(theElement: element): element;

    /**
     * 
     * @returns 
	 */
    function getRootElement(): element;

    /**
     * 
     * @param theResource 
     * @returns 
	 */
    function getResourceRootElement(theResource?: object): element;

    /**
     * 
     * @param theValue 
     * @returns 
	 */
    function isElement(theValue: any): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function isElementAttached(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function isElementCallPropagationEnabled(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @param withElement 
     * @returns 
	 */
    function isElementCollidableWith(theElement: element, withElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function isElementDoubleSided(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function isElementFrozen(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function isElementLocal(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function isElementLowLOD(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function isElementInWater(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function isElementOnScreen(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function isElementStreamable(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function isElementStreamedIn(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function isElementSyncer(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @returns 
	 */
    function isElementWaitingForGroundToLoad(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @param theShape 
     * @returns 
	 */
    function isElementWithinColShape(theElement: element, theShape: Colshape): boolean;

    /**
     * 
     * @param theElement 
     * @param theMarker 
     * @returns 
	 */
    function isElementWithinMarker(theElement: element, theMarker: Marker): boolean;

    /**
     * 
     * @param theElement 
     * @param alpha 
     * @returns 
	 */
    function setElementAlpha(theElement: element, alpha: number): boolean;

    /**
     * 
     * @param theElement 
     * @param xPosOffset 
     * @param yPosOffset 
     * @param zPosOffset 
     * @param xRotOffset 
     * @param yRotOffset 
     * @param zRotOffset 
     * @returns 
	 */
    function setElementAttachedOffsets(theElement: element, xPosOffset?: number, yPosOffset?: number, zPosOffset?: number, xRotOffset?: number, yRotOffset?: number, zRotOffset?: number): boolean;

    /**
     * 
     * @param theElement 
     * @param enabled 
     * @returns 
	 */
    function setElementCallPropagationEnabled(theElement: element, enabled: boolean): boolean;

    /**
     * 
     * @param theElement 
     * @param withElement 
     * @param enabled 
     * @returns 
	 */
    function setElementCollidableWith(theElement: element, withElement: element, enabled: boolean): boolean;

    /**
     * 
     * @param theElement 
     * @param enabled 
     * @returns 
	 */
    function setElementCollisionsEnabled(theElement: element, enabled: boolean): boolean;

    /**
     * 
     * @param theElement 
     * @param key 
     * @param value 
     * @param synchronize 
     * @returns 
	 */
    function setElementData(theElement: element, key: string, value: object, synchronize?: true): boolean;

    /**
     * 
     * @param theElement 
     * @param dimension 
     * @returns 
	 */
    function setElementDimension(theElement: element, dimension: number): boolean;

    /**
     * 
     * @param theElement 
     * @param enable 
     * @returns 
	 */
    function setElementDoubleSided(theElement: element, enable: boolean): boolean;

    /**
     * 
     * @param theElement 
     * @param freezeStatus 
     * @returns 
	 */
    function setElementFrozen(theElement: element, freezeStatus: boolean): boolean;

    /**
     * 
     * @param theElement 
     * @param newHealth 
     * @returns 
	 */
    function setElementHealth(theElement: element, newHealth: number): boolean;

    /**
     * 
     * @param theElement 
     * @param name 
     * @returns 
	 */
    function setElementID(theElement: element, name: string): boolean;

    /**
     * 
     * @param theElement 
     * @param interior 
     * @param x 
     * @param y 
     * @param z 
     * @returns 
	 */
    function setElementInterior(theElement: element, interior: number, x?: number, y?: number, z?: number): boolean;

    /**
     * 
     * @param theElement 
     * @param theMatrix 
     * @returns 
	 */
    function setElementMatrix(theElement: element, theMatrix: Table): boolean;

    /**
     * 
     * @param theElement 
     * @param model 
     * @returns 
	 */
    function setElementModel(theElement: element, model: number): boolean;

    /**
     * 
     * @param theElement 
     * @param parent 
     * @returns 
	 */
    function setElementParent(theElement: element, parent: element): boolean;

    /**
     * 
     * @param theElement 
     * @param x 
     * @param y 
     * @param z 
     * @param warp 
     * @returns 
	 */
    function setElementPosition(theElement: element, x: number, y: number, z: number, warp?: true): boolean;

    /**
     * 
     * @param theElement 
     * @param rotX 
     * @param rotY 
     * @param rotZ 
     * @param rotOrder 
     * @param conformPedRotation 
     * @returns 
	 */
    function setElementRotation(theElement: element, rotX: number, rotY: number, rotZ: number, rotOrder?: "default", conformPedRotation?: false): boolean;

    /**
     * 
     * @param theElement 
     * @param streamable 
     * @returns 
	 */
    function setElementStreamable(theElement: element, streamable: boolean): boolean;

    /**
     * 
     * @param theElement 
     * @param speedX 
     * @param speedY 
     * @param speedZ 
     * @returns 
	 */
    function setElementVelocity(theElement: element, speedX: number, speedY: number, speedZ: number): boolean;

    /**
     * 
     * @param theElement 
     * @param lowLODElement 
     * @returns 
	 */
    function setLowLODElement(theElement: element, lowLODElement: element): boolean;
}