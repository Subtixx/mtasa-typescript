addEvent("onClientPlayerKillMessage",true)
function onClientPlayerKillMessage(killer,weapon,wr,wg,wb,kr,kg,kb,width,resource)
    if wasEventCancelled() then
        return
    end
    outputKillMessage(source,wr,wg,wb,killer,kr,kg,kb,weapon,width,resource)
end
addEventHandler("onClientPlayerKillMessage",getRootElement(),onClientPlayerKillMessage)
function outputKillMessage(source,wr,wg,wb,killer,kr,kg,kb,weapon,width,resource)
    if not iconWidths[weapon+1] then
        if type(weapon)~="string" then
            weapon=999
        end
    end
    local killerName = ""

    local wastedName = ""

    if not tonumber(wr) then
        wr=255
    end
    if not tonumber(wg) then
        wg=255
    end
    if not tonumber(wb) then
        wb=255
    end
    if not tonumber(kr) then
        kr=255
    end
    if not tonumber(kg) then
        kg=255
    end
    if not tonumber(kb) then
        kb=255
    end
    if source then
        if isElement(source) then
            if getElementType(source)=="player" then
                wastedName=getPlayerName(source)
            else
                outputDebugString("outputKillMessage - Invalid 'wasted' player specified",0,0,0,100)
                return false
            end
        else
            if type(source)=="string" then
                wastedName=source
            end
        end
    else
        outputDebugString("outputKillMessage - Invalid 'wasted' player specified",0,0,0,100)
        return false
    end
    if killer then
        if isElement(killer) then
            if getElementType(killer)=="player" then
                killerName=getPlayerName(killer)
            else
                outputDebugString("outputKillMessage - Invalid 'killer' player specified",0,0,0,100)
                return false
            end
        else
            if type(killer)=="string" then
                killerName=killer
            else
                killerName=""
            end
        end
    else
        killerName=""
    end
    if killerName==nil then
        killerName=""
    end
    return outputMessage({killerName,{["padding"]=3},{["icon"]=weapon},{["padding"]=3},{["color"]={["r"]=wr,["g"]=wg,["b"]=wb}}},kr,kg,kb)
end
