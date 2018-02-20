MTA.addEvent("onClientPlayerKillMessage", true)
function onClientPlayerKillMessage(killer: Player, weapon, wr, wg, wb, kr, kg, kb, width, resource) {
    if (MTA.wasEventCancelled()) return;
    outputKillMessage(source, wr, wg, wb, killer, kr, kg, kb, weapon, width, resource)
}
MTA.addEventHandler("onClientPlayerKillMessage", MTA.getRootElement(), onClientPlayerKillMessage);

function outputKillMessage(source, wr, wg, wb, killer, kr, kg, kb, weapon, width, resource): boolean {
    if (!iconWidths[weapon]) {
        if (typeof weapon != "string") {
            weapon = 999
        }
    }

    let killerName = "";
    let wastedName = "";
    if(!tonumber(wr))
        wr = 255;
    if(!tonumber(wg))
        wg = 255;
    if(!tonumber(wb))
        wb = 255;
    if(!tonumber(kr))
        kr = 255;
    if(!tonumber(kg))
        kg = 255;
    if(!tonumber(kb))
        kb = 255;

    if (source) {
        if (MTA.isElement(source)) {
            if (MTA.getElementType(source) == "player") {
                wastedName = MTA.getPlayerName(source);
            } else {
                MTA.outputDebugString("outputKillMessage - Invalid 'wasted' player specified", 0, 0, 0, 100);
                return false;
            }
        } else if (typeof source == "string") {
            wastedName = source;
        }
    } else {
        MTA.outputDebugString("outputKillMessage - Invalid 'wasted' player specified", 0, 0, 0, 100)
        return false;
    }

    if (killer) {
        if (MTA.isElement(killer)) {
            if (MTA.getElementType(killer) == "player") {
                killerName = MTA.getPlayerName(killer);
            } else {
                MTA.outputDebugString("outputKillMessage - Invalid 'killer' player specified", 0, 0, 0, 100);
                return false;
            }
        } else if (typeof killer == "string") {
            killerName = killer;
        } else
            killerName = "";
    } else
        killerName = "";

    //create the new text
    if (killerName == null)
        killerName = "";
    
    //{ killerName, { "padding", width=3 }, { "icon", id=weapon }, { "padding", width=3 }, { "color", r=wr, g=wg, b=wb }, wastedName}
    return outputMessage([killerName, { "padding": 3 }, { "icon": weapon }, { "padding": 3 }, { "color": { "r": wr, "g": wg, "b": wb } }], kr, kg, kb);
}