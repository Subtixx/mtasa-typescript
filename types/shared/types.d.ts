/**
 * Lua Table definition
 */
type Table = {
    [key: number]: any;
    [key: string]: any;
};

/**
 * !Phantom
*/
declare namespace MTA {
    /**
     * An element is a generic class that can represent almost all in-game entities
     */
    //type element = object;

    /**
     * The player class represents pedestrians controlled by clients. A player object is created when a client connects to the server and destroyed when he quits.
     * Players cannot be created or destroyed otherwise.
     * The element type of this class is "player". 
     */
    //type Player = element;

    /**
     * The word "ped" is short for "pedestrian" and describes any person in GTA, be it a player or an NPC character.
     * (And even though "pedestrian" doesn't technically apply to people that drive, they still fall under this name)
     * The createPed function specifically creates an NPC, but all other ped functions work on both players and NPC's as they're pretty much the same thing to San Andreas.
     * The element type of a NPC is "ped". 
     */
    type Ped = element;

    /**
     * The vehicle class represents vehicles in the GTA world.
     * Vehicles can be occupied and controlled by players.
     * The element type of this class is "vehicle". 
     */
    type Vehicle = element;

    /**
     * The object class represents static, 3-D models in the GTA world.
     * Objects can only represent models created by the server, they cannot represent models that are part of the GTA's default landscape.
     * Examples of objects include building models, roads, and terrain.
     * The element type of this class is "object". 
     */
    type GameObject = element;

    /**
     * The pickup class represents weapon, health, or armor pickups in the GTA world.
     * Pickups can be picked up by players when they are walked over.
     * Players will not be given health or armor pickups if their health or armor is already full.
     * The element type of this class is "pickup". 
     */
    type Pickup = element;

    /**
     * The marker class represents colored, 3D shapes in the GTA world.
     * There are several types of markers, including cylinders and checkpoints.
     * In scripts, markers are often used to mark spots and trigger some sort of action when a player goes into them.
     * The element type of this class is "marker". 
     */
    type Marker = element;

    /**
     * The collision shape class represents invisible collision detection shapes that can be created in the GTA world.
     * Collision shapes are typically used to detect physical entities moving through them and perform actions when they do.
     * The element type for this class is colshape. 
     */
    type Colshape = element;

    /**
     * The blip class represents small icons or blips that can be shown on a player's radar.
     * The element type of this class is "blip". The list of blip icons are available on the Blip Icons (https://wiki.multitheftauto.com/wiki/Blip_Icons) page. 
     */
    type Blip = element;

    /**
     * The radar area class represents coloured areas that can be displayed on a player's radar.
     * The element type of this class is "radararea". 
     */
    type RadarArea = element;

    /**
     * The projectile class represents the projectiles of certain weapons that are created when the weapon is fired.
     * Alternatively these can be created using createProjectile
     * 16: Grenade
     * 17: Tear Gas Grenade
     * 18: Molotov
     * 19: Rocket (simple)
     * 20: Rocket (heat seeking)
     * 21: Air Bomb
     * 39: Satchel Charge
     * 58: Flare from hydra
     */
    type Projectile = element;

    /**
     * The team class represents player teams.
     * Players on the same team can use team features such as teamchat or friendly fire.
     * The element type of this class is: "team". 
     */
    type Team = element;
}

/**
 * @returns a table of resource names containing all export functions
 * !Phantom
 */
declare const exports: Table;

/**
 * returns a resource element of the resource the snippet was executed in
 * !Phantom
 */
declare const resource: element;

/**
 * returns a resource root element of the resource the snippet was executed in
 * !Phantom
 */
declare const resourceRoot: element;

/**
 * returns the root element of the server
 * !Phantom
 */
declare const root: element;

/**
 * returns the root element of all GUI elements.
 * !Phantom
 */
declare const guiRoot: element;

/**
 * returns the player element of the local player.
 * !Phantom
 */
declare const localPlayer: Player;

/**
 * The player or element the event was attached to
 * !Phantom
 */
declare const source: element;

/**
 * the name of the event ("onResourceStart", "onPlayerWasted" etc.)
 * !Phantom
 */
declare const eventName: string;

/**
 * the client that called the event
 * !Phantom
 */
declare const client: Player;

/**
 * the root of the resource that called the event
 * !Phantom
 */
declare const sourceResourceRoot: element;

/**
 * the resource that called the event 
 * !Phantom
 */
declare const sourceResource: element;

/**
 * current timer in callback function.
 * !Phantom
 */
declare const sourceTimer: element;

declare function tonumber(str : any) : number | boolean;