declare namespace MTA_Client {
    /**
     * 
     * @param forceOn 
     * @returns
     */
    function forcePlayerMap(forceOn: boolean): boolean;

    /**
     * 
     * @returns 
     */
    function getBlurLevel(): number;

    /**
     * Returns the amount of money the local player currently has.
     * Note: **The amount may vary between the server and client, you shouldn't trust the client side value to always be accurate.**
     * @returns Returns an integer with the amount of money the local player has
     */
    function getPlayerMoney(): number;

    /**
     * 
     * @returns
     */
    function getPlayerWantedLevel(): number;

    /**
     * This function adds money to a player's current money amount. To set absolute values, setPlayerMoney can be used.
     * Note: Using this function client side (not recommended) will not change a players money server side. 
     * @param amount 
     * @returns Returns true if the money was added, or false if invalid parameters were passed. 
     */
    function givePlayerMoney(amount: number): boolean;

    /**
     * 
     * @returns
     */
    function isPlayerMapForced(): boolean;

    /**
     * 
     * @param level 
     */
    function setBlurLevel(level: number): boolean;

    /**
     * - all: All of the following at the same time
     * - ammo: The display showing how much ammo the player has in their weapon
     * - area_name: The text that appears containing the name of the area a player has entered
     * - armour: The display showing the player's armor
     * - breath: The display showing the player's breath
     * - clock: The display showing the in-game time
     * - health: The display showing the player's health
     * - money: The display showing how much money the player has
     * - radar: The bottom-left corner miniradar
     * - vehicle_name: The text that appears containing the player's vehicle name when the player enters a vehicle
     * - weapon: The display showing the player's weapon
     * - radio: The display showing the radio label
     * - wanted: The display showing the player's wanted level
     * - crosshair: The weapon crosshair and sniper scope
     * @param component 
     * @param show 
     */
    function setPlayerHudComponentVisible(component: string, show: boolean): boolean;

    /**
     * 
     * @param amount 
     * @param instant 
     */
    function setPlayerMoney(amount: number, instant?: false): boolean

    /**
     * Note: Using this function client side (not recommended) will not change a players money server side. 
     * @param amount 
     * @returns Returns true if the money was taken, or false if invalid parameters were passed. 
     */
    function takePlayerMoney(amount: number): boolean
}