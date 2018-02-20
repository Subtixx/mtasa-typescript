declare namespace MTA {

    /**
     * 
     * @param playerName 
     * @returns
     */
    function getPlayerFromName(playerName: string): Player;

    /**
     * 
     * @param thePlayer 
     * @returns
     */
    function getPlayerName(thePlayer: Player): string;

    /**
     * 
     * @param thePlayer 
     * @returns
     */
    function getPlayerNametagColor(thePlayer: Player): [number, number, number] | boolean;

    /**
     * 
     * @param thePlayer 
     * @returns
     */
    function getPlayerNametagText(thePlayer: Player): string;

    /**
     * 
     * @param thePlayer 
     * @returns
     */
    function getPlayerPing(thePlayer: Player): number | boolean;

    /**
     * @param thePlayer
     * @returns Returns a team element representing the team the player is on, false if the player is not part of a team. 
     */
    function getPlayerTeam(thePlayer: Player): Team;

    /**
     * @param thePlayer
     * @returns Returns a string containing the client version, or false if the player is invalid. 
     */
    function getPlayerVersion(thePlayer: Player): string;

    /**
     * 
     * @param thePlayer 
     * @returns
     */
    function isPlayerNametagShowing(thePlayer: Player): boolean;

    /**
     * 
     * @returns
     */
    function isVoiceEnabled(): boolean;

    /**
     * 
     * @param thePlayer 
     * @param r 
     * @param g 
     * @param b 
     * @returns
     */
    function setPlayerNametagColor(thePlayer: Player, r: number, g: number, b: number): boolean
    
    /**
     * 
     * @param thePlayer 
     * @param b 
     * @returns
     */
    function setPlayerNametagColor(thePlayer: Player, b: boolean): boolean

    /**
     * 
     * @param thePlayer 
     * @param showing 
     * @returns 
     */
    function setPlayerNametagShowing(thePlayer: Player, showing: boolean): boolean

    /**
     * 
     * @param thePlayer 
     * @param text 
     * @returns 
     */
    function setPlayerNametagText(thePlayer: Player, text: string): boolean
}