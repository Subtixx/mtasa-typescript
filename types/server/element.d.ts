declare namespace MTA_Server {
    /**
     * 
     * @param theElement 
     */
    function clearElementVisibleTo(theElement: element): boolean;

    /**
     * 
     * @param theElement 
     * @param xPos 
     * @param yPos 
     * @param zPos 
     * @param cloneChildren 
     */
    function cloneElement(theElement: element, xPos?: 0, yPos?: 0, zPos?: 0, cloneChildren?: false): element;

    /**
     * 
     * @param theType 
     * @param index 
     */
    function getElementByIndex(theType: string, index: number): element;

    /**
     * 
     * @param theElement 
     * @param citiesonly 
     */
    function getElementZoneName(theElement: element, citiesonly?: false): string;

    /**
     * 
     * @param theElement 
     * @param visibleTo 
     */
    function isElementVisibleTo(theElement: element, visibleTo: element): boolean;

    /**
     * 
     * @param theElement 
     * @param key 
     */
    function removeElementData(theElement: element, key: string): boolean;

    /**
     * 
     * @param theElement 
     * @param thePlayer 
     */
    function setElementSyncer(theElement: element, thePlayer: Player): boolean;

    /**
     * 
     * @param theElement 
     * @param visibleTo 
     * @param visible 
     */
    function setElementVisibleTo(theElement: element, visibleTo: element, visible: boolean): boolean;

    /**
     * 
     * @param theElement 
     */
    function getElementSyncer(theElement: element): element;

    /**
     * 
     * @param theType 
     * @param startat 
     */
    function getElementsByType(theType: string, startat?: element): Table;
}