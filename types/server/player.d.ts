declare namespace MTA_Server {
    /**
     * 
     * @param thePlayer 
     * @param forceOn 
     * @returns
     */
    function forcePlayerMap(thePlayer: Player, forceOn: boolean): boolean

    /**
     * This function returns a table of all the alive players on the server. Opposite function of getDeadPlayers. 
     * @returns
     */
    function getAlivePlayers(): Table

    /**
     * This function returns a table of all currently dead players on the server. 
     * @returns
     */
    function getDeadPlayers(): Table

    /**
     * This function retrieves a players ASE announce value under a certain key. 
     * @param thePlayer 
     * @param key 
     * @returns
     */
    function getPlayerAnnounceValue(thePlayer: element, key: string): string

    /**
     * 
     * @param thePlayer 
     * @returns 
     */
    function getPlayerBlurLevel(thePlayer: Player): number

    /**
     * 
     * @returns 
     */
    function getPlayerCount(): number

    /**
     * 
     * @param thePlayer 
     */
    function getPlayerIdleTime(thePlayer: Player): number

    /**
     * 
     * @param thePlayer 
     */
    function getPlayerIP(thePlayer: Player): string

    /**
     * Returns the amount of money a player currently has. Note: **The amount may vary between the server and client, you shouldn't trust the client side value to always be accurate.**
     * @param thePlayer The player you wish the retrieve the amount of money from.
     * @returns Returns an integer with the amount of money the specified player has, false if the player is invalid.
     */
    function getPlayerMoney(thePlayer: Player): boolean | number

    /**
     * 
     * @param thePlayer 
     */
    function getPlayerSerial(thePlayer: Player): string | boolean

    /**
     * **SERVER SIDE**
     * @returns Returns an int from 0 to 6 representing the player's wanted level, false if the player does not exist. 
     */
    function getPlayerWantedLevel(thePlayer: Player): number

    /**
     * 
     * @returns 
     */
    function getRandomPlayer(): Player

    /**
     * This function adds money to a player's current money amount. To set absolute values, setPlayerMoney can be used.
     * @returns Returns true if the money was added, or false if invalid parameters were passed. 
     * @see setPlayerMoney
     */
    function givePlayerMoney(thePlayer: Player, amount: number): boolean

    /**
     * 
     * @returns 
     */
    function isPlayerMapForced(thePlayer: Player): boolean

    /**
     * 
     * @param thePlayer 
     */
    function isPlayerMuted(thePlayer: Player): boolean

    /**
     * 
     * @param thePlayer 
     * @param serverIP 
     * @param serverPort 
     * @param serverPassword 
     */
    function redirectPlayer(thePlayer: Player, serverIP: string, serverPort: number, serverPassword?: string): boolean

    /**
     * 
     * @param thePlayer 
     */
    function resendPlayerACInfo(thePlayer: Player): boolean

    /**
     * 
     * @param thePlayer 
     */
    function resendPlayerModInfo(thePlayer: Player): boolean

    /**
     * 
     * @param thePlayer 
     * @param key 
     * @param value 
     */
    function setPlayerAnnounceValue(thePlayer: element, key: string, value: string): boolean

    /**
     * 
     * @param thePlayer 
     * @param level 
     */
    function setPlayerBlurLevel(thePlayer: Player, level: number): boolean

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
     * @param thePlayer 
     * @param component 
     * @param show 
     */
    function setPlayerHudComponentVisible(thePlayer: Player, component: string, show: boolean): boolean

    /**
     * 
     * @param thePlayer 
     * @param amount 
     * @param instant 
     */
    function setPlayerMoney(thePlayer: Player, amount: number, instant?: false): boolean

    /**
     * 
     * @param thePlayer 
     * @param state 
     */
    function setPlayerMuted(thePlayer: Player, state: boolean): boolean

    /**
     * 
     * @param thePlayer 
     * @param newName 
     */
    function setPlayerName(thePlayer: Player, newName: string): boolean

    /**
     * 
     * @param thePlayer 
     * @param broadcastTo 
     */
    function setPlayerVoiceBroadcastTo(thePlayer: element, broadcastTo: element): boolean
    
    /**
     * 
     * @param thePlayer 
     * @param broadcastTo 
     */
    function setPlayerVoiceBroadcastTo(thePlayer: element, broadcastTo: Table): boolean

    /**
     * 
     * @param thePlayer 
     * @param ignoreFrom 
     */
    function setPlayerVoiceIgnoreFrom(thePlayer: element, ignoreFrom: element): boolean

    /**
     * 
     * @param thePlayer 
     * @param ignoreFrom 
     */
    function setPlayerVoiceIgnoreFrom(thePlayer: element, ignoreFrom: Table): boolean

    /**
     * 
     * @param thePlayer 
     * @param stars 
     */
    function setPlayerWantedLevel(thePlayer: Player, stars: number): boolean

    /**
     * 
     * @param thePlayer 
     * @param x 
     * @param y 
     * @param z 
     * @param rotation 
     * @param skinID 
     * @param interior 
     * @param dimension 
     * @param theTeam 
     */
    function spawnPlayer(thePlayer: Player, x: number, y: number, z: number, rotation?: 0, skinID?: 0, interior?: 0, dimension?: 0, theTeam?: MTA.Team): boolean

    /**
     * 
     * @param thePlayer 
     * @param amount 
     * @returns Returns true if the money was taken, or false if invalid parameters were passed. 
     */
    function takePlayerMoney(thePlayer: Player, amount: number): boolean

    /**
     * 
     * @param thePlayer 
     * @param width 
     * @param height 
     * @param tag 
     * @param quality 
     * @param maxBandwith 
     */
    function takePlayerScreenShot(thePlayer: Player, width: number, height: number, tag?: "", quality?: 30, maxBandwith?: 5000): boolean
}